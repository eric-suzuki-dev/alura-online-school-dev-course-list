import { Logotipo } from "../../components";
import CadastroEspecialistaEndereco from "./CadastroEspecialistaEndereco";
import CadastroEspecialistaTecnico from "./CadastroEspecialistaTecnico";
import CadastroPessoal from "./CadastroPessoal";
export default function Cadastro() {
  return (
    <>
      <Logotipo />
      <CadastroEspecialistaEndereco />
    </>
  );
}