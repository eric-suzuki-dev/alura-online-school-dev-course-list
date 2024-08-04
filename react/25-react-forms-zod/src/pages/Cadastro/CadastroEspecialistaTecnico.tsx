import { useFieldArray, useForm } from "react-hook-form";
import {
  Button,
  ButtonContainer,
  Divisor,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
} from "../../components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const esquemaCadastroEspecialista = z.object({
  crm: z.string().min(1, "O campo não pode ser vazio"),
  especialidades: z.array(
    z.object({
      especialidade: z.string().min(1, "Preencha a sua especialidade"),
      anoConclusao: z.coerce
        .number({
          errorMap: () => {
            return { message: "Insira um número" };
          },
        })
        .min(1, "Preencha a seu ano de conclusão"),
      instituicao: z.string().min(1, "Preencha a sua instituição de ensino"),
    })
  ),
});

type FormEspecialista = z.infer<typeof esquemaCadastroEspecialista>;

const CadastroEspecialistaTecnico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormEspecialista>({
    resolver: zodResolver(esquemaCadastroEspecialista),
    mode: "all",
    defaultValues: {
      crm: "",
    },
  });

  const aoSubmeter = (dados: FormEspecialista) => {
    console.log(dados);
  };

  const { fields, append } = useFieldArray({
    control,
    name: "especialidades",
  });

  const adicionarNovaEspecialidade = () => {
    append({
      especialidade: "",
      anoConclusao: 0,
      instituicao: "",
    });
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
            $error={!!errors.crm}
            {...register("crm")}
          />
          {errors.crm && <ErrorMessage>{errors.crm.message}</ErrorMessage>}
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
                $error={!!errors.especialidades?.[index]?.especialidade}
                {...register(`especialidades.${index}.especialidade`)}
              />
              {errors.especialidades?.[index]?.especialidade && (
                <ErrorMessage>
                  {errors.especialidades?.[index]?.especialidade?.message}
                </ErrorMessage>
              )}
            </Fieldset>

            <FormContainer>
              <Fieldset>
                <Label>Ano de conclusão</Label>
                <Input
                  id="campo-ano-conclusao"
                  type="text"
                  placeholder="2005"
                  $error={!!errors.especialidades?.[index]?.anoConclusao}
                  {...register(`especialidades.${index}.anoConclusao`)}
                />
                {errors.especialidades?.[index]?.anoConclusao && (
                  <ErrorMessage>
                    {errors.especialidades?.[index]?.anoConclusao?.message}
                  </ErrorMessage>
                )}
              </Fieldset>
              <Fieldset>
                <Label>Instituição de ensino</Label>
                <Input
                  id="campo-instituicao-ensino"
                  type="text"
                  placeholder="USP"
                  $error={!!errors.especialidades?.[index]?.instituicao}
                  {...register(`especialidades.${index}.instituicao`)}
                />
                {errors.especialidades?.[index]?.instituicao && (
                  <ErrorMessage>
                    {errors.especialidades?.[index]?.instituicao?.message}
                  </ErrorMessage>
                )}
              </Fieldset>
            </FormContainer>
            <Divisor />
          </div>
        ))}
        <ButtonContainer>
          <Button
            type="button"
            onClick={adicionarNovaEspecialidade}
            $variante="secundario"
          >
            Adicionar Especialidade
          </Button>
        </ButtonContainer>
        <Button type="submit">Avançar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaTecnico;