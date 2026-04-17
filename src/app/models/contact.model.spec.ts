import { ContactFormData } from './contact.model';

describe('ContactFormData', () => {
  it('should have the correct shape with all required fields', () => {
    const data: ContactFormData = {
      name:    'Test User',
      email:   'test@example.com',
      message: 'This is a test message',
    };

    expect(data.name).toBeDefined();
    expect(data.email).toBeDefined();
    expect(data.message).toBeDefined();
  });

  it('should have exactly three fields', () => {
    const data: ContactFormData = {
      name:    'Test User',
      email:   'test@example.com',
      message: 'This is a test message',
    };

    const keys = Object.keys(data);
    expect(keys.length).toBe(3);
    expect(keys).toContain('name');
    expect(keys).toContain('email');
    expect(keys).toContain('message');
  });

  it('should accept string values for all fields', () => {
    const data: ContactFormData = {
      name:    'Oriana Ledesma',
      email:   'oriana@example.com',
      message: 'Hello, I have a project to discuss.',
    };

    expect(typeof data.name).toBe('string');
    expect(typeof data.email).toBe('string');
    expect(typeof data.message).toBe('string');
  });
});
