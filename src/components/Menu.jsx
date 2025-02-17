import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Menu.css"
import { useNavigate } from "react-router-dom";

function Menu() {
    const navigate = useNavigate();

    return (
        <div className="menu">
            <h3>Opções</h3>
            <ButtonGroup>
                <Button onClick={() => navigate('/')}> Turmas</Button>
                <Button onClick={() => navigate('/adicionar-membro')}>Adicionar Membro</Button>
                <Button onClick={() => navigate('/remover-membro')}>Remover Membro</Button>
                <Button onClick={() => navigate('/mudar-professor')}>Mudar Professor</Button>
                <Button onClick={() => navigate('/criar-turma')}>Criar Turma</Button>
            </ButtonGroup>
        </div>
    );
}

export default Menu;
