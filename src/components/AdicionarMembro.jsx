import React from "react";
import { Link } from "react-router-dom";


function AdicionarMembro () {
    return(
        <div className="styles.adicionarMembro_container">
           <link rel="stylesheet" href="AdicionarMembro.css"></link>
            <h1>Adicionar Membro</h1>
            <form>
            <div>
                <p> Nome 
                    <div>
                    <input type="text" placeholder="Insira o nome do membro" />
                    </div>
                </p>
            </div>
            <div>
                <p>Sexo 
                    <div>
                      <input type="radio" id="masculino" name="sexoMembro" value="Masculino"/>
                        <label for="masculino">Masculino </label>
                        <input type="radio" id="feminino" name="sexoMembro" value="Feminino"/>
                        <label for="feminino">Feminino </label>
                    </div>
                </p>
            </div>
            <div>
                <p>Data de Nascimento 
                    <div>
                    <input type="date"/>
                    </div>
                </p>
            </div>
            <div>
                <p>Telefone 
                    <div>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                    </div>
                </p>
            </div>
            <div>
                <p>Tipo 
                    <div>
                        <input type="radio" id="aluno" name="tipo" value="Aluno"/>
                        <label for="aluno">Aluno </label>
                        <input type="radio" id="professor" name="tipo" value="Professor"/>
                        <label for="professor">Professor </label>
                    </div>
                </p>
            </div>
            <div>
                <p>Adicionar novo membro? 
                    <input type="submit" value="Confirmar" />
                    <input type="submit" value="Cancelar" />
                </p>
            </div>
        </form>
        </div>
    )
}

export default AdicionarMembro