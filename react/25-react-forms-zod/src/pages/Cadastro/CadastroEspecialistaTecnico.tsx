import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm<FormEspecialista>();

  const aoSubmeter = (dados: FormEspecialista) => {
    console.log(dados);
  };

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
        <Fieldset>
          <Label>Especialidade</Label>
          <Input
            id="campo-especialidade"
            type="text"
            placeholder="Qual sua especialidade?"
          />
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label>Ano de conclusão</Label>
            <Input id="campo-ano-conclusao" type="text" placeholder="2005" />
          </Fieldset>
          <Fieldset>
            <Label>Instituição de ensino</Label>
            <Input
              id="campo-instituicao-ensino"
              type="text"
              placeholder="USP"
            />
          </Fieldset>
        </FormContainer>
        <Divisor />
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