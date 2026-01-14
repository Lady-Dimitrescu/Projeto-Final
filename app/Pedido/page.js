import "../CSS/listagem.css"

import { Pedido } from "../../database/tables";
import { redirect } from  "next/navigation";

async function deletarPedido(formData){
    'use server';
    const id = formData.get('id');
    const pedido = await Pedido.findByPk(id);
    await pedido.destroy();
    redirect('/Pedido');
}

async function Pedidos(){
    const pedido = await Pedido.findAll();
    return (
        <>
            <h1>Lista de Pedidos</h1>
            <a href="/Pedido/novo">Criar Pedidos</a>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATA</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {pedido.map(function(fil){
                        return (
                            <tr key={fil.id}>
                                <td>{fil.id}</td>
                               
                                <td>
  {fil.data ? new Date(fil.data).toLocaleDateString("pt-BR")  : ""}
                               </td>
                                <td>{fil.status}</td>
        
                            <td>  
                                 <form action = {'/Pedido/edita'}>
                                 <input type="hidden" name = "id" defaultValue={fil.id} />
                                     <button>Editar</button>
                                     </form>
                                     
                                     <form action = {deletarPedido}>
                                     <input type = "hidden" name = "id" defaultValue={fil.id}/>
                                     <button>Excluir</button>
                                     </form>
                             </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Pedidos;
