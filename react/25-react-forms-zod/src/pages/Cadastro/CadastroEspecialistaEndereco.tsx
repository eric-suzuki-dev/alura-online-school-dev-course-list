import { useForm } from "react-hook-form";
import {
  Button,
  Divisor,
  ErrorMessage,
  Fieldset,
  Form,
  FormContainer,
  Input,
  Label,
  Titulo,
  UploadDescription,
  UploadIcon,
  UploadInput,
  UploadLabel,
  UploadTitulo,
} from "../../components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";

const esquemaCadastroEnderecoEspecialista = z.object({
  endereco: z.object({
    cep: z.string().min(8, "Informe um CEP válido"),
    avatar: z.instanceof(FileList).transform((lista) => lista.item(0)!),
    rua: z.string().min(1, "Informe uma rua válida"),
    numero: z.coerce.number().min(1, "Informe um número válido"),
    bairro: z.string().min(1, "Informe um bairro válido"),
    localidade: z.string().min(1, "Informe uma localidade válido"),
  }),
});

type FormCadastroEnderecoEspecialista = z.infer<
  typeof esquemaCadastroEnderecoEspecialista
>;

type EnderecoProps = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

const CadastroEspecialistaEndereco = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormCadastroEnderecoEspecialista>({
    resolver: zodResolver(esquemaCadastroEnderecoEspecialista),
    defaultValues: {
      endereco: {
        cep: "",
        avatar: new File([""], "dummy.jpg", { type: "image/jpeg" }),
        rua: "",
        numero: 0,
        bairro: "",
        localidade: "",
      },
    },
  });

  const aoSubmeter = (dados: FormCadastroEnderecoEspecialista) => {
    console.log(dados);
  };

  const handleSetDados = useCallback(
    (dados: EnderecoProps) => {
      setValue("endereco.bairro", dados.bairro);
      setValue("endereco.rua", dados.logradouro);
      setValue("endereco.localidade", dados.localidade + ", " + dados.uf);
    },
    [setValue]
  );

  const buscaEndereco = useCallback(
    async (cep: string) => {
      const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const dados = await result.json();
      handleSetDados(dados);
    },
    [handleSetDados]
  );

  const codigoCep = watch("endereco.cep");

  useEffect(() => {
    if (codigoCep.length !== 8) return;
    buscaEndereco(codigoCep);
  }, [buscaEndereco, codigoCep]);

  return (
    <>
      <Titulo className="titulo">Para finalizar, só alguns detalhes!</Titulo>
      <Form onSubmit={handleSubmit(aoSubmeter)}>
        <>
          <UploadTitulo>Sua foto</UploadTitulo>
          <UploadLabel htmlFor="campo-upload">
            <UploadIcon />
            <UploadDescription>Clique para enviar</UploadDescription>
            <UploadInput
              accept="image/*"
              id="campo-upload"
              type="file"
              {...register("endereco.avatar")}
            />
          </UploadLabel>
          {errors.endereco?.avatar && (
            <ErrorMessage>{errors.endereco?.avatar.message}</ErrorMessage>
          )}
        </>

        <Divisor />
        <Fieldset>
          <Label htmlFor="campo-cep">CEP</Label>
          <Input
            id="campo-cep"
            placeholder="Insira seu CEP"
            type="text"
            $error={!!errors.endereco?.cep}
            {...register("endereco.cep")}
          />
          {errors.endereco?.cep && (
            <ErrorMessage>{errors.endereco?.cep.message}</ErrorMessage>
          )}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="campo-rua">Rua</Label>
          <Input
            id="campo-rua"
            placeholder="Rua Agarikov"
            type="text"
            $error={!!errors.endereco?.rua}
            {...register("endereco.rua")}
          />
          {errors.endereco?.rua && (
            <ErrorMessage>{errors.endereco?.rua.message}</ErrorMessage>
          )}
        </Fieldset>

        <FormContainer>
          <Fieldset>
            <Label htmlFor="campo-numero-rua">Número</Label>
            <Input
              id="campo-numero-rua"
              placeholder="Ex: 1440"
              type="text"
              $error={!!errors.endereco?.numero}
              {...register("endereco.numero")}
            />
            {errors.endereco?.numero && (
              <ErrorMessage>{errors.endereco?.numero.message}</ErrorMessage>
            )}
          </Fieldset>
          <Fieldset>
            <Label htmlFor="campo-bairro">Bairro</Label>
            <Input
              id="campo-bairro"
              placeholder="Vila Mariana"
              type="text"
              $error={!!errors.endereco?.bairro}
              {...register("endereco.bairro")}
            />
            {errors.endereco?.bairro && (
              <ErrorMessage>{errors.endereco?.bairro.message}</ErrorMessage>
            )}
          </Fieldset>
        </FormContainer>
        <Fieldset>
          <Label htmlFor="campo-localidade">Localidade</Label>
          <Input
            id="campo-localidade"
            placeholder="São Paulo, SP"
            type="text"
            $error={!!errors.endereco?.localidade}
            {...register("endereco.localidade")}
          />
          {errors.endereco?.localidade && (
            <ErrorMessage>{errors.endereco?.localidade.message}</ErrorMessage>
          )}
        </Fieldset>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
};

export default CadastroEspecialistaEndereco;