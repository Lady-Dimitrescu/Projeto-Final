import { Categoria } from '../../../database/tables'
import { redirect } from 'next/navigation';

async function insereCategoria(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        nome: formData.get('nome'),
        quantidade: formData.get('quantidade'),
        descricao: formData.get('descricao')
    };
   
    await Categoria.create(dados);  
    redirect('/categoria');

}

function TelaNovoCategoria(){
    return (
        <form action={insereCategoria}>
            
            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="quantidade">quantidade</label><br/>
            <input type="text" name="quantidade"/> <br/>

            <label htmlFor="descricao">descrição</label><br/>
            <input type="text" name="descricao"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovoCategoria;