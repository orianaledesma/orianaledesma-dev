import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import emailjs from '@emailjs/browser';
import { ContactService } from './contact.service';
import { ContactFormData } from '../models/contact.model';

const MOCK_DATA: ContactFormData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message for the contact form.',
};

describe('ContactService', () => {
    let service: ContactService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(ContactService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call emailjs.send with the correct parameters', async () => {
        const sendSpy = vi.spyOn(emailjs, 'send').mockResolvedValue({ status: 200, text: 'OK' });

        service.sendMessage(MOCK_DATA).subscribe({
            complete: () => {
                expect(sendSpy).toHaveBeenCalledWith(expect.any(String), expect.any(String), {
                    from_name: 'Test User',
                    reply_to: 'test@example.com',
                    message: 'This is a test message for the contact form.',
                }, { publicKey: expect.any(String) });
                ;
            },
        });
    });

    it('should return an Observable that completes on success', async () => {
        vi.spyOn(emailjs, 'send').mockResolvedValue({ status: 200, text: 'OK' });

        let nextCalled = false;

        service.sendMessage(MOCK_DATA).subscribe({
            next: () => { nextCalled = true; },
            complete: () => {
                expect(nextCalled).toBe(true);
                ;
            },
        });
    });

    it('should propagate network errors through the Observable', async () => {
        vi.spyOn(emailjs, 'send').mockRejectedValue(new Error('Network error'));

        service.sendMessage(MOCK_DATA).subscribe({
            error: (err: Error) => {
                expect(err.message).toBe('Network error');
                ;
            },
        });
    });

    it('should emit void (undefined) on success — not the raw emailjs response', async () => {
        vi.spyOn(emailjs, 'send').mockResolvedValue({ status: 200, text: 'OK' });

        service.sendMessage(MOCK_DATA).subscribe({
            next: (value) => {
                expect(value).toBeUndefined();
                ;
            },
        });
    });
});
