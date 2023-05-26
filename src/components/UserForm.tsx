import React from 'react';
import { FormWrapper } from './FormWrapper';

export type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = {
  updateFields: (fields: Partial<UserData>) => void;
} & UserData;

export const UserForm: React.FC<UserFormProps> = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormWrapper title="Dados da Agencia">
      <label>Nome do representante</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Nome da empresa</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>CNPJ</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  );
};
