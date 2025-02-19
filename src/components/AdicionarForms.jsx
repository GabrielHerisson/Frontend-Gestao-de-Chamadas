import React from "react";

const AdicionarForms = () => {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="number" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione Categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
        </form>
    )
}

export default AdicionarForms