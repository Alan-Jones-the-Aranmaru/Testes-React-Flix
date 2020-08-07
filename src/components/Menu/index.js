import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import "./Menu.css";
//import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

/*Aqui eram usados o *href no lugar do *to, e no  Button, o as={Link} era as="a" (((e bugou o teclado) saiu do abnt e ficou NA do nada, ai tive q fechar e abrir de novo o VSCode))
function Menu() {
    return (
        <nav className="Menu">
            <Link href="/">
                <img className="Logo" src={Logo} alt="Flix Me Up logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" href="/cadastro/Video">
                Novo Vídeo
            </Button>
        </nav>
    );
}*/



function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Flix Me Up logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;