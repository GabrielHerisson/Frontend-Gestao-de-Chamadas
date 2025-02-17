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
                <Link onClick={handleContact}>Adicionar Membro</Link>
                <Link>Remover Membro</Link>
                <Link>Mudar Professor</Link>
                <Link>Criar Turma</Link>
            </ButtonGroup>
        </div>
  
    );
}

export default Menu;
