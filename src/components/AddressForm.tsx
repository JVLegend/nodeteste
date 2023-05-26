import React from 'react';
import { FormWrapper } from './FormWrapper';

export type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = {
  updateFields: (fields: Partial<AddressData>) => void;
} & AddressData;

export const AddressForm: React.FC<AddressFormProps> = ({ street, city, state, zip, updateFields }) => {
  return (
    <FormWrapper title="Detalhes empresa">
      <label>Nome fantasia</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={e => updateFields({ street: e.target.value })}
      />
      <label>Telefone vendas</label>
      <input
        required
        type="text"
        value={city}
        onChange={e => updateFields({ city: e.target.value })}
      />
      <label>Telefone whatsapp</label>
      <input
        required
        type="text"
        value={state}
        onChange={e => updateFields({ state: e.target.value })}
      />
      <label>Cidade da sede</label>
      <input
        required
        type="text"
        value={zip}
        onChange={e => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  );
};
