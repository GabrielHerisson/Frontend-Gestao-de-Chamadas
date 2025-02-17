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
                            <Route exact path="/" element={<Turmas/>}/>
                            <Route exact path="/adicionar-membro" element={<AdicionarMembro/>}/>
                            <Route exact path="/remover-membro" element={<RemoverMembro/>}/>
                            <Route exact path="/mudar-professor" element={<MudarProfessor/>}/>
                            <Route exact path="/criar-turma" element={<CriarTurma/>}/>
                        </Routes>
                    </Col>
                </Row>
            </BrowserRouter>
        </>
    )
}

export default App
