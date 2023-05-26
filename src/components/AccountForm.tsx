import React from 'react';
import { FormWrapper } from './FormWrapper';

export type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = {
  updateFields: (fields: Partial<AccountData>) => void;
} & AccountData;

export const AccountForm: React.FC<AccountFormProps> = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title="Dados da empresa">
      <label>Segmento</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Facilitadores</label>
      <input
        required
        type="password"
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};
