'use client';

import { useActionState } from 'react';
import { submitContactForm, ContactState } from '@/app/actions/contact';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';

const initialState: ContactState = {
  message: '',
  errors: {},
};

interface ContactFormProps {
  tName: string;
  tEmail: string;
  tPhone: string;
  tMessage: string;
  tSubmit: string;
}

export function ContactForm({ tName, tEmail, tPhone, tMessage, tSubmit }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {state.success && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          {state.message}
        </div>
      )}
      
      {!state.success && state.message && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {state.message}
        </div>
      )}

      <div>
        <Input
          type="text"
          label={tName}
          placeholder="Enter your name"
          name="name"
          defaultValue=""
          aria-invalid={!!state.errors?.name}
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
        )}
      </div>
      
      <div>
        <Input
          type="email"
          label={tEmail}
          placeholder="Enter your email"
          name="email"
          defaultValue=""
          aria-invalid={!!state.errors?.email}
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
        )}
      </div>
      
      <div>
        <Input
          type="tel"
          label={tPhone}
          placeholder="Enter your phone number"
          name="phone"
          defaultValue=""
        />
      </div>
      
      <div>
        <Textarea
          label={tMessage}
          placeholder="Tell us how we can help"
          name="message"
          defaultValue=""
          aria-invalid={!!state.errors?.message}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        className="w-full"
        disabled={isPending}
      >
        {isPending ? 'Sending...' : tSubmit}
      </Button>
    </form>
  );
}

