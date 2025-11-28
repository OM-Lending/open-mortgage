'use server';

import { contactFormSchema } from '@/lib/schemas';
import { sendAdminNotification } from '@/lib/email';

export type ContactState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
  message?: string;
};

export async function submitContactForm(prevState: ContactState, formData: FormData): Promise<ContactState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  };

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fix the errors below.',
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  const emailResult = await sendAdminNotification({
    subject: `New Contact Inquiry from ${name}`,
    html: `
      <h2>New Contact Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  if (!emailResult.success) {
    return {
      message: 'Failed to send message. Please try again later.',
    };
  }

  return {
    success: true,
    message: 'Message sent successfully! We will contact you shortly.',
  };
}

