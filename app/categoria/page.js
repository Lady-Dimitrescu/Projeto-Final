import "../CSS/listagem.css"

import { Categoria } from "../../database/tables";
import { redirect } from "next/navigation";

async function deletarCategoria(formData){
    'use server';
    const id = formData.get('id');
    const categoria = await Categoria.findByPk(id);
    await categoria.destroy();
    redirect('/categoria');
}
async function Categorias(){
    const categoria = await Categoria.findAll();
    return (
        <>
         <h1>Lista de Categorias</h1>
         <a href="/categoria/novo">Criar Categorias</a>
         <table border="1">
            <thead>
                <tr>
                 <th>ID</th>
                 <th>NOME</th>
                 <th>QUANTIDADE</th>
                 <th>DESCRICAO</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoria.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.quantidade}</td>
                                <td>{fil.descricao}</td>

                                <td>
                                    <form action = {'/categoria/edita'}>
                                    <input type="hidden" name = "id" defaultValue={fil.id} />
                                        <button>Editar</button>
                                        </form>
                                        

                                        <form action = {deletarCategoria}>
                                        <input type = "hidden" name = "id" defaultValue={fil.id}/>
                                        <button>Excluir</button>
                                        </form>
                                        </td>
                            </tr>
                        );
                    })
                }
            </tbody>
         </table>
        </>
    );
}

export default Categorias;

