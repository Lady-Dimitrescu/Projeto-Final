import { DataTypes } from "sequelize";
import mysql from "./mysql.js"; 

// Cliente
const Cliente = mysql.define("cliente", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  senha: DataTypes.STRING,
  telefone: DataTypes.STRING
}, { freezeTableName: true, timestamps: true });

// Categoria
const Categoria = mysql.define("categoria", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  quantidade: DataTypes.INTEGER,
  descricao: DataTypes.STRING
}, { freezeTableName: true, timestamps: true });

// Produto
const Produto = mysql.define("produto", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  preco: DataTypes.DECIMAL(10,2),
  estoque: DataTypes.INTEGER,
  descricao: DataTypes.STRING
}, { freezeTableName: true, timestamps: true });

// Pedido
const Pedido = mysql.define("pedido", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  data: DataTypes.DATE,
  status: DataTypes.STRING
}, { freezeTableName: true, timestamps: true });

// Pedido_Produto (tabela intermediária)
const Pedido_Produto = mysql.define("pedido_produto", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  quantidade: DataTypes.INTEGER
}, { freezeTableName: true, timestamps: true });

// Compra
const Compra = mysql.define("compra", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  data: DataTypes.DATE,
  valor_total: DataTypes.DECIMAL(10,2)
}, { freezeTableName: true, timestamps: true });

// Fornecedor
const Fornecedor = mysql.define("fornecedor", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  endereco: DataTypes.STRING,
}, { freezeTableName: true, timestamps: true });

// Funcionario
const Funcionario = mysql.define("funcionario", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  nome: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  cargo: DataTypes.STRING,        
  data_contratacao: DataTypes.DATE,
}, { 
  freezeTableName: true, 
  timestamps: true 
});




export {
  Cliente,
  Categoria,
  Produto,
  Pedido,
  Pedido_Produto,
  Compra,
  Fornecedor,
  Funcionario
};
