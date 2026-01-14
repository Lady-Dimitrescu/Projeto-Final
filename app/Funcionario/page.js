// Editado OK

import "../CSS/listagem.css"
import { Funcionario } from "../../database/tables";
import { redirect } from  "next/navigation";

async function deletarFuncionario(formData){
    'use server';
    const id = formData.get('id');
    const funcionario = await Funcionario.findByPk(id);
    await funcionario.destroy();
    redirect('/Funcionario');
}

async function Funcionarios(){
    const funcionarios = await Funcionario.findAll();
    return (
        <div>
         <h1>Lista de Funcionarios</h1>
         <a href="/Funcionario/novo">Adcionar Funcionarios</a>
         <table border="1">
            <thead>          
                <tr>
                 <th>ID</th>
                 <th>Nome</th>
                 <th>Email</th>
                 <th>Telefone</th>
                 <th>Cargo</th>
                <th>Data Contrataçao</th>

                </tr>
            </thead>
            <tbody>
                {
                    funcionarios.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.email}</td>
                                <td>{fil.telefone}</td>
                                  <td>{fil.cargo}</td>
                                 <td>{fil.data_contratacao}</td>

                            <td>  
                                 <form action = {'/Funcionario/edita'}>
                                 <input type="hidden" name = "id" defaultValue={fil.id} />
                                     <button>Editar</button>
                                     </form>
                                     
                                     <form action = {deletarFuncionario}>
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

export default Funcionarios; 
