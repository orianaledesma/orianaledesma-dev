import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { ContactFormData } from '../models/contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  sendMessage(data: ContactFormData): Observable<void> {
    return from(
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        { from_name: data.name, reply_to: data.email, message: data.message },
        { publicKey: environment.emailjs.publicKey },
      ),
    ).pipe(map(() => undefined));
  }
}
