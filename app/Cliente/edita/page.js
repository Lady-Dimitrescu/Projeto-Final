import { Cliente } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editarCliente(formData) {
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const senha = formData.get('senha');
    const telefone = formData.get('telefone');
    
    const cliente = await Cliente.findByPk (id);
    cliente.nome = nome;
    cliente.email = email;
    cliente.senha = senha;
    cliente.telefone = telefone;

    await cliente.save();

    redirect('/Cliente');
}

 
async function TelaEditarCliente({searchParams}) {
    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    return (
        <>
        <h1>Editando os Clientes</h1>

        <form action={editarCliente}>

<input type="hidden" name="id" defaultValue={cliente.id} /> 
   
   <label htmlFor="nome">nome</label><br/>
   <input type="text" name="nome" defaultValue={cliente.nome}/> <br/>

   <label htmlFor="email">email</label><br/>
   <input type="text" name="email" defaultValue={cliente.email}/> <br/>

   <label htmlFor="senha">senha</label><br/>
   <input type="text" name="senha" defaultValue={cliente.senha}/> <br/>

   <label htmlFor="telefone">telefone</label><br/>
   <input type="text" name="telefone" defaultValue={cliente.telefone}/> <br/>


 <button>Salvar</button>


        </form>

        </>
    )
}

export default TelaEditarCliente;