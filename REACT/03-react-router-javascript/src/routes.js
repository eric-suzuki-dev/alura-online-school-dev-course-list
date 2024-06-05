import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/inicio";
import ScrollToTop from "components/ScrollToTop";
import SobreMim from "./pages/SobreMim";
import NaoEncontrada from "pages/NaoEncontrada";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;