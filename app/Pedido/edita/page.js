import { Pedido } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editarPedido(formData) {
'use server';

    const id = formData.get('id');
    const data = formData.get('data');
    const status = formData.get('status');
    
    const pedido = await Pedido.findByPk (id);
    pedido.data = data;
    pedido.status = status;
    
    await pedido.save();

    redirect('/Pedido');
}

 
async function TelaEditarPedido({searchParams}) {
    const id = searchParams.id;
    const pedido = await Pedido.findByPk(id);
    return (
        <>
        <h1>Editando os Pedidos</h1>

        <form action={editarPedido}>

<input type="hidden" name="id" defaultValue={pedido.id} /> 
   
   <label htmlFor="data">data</label><br/>
   <input type="text" name="data" defaultValue={pedido.data}/> <br/>

   <label htmlFor="status">status</label><br/>
   <input type="text" name="status" defaultValue={pedido.status}/> <br/>



 <button>Salvar</button>


        </form>

        </>
    )
}

export default TelaEditarPedido;