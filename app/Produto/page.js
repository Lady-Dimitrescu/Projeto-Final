import "../CSS/listagem.css"

import { Produto } from "../../database/tables";
import { redirect } from  "next/navigation";

async function deletarProduto(formData){
    'use server';
    const id = formData.get('id');
    const produto = await Produto.findByPk(id);

    redirect('/Produto');
}


async function Produtos(){
    const produto = await Produto.findAll();
    return (
        <>
         <h1>Lista de Produtos</h1>
         <a href="/Produto/novo">Criar Produtos</a>
         <table border="1">
            <thead>
                <tr>
                 <th>ID</th>
                 <th>NOME</th>
                 <th>PRECO</th>
                 <th>ESTOQUE</th>
                 <th>DESCRICAO</th>
                </tr>
            </thead>
            <tbody>
                {
                    produto.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.preco}</td>
                                <td>{fil.estoque}</td>
                                <td>{fil.descricao}</td>   
                            
                            <td>  
                                 <form action = {'/Produto/edita'}>
                                 <input type="hidden" name = "id" defaultValue={fil.id} />
                                     <button>Editar</button>
                                     </form>
                                     
                                     <form action = {deletarProduto}>
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

export default Produtos;

