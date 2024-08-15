import { Route, Routes } from "react-router-dom";
import { LoginUsuario } from "../pages/LoginUsuario/LoginUsuario";
import { CadastroUsuario } from "../pages/CadastroUsuario/CadastroUsuario";
import { PrivateRoute } from "../template/private-route";
import { HomePage } from "../pages/Dashboard/home/dashboard-app";

export function RoutesApp() {
    return (
        <Routes>
            {/* MINHAS ROTAS PUBLICAS */}
            <Route path="/" element={<LoginUsuario/>} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            {/* MINHAS ROTAS PRIVADAS */}
            <Route path="/dashboard" element={<PrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
            </Route>
        </Routes>
    )
} 