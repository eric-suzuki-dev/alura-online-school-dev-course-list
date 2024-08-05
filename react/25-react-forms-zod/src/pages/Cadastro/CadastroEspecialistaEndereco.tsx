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
import useCep from "../../hooks/useCep";

const CadastroEspecialistaEndereco = () => {
  const { register, handleSubmit, aoSubmeter, errors } = useCep();

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