// Editado OK
import { Fornecedor } from "../../../database/tables"
import { redirect } from "next/navigation";

async function editarFornecedor(formData) {
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const endereco = formData.get('endereco');
    
    const fornecedor = await Fornecedor.findByPk (id);
    fornecedor.nome = nome;
    fornecedor.email = email;
    fornecedor.telefone = telefone;
    fornecedor.endereco = endereco;

    await  fornecedor.save();

    redirect('/Fornecedor');
}

 
async function TelaEditarFornecedor({searchParams}) {
    const id = searchParams.id;
    const fornecedor = await Fornecedor.findByPk(id);
    return (
        <>
        <h1>Editando os Fornecedores</h1>

        <form action={editarFornecedor}>

<input type="hidden" name="id" defaultValue={fornecedor.id} /> 
   
   <label htmlFor="nome">nome</label><br/>
   <input type="text" name="nome" defaultValue={fornecedor.nome}/> <br/>

   <label htmlFor="email">email</label><br/>
   <input type="text" name="email" defaultValue={fornecedor.email}/> <br/>

   <label htmlFor="telefone">telefone</label><br/>
   <input type="text" name="telefone" defaultValue={fornecedor.telefone}/> <br/>

   <label htmlFor="endereco">endereco</label><br/>
   <input type="text" name="endereco" defaultValue={fornecedor.endereco}/> <br/>


 <button>Salvar</button>


        </form>

        </>
    )
}

export default TelaEditarFornecedor;