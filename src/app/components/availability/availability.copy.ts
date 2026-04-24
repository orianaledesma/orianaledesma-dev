export interface AvailabilitySlot {
  label: string;
  detail: string;
  open: boolean;
}

export interface AvailabilityCopy {
  h2: string;
  slots: AvailabilitySlot[];
  closing: string;
  cta: string;
}

export const AVAILABILITY_COPY: AvailabilityCopy = {
  h2: 'Q2 2026 availability',

  slots: [
    { label: 'Creator Landings',    detail: '3 open · June delivery',  open: true  },
    { label: 'Retainer slot',       detail: '1 open · starting May',   open: true  },
    { label: 'Travel-Tech project', detail: 'By application',          open: false },
  ],

  closing: 'Booking closes June 15 or when filled.',
  cta: 'Claim a slot →',
};
