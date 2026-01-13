// editado OK

import { Fornecedor } from '../../../database/tables'
import { redirect } from 'next/navigation';
async function insereFornecedor(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        endereco: formData.get('endereco'),
 
};
  await Fornecedor.create(dados);  
 redirect('/Fornecedor');
}

function TelaNovo(){
    return (
        <form action={insereFornecedor}>
   
            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="email">email</label><br/>
            <input type="text" name="email"/> <br/>

            <label htmlFor="telefone">telefone</label><br/>
            <input type="text" name="telefone"/> <br/>

            <label htmlFor="endereco">endereco</label><br/>
            <input type="text" name="endereco"/> <br/>


          <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovo;
