/* function Menu(){
    return (
        <nav>
            <div>
                <h1>Pink Money</h1>
            </div>
            <div>
        <a href="/"> Home </a>&nbsp;
        <a href="/Produto"> Produto </a>&nbsp;
        <a href="/categoria"> Categoria </a>&nbsp;
        <a href="/Cliente"> Cliente </a>&nbsp;
        <a href="/Pedido"> Pedido </a>&nbsp;
        <a href="/Fornecedor"> Fornecedor </a>&nbsp;
        <a href="/Funcionario"> Funcionario </a>&nbsp;

           </div>
        </nav>
    );
}

export default Menu; */

// Menu.js
import React from 'react';
import '../app/CSS/menu.css';

// Ícones
import pinkMoneyIcon from '../app/icons/pink_money_icon.png';
import buscaIcon from '../app/icons/busca_icon.png';
import instagramIcon from '../app/icons/instagram_icon.png';
import twitterIcon from '../app/icons/twitter_icon.png';
import pinIcon from '../app/icons/pin_icon.png';
import FMCFIcon from '../app/icons/FMCF_icon.png';

function Menu() {
    return (
        <>
            {/* BARRA SUPERIOR */}
            <div className="top-bar">
                <div className="logo-container">
                    <img src={pinkMoneyIcon} alt="Pink Money Icon" className="logo-icon" />
                    <h1 className="logo-text">Pink Money</h1>
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Buscar produtos..." className="search-input" />
                    <button className="search-button">
                        <img src={buscaIcon} alt="Buscar" className="search-icon" />
                    </button>
                </div>

                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank">
                        <img src={instagramIcon} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://twitter.com" target="_blank">
                        <img src={twitterIcon} alt="Twitter" className="social-icon" />
                    </a>
                    <a href="https://pinterest.com" target="_blank">
                        <img src={pinIcon} alt="Pinterest" className="social-icon" />
                    </a>
                    <a href="/fmcf" target="_blank">
                        <img src={FMCFIcon} alt="FMCF" className="social-icon" />
                    </a>
                </div>
            </div>

            <nav className="main-nav">
                <div className="nav-container">
                    <a href="/" className="nav-link">Home</a>
                    <button className="nav-dropbtn">Séries e Filmes ▼</button>
                    <button className="nav-dropbtn">Divas Pop ▼</button>
                    <button className="nav-dropbtn">Kpop ▼</button>
                    <button className="nav-dropbtn">Brasil Refs. ▼</button>
                    <a href="/recomendacoes" className="nav-link">Recomendações</a>

                    <div className="admin-links">
                        <a href="/Produto" className="admin-link">Produto</a>
                        <a href="/categoria" className="admin-link">Categoria</a>
                        <a href="/Cliente" className="admin-link">Cliente</a>
                        <a href="/Pedido" className="admin-link">Pedido</a>
                        <a href="/Fornecedor" className="admin-link">Fornecedor</a>
                        <a href="/Funcionario" className="admin-link">Funcionário</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Menu;
