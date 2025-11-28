import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailPayload {
  subject: string;
  html: string;
}

export async function sendAdminNotification(payload: EmailPayload) {
  const from = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
  const to = process.env.ADMIN_EMAIL || 'info@omlending.com.au';

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: payload.subject,
      html: payload.html,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Email Send Exception:', error);
    return { success: false, error };
  }
}

