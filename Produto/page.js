import { Produto } from "../../database/tables";

async function Produtos(){
    const produto = await Produto.findAll();
    return (
        <>
         <h1>Lista de Produtos</h1>
         <a href="/Produto/novo">Criar Produtos</a>
         <table border="1">
            <thead>
                <tr>
                 <th>ID</th>
                 <th>NOME</th>
                 <th>PRECO</th>
                 <th>ESTOQUE</th>
                </tr>
            </thead>
            <tbody>
                {
                    produto.map(function(fil){
                        return (
                            <tr key ={fil.id}>
                                <td>{fil.id}</td>
                                <td>{fil.nome}</td>
                                <td>{fil.preco}</td>
                                <td>{fil.estoque}</td>
                            </tr>
                        );
                    })
                }
            </tbody>
         </table>
        </>
    );
}

export default Produtos;

