import "../css/listagem.css"


import { Cliente } from "../../database/tables";
import { redirect } from  "next/navigation";

async function deletarCliente(formData){
    'use server';
    const id = formData.get('id');
    const cliente = await Cliente.findByPk(id);
    await cliente.destroy();
    redirect('/Cliente');
}

async function Clientes(){
    const cliente = await Cliente.findAll();
    return (
        <div>
         <h1>Lista de Clientes</h1>
         <a href="/Cliente/novo">Adcionar Clientes</a>
         <table border="1">
            <thead>
                <tr>
                 <th>ID</th>
                 <th>Nome</th>
                 <th>Email</th>
                 <th>Senha</th>
                 <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {
                    cliente.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.email}</td>
                                <td>{fil.senha}</td>
                                <td>{fil.telefone}</td>

                            <td>  
                                 <form action = {'/Cliente/edita'}>
                                 <input type="hidden" name = "id" defaultValue={fil.id} />
                                     <button>Editar</button>
                                     </form>
                                     
                                     <form action = {deletarCliente}>
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

export default Clientes; 
