#!/bin/bash
# Regenera src/assets/images/og/og-image.jpg desde scripts/og-image-template.html
# Requiere: Google Chrome instalado, sips (macOS built-in)
# Uso: bash scripts/generate-og-image.sh

set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TEMPLATE="$ROOT/scripts/og-image-template.html"
OUT_DIR="$ROOT/src/assets/images/og"
OUT_PNG="/tmp/og-render-raw.png"
OUT_JPG="$OUT_DIR/og-image.jpg"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

mkdir -p "$OUT_DIR"

# Render at 1200x720 (Chrome headless's effective viewport is ~540 vs declared 630)
"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --window-size=1200,720 \
  --virtual-time-budget=4000 \
  --screenshot="$OUT_PNG" "file://$TEMPLATE"

# Crop centered to 1200x630
sips -c 630 1200 "$OUT_PNG" >/dev/null

# Convert to JPG quality 90
sips -s format jpeg -s formatOptions 90 "$OUT_PNG" --out "$OUT_JPG" >/dev/null

echo "OK → $OUT_JPG ($(sips -g pixelWidth -g pixelHeight "$OUT_JPG" | tail -2 | tr -d '\n'))"
