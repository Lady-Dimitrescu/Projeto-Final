//Editado ok

import "../CSS/listagem.css"

import { Fornecedor } from "../../database/tables";
import { redirect } from  "next/navigation";

async function deletarFornecedor(formData){
    'use server';
    const id = formData.get('id');
    const fornecedor = await Fornecedor.findByPk(id);
    await fornecedor.destroy();
    redirect('/Fornecedor');
}

async function Fornecedores(){
    const fornecedor = await Fornecedor.findAll();
    return (
        <div>
         <h1>Lista de Fornecedores</h1>
         <a href="/Fornecedor/novo">Adcionar Fornecedores</a>
         <table border="1">
            <thead>
                <tr>
                 <th>ID</th>
                 <th>Nome</th>
                 <th>Email</th>
                 <th>Telefone</th>
                 <th>Endereco</th>
                </tr>
            </thead>
            <tbody>
                {
                   fornecedor.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.email}</td>
                                <td>{fil.telefone}</td>
                                <td>{fil.endereco}</td>
                            

                            <td>  
                                 <form action = {'/Fornecedor/edita'}>
                                 <input type="hidden" name = "id" defaultValue={fil.id} />
                                     <button>Editar</button>
                                     </form>
                                     
                                     <form action = {deletarFornecedor}>
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
        </div>
    );
}

export default Fornecedores; 
