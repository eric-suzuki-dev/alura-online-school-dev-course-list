import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { esquemaCadastroEnderecoEspecialista } from "../esquemas/esquemaEspecialista";
import {
  EnderecoProps,
  FormCadastroEnderecoEspecialista,
} from "../types/especialistaTipos";
import { supabase } from "../libs/supabase";
import { useCallback, useEffect } from "react";

const useCep = () => {
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

  const aoSubmeter = async (dados: FormCadastroEnderecoEspecialista) => {
    await supabase.storage
      .from("react-forms")
      .upload(dados.endereco.avatar.name, dados.endereco.avatar);
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

  return {
    handleSubmit,
    register,
    errors,
    aoSubmeter,
  };
};

export default useCep;