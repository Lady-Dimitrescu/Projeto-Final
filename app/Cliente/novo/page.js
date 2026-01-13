import { Cliente } from '../../../database/tables'
import { redirect } from 'next/navigation';
async function insereCliente(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        nome: formData.get('nome'),
        email: formData.get('email'),
        senha: formData.get('senha'),
        telefone: formData.get('telefone')
 
};
  await Cliente.create(dados);  
 redirect('/Cliente');
}

function TelaNovo(){
    return (
        <form action={insereCliente}>
   
            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="email">email</label><br/>
            <input type="text" name="email"/> <br/>

            <label htmlFor="senha">senha</label><br/>
            <input type="text" name="senha"/> <br/>

            <label htmlFor="telefone">telefone</label><br/>
            <input type="text" name="telefone"/> <br/>


          <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovo;


