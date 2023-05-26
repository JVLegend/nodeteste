import { FormWrapper } from "./FormWrapper";

type UserQuestionData = {
  nome: string;
  email: string;
  cnpj: string;
};

type UserQuestionFormProps = UserQuestionData & {
  updateFields: (fields: Partial<UserQuestionData>) => void;
};

export function UserQuestionForm({
  nome,
  email,
  cnpj,
  updateFields,
}: UserQuestionFormProps) {
  return (
    <FormWrapper title="Cadastro da empresa">
      <label>Nome</label>
      <input
        autoFocus
        required
        type="text"
        value={nome}
        onChange={e => updateFields({ nome: e.target.value })}
      />
      <label>Email</label>
      <input
        required
        type="email"
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>CNPJ</label>
      <textarea
        required
        value={cnpj}
        onChange={e => updateFields({ cnpj: e.target.value })}
      />
    </FormWrapper>
  );
}
