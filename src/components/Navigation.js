import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({
    link,
    link2,
    menu,
    menu2,
    name,
    name2
}) {

    return (
    
        <nav className="navigation">
        <NavLink to={link} className={`navigation__link navigation__link_type_${name}`}>{menu}</NavLink>
        <NavLink to={link2} className={`navigation__link navigation__link_type_${name2}`}>{menu2}</NavLink>
        </nav>
         
         

    );
};

export default Navigation;

