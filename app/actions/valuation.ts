'use server';

import { valuationFormSchema } from '@/lib/schemas';
import { sendAdminNotification } from '@/lib/email';

export type ValuationState = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    address?: string[];
    propertyType?: string[];
    message?: string[];
  };
  message?: string;
};

export async function submitValuationForm(prevState: ValuationState, formData: FormData): Promise<ValuationState> {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    propertyType: formData.get('propertyType'),
    message: formData.get('message'),
  };

  const validatedFields = valuationFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fix the errors below.',
    };
  }

  const { name, email, phone, address, propertyType, message } = validatedFields.data;

  const emailResult = await sendAdminNotification({
    subject: `New Valuation Request from ${name}`,
    html: `
      <h2>New Property Valuation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <hr />
      <p><strong>Property Address:</strong> ${address}</p>
      <p><strong>Property Type:</strong> ${propertyType}</p>
      <p><strong>Additional Details:</strong></p>
      <p>${message ? message.replace(/\n/g, '<br>') : 'None'}</p>
    `,
  });

  if (!emailResult.success) {
    return {
      message: 'Failed to submit request. Please try again later.',
    };
  }

  return {
    success: true,
    message: 'Valuation request submitted successfully! We will contact you shortly.',
  };
}

