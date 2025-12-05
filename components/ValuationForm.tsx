 'use client';

import { useActionState } from 'react';
import { submitValuationForm, ValuationState } from '@/app/actions/valuation';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';
import { Button } from '@/components/Button';
import { useTranslations } from 'next-intl';

const initialState: ValuationState = {
  message: '',
  errors: {},
};

interface ValuationFormProps {
  tName: string;
  tEmail: string;
  tPhone: string;
  tMessage: string;
  tSubmit?: string; // Optional if not in common namespace yet
}

export function ValuationForm({ tName, tEmail, tPhone, tMessage }: ValuationFormProps) {
  const [state, formAction, isPending] = useActionState(submitValuationForm, initialState);
  const tCommon = useTranslations('common');
  const tResources = useTranslations('resources');

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
          placeholder={tCommon('placeholders.name')}
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
          placeholder={tCommon('placeholders.email')}
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
          placeholder={tCommon('placeholders.phone')}
          name="phone"
          defaultValue=""
        />
      </div>
      
      <div>
        <Input
          type="text"
          label={tResources('valuationAddressLabel')}
          placeholder={tResources('valuationAddressPlaceholder')}
          name="address"
          defaultValue=""
          aria-invalid={!!state.errors?.address}
        />
        {state.errors?.address && (
          <p className="mt-1 text-sm text-red-600">{state.errors.address[0]}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#0d3250] mb-2">
          {tResources('valuationPropertyTypeLabel')}
        </label>
        <select 
          name="propertyType"
          className="w-full px-4 py-2 border border-[#e0e0e0] bg-white text-[#0d3250] focus:outline-none focus:border-[#0d3250]"
          defaultValue="House"
        >
          <option value="House">{tResources('valuationPropertyTypes.house')}</option>
          <option value="Apartment">{tResources('valuationPropertyTypes.apartment')}</option>
          <option value="Commercial">{tResources('valuationPropertyTypes.commercial')}</option>
          <option value="Land">{tResources('valuationPropertyTypes.land')}</option>
        </select>
        {state.errors?.propertyType && (
          <p className="mt-1 text-sm text-red-600">{state.errors.propertyType[0]}</p>
        )}
      </div>
      
      <div>
        <Textarea
          label={tMessage}
          placeholder={tResources('valuationDetailsPlaceholder')}
          name="message"
          defaultValue=""
        />
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          className="w-full"
          disabled={isPending}
        >
          {isPending
            ? tResources('valuationSubmitting')
            : tResources('valuationSubmit')}
        </Button>
      </div>
    </form>
  );
}

