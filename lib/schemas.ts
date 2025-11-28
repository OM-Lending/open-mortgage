import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
});

export const valuationFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().optional(),
  address: z.string().min(1, { message: 'Property Address is required' }),
  propertyType: z.string().min(1, { message: 'Property Type is required' }),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ValuationFormData = z.infer<typeof valuationFormSchema>;

