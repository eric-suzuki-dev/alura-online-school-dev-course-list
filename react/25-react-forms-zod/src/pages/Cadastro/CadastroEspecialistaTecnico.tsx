import { useFieldArray, useForm } from "react-hook-form";
import {
  Button,
  ButtonContainer,
  Divisor,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
} from "../../components";
import { z } from "zod";

const esquemaCadastroEspecialista = z.object({
  crm: z.string().min(1, "O campo não pode ser vazio"),
  especialidades: z.array(
    z.object({
      especialidade: z.string().min(1, "Preencha a sua especialidade"),
      anoConclusao: z.number().min(1, "Preencha a seu ano de conclusão"),
      instituicao: z.string().min(1, "Preencha a sua instituição de ensino"),
    })
  ),
});

type FormEspecialista = z.infer<typeof esquemaCadastroEspecialista>;

const CadastroEspecialistaTecnico = () => {
  const { register, handleSubmit, control } = useForm<FormEspecialista>();

  const aoSubmeter = (dados: FormEspecialista) => {
    console.log(dados);
  };

  const { fields, append } = useFieldArray({
    control,
    name: "especialidades",
  });

  return (
    <>
      <Titulo className="titulo">Agora, seus dados técnicos:</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <Fieldset>
          <Label>CRM</Label>
          <Input
            id="campo-crm"
            type="text"
            placeholder="Insira seu número de registro"
            {...register("crm")}
          />
        </Fieldset>
        <Divisor />
        {fields.map((field, index) => (
          <div key={field.id}>
            <Fieldset>
              <Label>Especialidade</Label>
              <Input
                id="campo-especialidade"
                type="text"
                placeholder="Qual sua especialidade?"
                {...register(`especialidades.${index}.especialidade`)}
              />
            </Fieldset>

            <FormContainer>
              <Fieldset>
                <Label>Ano de conclusão</Label>
                <Input
                  id="campo-ano-conclusao"
                  type="text"
                  placeholder="2005"
                  {...register(`especialidades.${index}.anoConclusao`)}
                />
              </Fieldset>
              <Fieldset>
                <Label>Instituição de ensino</Label>
                <Input
                  id="campo-instituicao-ensino"
                  type="text"
                  placeholder="USP"
                  {...register(`especialidades.${index}.instituicao`)}
                />
              </Fieldset>
            </FormContainer>
            <Divisor />
          </div>
        ))}
        <ButtonContainer>
          <Button type="button" $variante="secundario">
            Adicionar Especialidade
          </Button>
        </ButtonContainer>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaTecnico;