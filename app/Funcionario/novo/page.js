// Editado OK

import { Funcionario } from '../../../database/tables'
import { redirect } from 'next/navigation';
async function insereFuncionario(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        cargo: formData.get('cargo'),
        data_contratacao: formData.get('data_contratacao'),
 
};
  await Funcionario.create(dados);  
 redirect('/Funcionario');
}

function TelaNovo(){
    return (
        <form action={insereFuncionario}>
   
            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="email">email</label><br/>
            <input type="text" name="email"/> <br/>

            <label htmlFor="telefone">telefone</label><br/>
            <input type="text" name="telefone"/> <br/>
            
            <label htmlFor="cargo">cargo</label><br/>
            <input type="text" name="cargo"/> <br/>

            <label htmlFor="data_contratacao">data contratação</label><br/>
            <input type="text" name="data_contratacao"/> <br/>




          <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovo;