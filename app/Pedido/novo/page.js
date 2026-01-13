import { Pedido } from '../../../database/tables'
import { redirect } from 'next/navigation';
async function inserePedido(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        data: formData.get('data'),
        status: formData.get('status'), 
};
  await Pedido.create(dados);  
 redirect('/Pedido');
}

function TelaNovo(){
    return (
        <form action={inserePedido}>
         
           <label htmlFor="data">data</label><br/>
            <input type="date" name="data"/> <br/>

            <label htmlFor="status">status</label><br/>
            <input type="text" name="status"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}




export default TelaNovo;