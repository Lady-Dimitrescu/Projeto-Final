import { Produto } from '../../../database/tables'
import { redirect } from 'next/navigation';
async function insereProduto(formData){
    'use server';
    const dados = {
        id: formData.get('Id'),
        nome: formData.get('nome'),
        preco: formData.get('preco'),
        estoque: formData.get('estoque'),
        descricao: formData.get('descricao'),
    
};
  await Produto.create(dados);  
 redirect('/produtos');
}

function TelaNovo(){
    return (
        <form action={insereProduto}>
            <label htmlFor="id">id</label><br/>
            <input type="int AI PK" name="id"/> <br/>

            <label htmlFor="nome">nome</label><br/>
            <input type="text" name="nome"/> <br/>

            <label htmlFor="preco">preco</label><br/>
            <input type="text" name="preco"/> <br/>

            <label htmlFor="estoque">estoque</label><br/>
            <input type="text" name="estoque"/> <br/>


            <label htmlFor="descricao">Descrição</label><br/>
            <input type="text" name="descricao"/> <br/>

            <button>Cadastrar</button>

        </form>
    );
}

export default TelaNovo;