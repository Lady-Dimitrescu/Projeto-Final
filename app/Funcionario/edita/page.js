// Editado OK

import { Funcionario } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editarFuncionario(formData) {
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const cargo = formData.get('cargo');
    const data_contratacao = formData.get('data_contratacao');
    
    
    const funcionario = await Funcionario.findByPk (id);
    funcionario.nome = nome;
    funcionario.email = email;
    funcionario.telefone = telefone;
    funcionario.cargo = cargo;
    funcionario.data_contratacao = data_contratacao;


    await funcionario.save();

    redirect('/Funcionario');
}

 
async function TelaEditarFuncionario({searchParams}) {
    const id = searchParams.id;
    const funcionario = await Funcionario.findByPk(id);
    return (
        <>
        <h1>Editando os Funcionarios</h1>

        <form action={editarFuncionario}>

<input type="hidden" name="id" defaultValue={funcionario.id} /> 
   
   <label htmlFor="nome">nome</label><br/>
   <input type="text" name="nome" defaultValue={funcionario.nome}/> <br/>

   <label htmlFor="email">email</label><br/>
   <input type="text" name="email" defaultValue={funcionario.email}/> <br/>

   <label htmlFor="telefone">telefone</label><br/>
   <input type="text" name="telefone" defaultValue={funcionario.telefone}/> <br/>

   <label htmlFor="cargo">cargo</label><br/>
   <input type="text" name="cargo" defaultValue={funcionario.cargo}/> <br/>

    <label htmlFor="data_contratacao">data contratação</label><br/>
   <input type="text" name="data_contratacao" defaultValue={funcionario.data_contratacao}/> <br/>



 <button>Salvar</button>


        </form>

        </>
    )
}

export default TelaEditarFuncionario;