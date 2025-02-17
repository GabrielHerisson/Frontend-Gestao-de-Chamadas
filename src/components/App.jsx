import Menu from "./Menu.jsx";
import {Col, Row, Table} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Turmas from "./Turmas.jsx";
import "./App.css"

import { Outlet } from "react-router-dom";
import CriarTurma from "./CriarTurma.jsx";
import AdicionarMembro from "./AdicionarMembro.jsx";
import RemoverMembro from "./RemoverMembro.jsx";
import MudarProfessor from "./MudarPofessor.jsx";

function App() {
    return (
        <>
             <BrowserRouter>
                <Row>
                    <Col>
                        <Menu/>
                    </Col>
                    <Col className={"conteudo-principal"}>
                        <Routes>
                            <Route exact path="/turmas" element={<Turmas/>}/>
                            <Route exact path="/membro/adicionar" element={<AdicionarMembro/>}/>
                            <Route exact path="/removerMembro" element={<RemoverMembro/>}/>
                            <Route exact path="/mudarProfessor" element={<MudarProfessor/>}/>
                            <Route exact path="/turmas/criar" element={<CriarTurma/>}/>


                        </Routes>
                    </Col>
                </Row>
            </BrowserRouter>
        </>
    )
}

export default App
