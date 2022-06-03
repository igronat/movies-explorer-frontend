import React from 'react';
import logo from '../images/logo.svg';
import Navigation from './Navigation';
import Account from "./Account"

function Header({
 tema,
 link,
    link2,
    menu,
    menu2,
    name,
    name2,
    ability
}) {

    return (
        <header className={tema}>
            <img className="logo" alt="логотип" src={logo}/>
            <div className="header__nav">
                <Navigation
                link={link}
                menu={menu}
                menu2={menu2}
                link2={link2}
                name={name}
                name2={name2}
                />
            </div>
            <Account 
            ability={ability}
            />
        </header>
    );
};

export default Header;