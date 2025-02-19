import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Menu.css"
import { Link } from 'react-router-dom';

function Menu() {

    const handleContact = () => {
        return navigate("/AdicionarMembro");
    }
    return (
        <div className="menu">
            <h3>Opções</h3>
            <ButtonGroup>
                <Link to={`/turmas`} > 
                    <Button>Turmas</Button>
                </Link>
                <Link to={`/membro/adicionar`}>
                    <Button>Adicionar Membro</Button>
                </Link>
                <Link to={`/removerMembro`}>
                    <Button>Remover Membro</Button>
                </Link>
                <Link to={`/mudarProfessor`}>
                    <Button>Mudar Professor</Button>
                </Link>
                <Link to={`/turmas/criar`}>
                    <Button>Criar Turma</Button>
                </Link>
            </ButtonGroup>
        </div>
  
    );
}

export default Menu;
