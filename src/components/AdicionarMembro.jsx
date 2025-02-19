import React from "react";
import { Link } from "react-router-dom";

const AdicionarMembro = () => {
    return(
        
        <div>
            <link rel="stylesheet" href="AdicionarMembro.css"></link>
            <h1>Adicionar Membro</h1>
            <div class="divBox">
                <label for="box">Nome </label>
                <input type="box" />
            </div>
            <div class="divBox">
                <label for="box">Sexo </label>
                <input type="box" />
            </div>
            <div class="divBox">
                <label for="box">Data de Nascimento </label>
                <input type="box" />
            </div>
            <div class="divBox">
                <label for="box">Telefone </label>
                <input type="box" />
            </div>
            <div class="divBox">
                <label for="box">Tipo </label>
                <input type="box" />
            </div>
            <div class="content">

            </div>
        </div>
    )
}

export default AdicionarMembro