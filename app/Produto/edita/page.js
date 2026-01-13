import { Produto } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editarProduto(formData) {
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const preco = formData.get('preco');
    const estoque = formData.get('estoque');
    const descricao = formData.get('descricao');
    
    const produto = await Produto.findByPk (id);
    produto.nome = nome;
    produto.preco = preco;
    produto.estoque = estoque;
    produto.descricao = descricao;

    await produto.save();

    redirect('/Produto');
}

 
async function TelaEditarProduto({searchParams}) {
    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    return (
        <>
        <h1>Editando os Produtos</h1>

        <form action={editarProduto}>

<input type="hidden" name="id" defaultValue={produto.id} /> 
   
   <label htmlFor="nome">nome</label><br/>
   <input type="text" name="nome" defaultValue={produto.nome}/> <br/>

   <label htmlFor="preco">preço</label><br/>
   <input type="text" name="preco" defaultValue={produto.preco}/> <br/>

   <label htmlFor="estoque">estoque</label><br/>
   <input type="text" name="estoque" defaultValue={produto.estoque}/> <br/>

   <label htmlFor="descricao">descricao</label><br/>
   <input type="text" name="descriccao" defaultValue={produto.descricao}/> <br/>


 <button>Salvar</button>


        </form>

        </>
    )
}

export default TelaEditarProduto;