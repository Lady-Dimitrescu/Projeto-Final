import { Categoria } from "../../../database/tables";
import { redirect } from "next/navigation";

async function editarCategoria(formData) {
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const quantidade = formData.get('quantidade');
    const descricao = formData.get('descricao');
    
    const categoria = await Categoria.findByPk (id);
    categoria.nome = nome;
    categoria.quantidade = quantidade;
    categoria.descricao = descricao;

    await categoria.save();

    redirect('/categoria');
}

 
async function TelaEditarCategoria({searchParams}) {
    const id = searchParams.id;
    const categoria = await Categoria.findByPk(id);
    return (
        <>
        <h1>Editando a Categoria</h1>

        <form action={editarCategoria}>
            
        <input type="hidden" name="id" defaultValue={categoria.id} /> 

            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome" defaultValue={categoria.nome}/> <br/>

            <label htmlFor="quantidade">quantidade</label><br/>
            <input type="text" name="quantidade"  defaultValue={categoria.quantidade}/> <br/>

            <label htmlFor="descricao">descrição</label><br/>
            <input type="text" name="descricao"  defaultValue={categoria.descricao}/> <br/>

            <button>Salvar</button>

        </form>

        </>
    )
}

export default TelaEditarCategoria;