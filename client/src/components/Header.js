import React from 'react';
import  { NavLink} from 'react-router-dom';
import './../styles/base/components/header.css';


const Header = () => (
    <header className="header">
        <div className="container">
            <h1>My Form Builder App</h1>
            <li> <NavLink className="link" to="/FormsListPage"
                activeStyle={{ background: 'white', color: 'black', border: 'solid 2px black' }}>
                Forms List Page
            </NavLink> </li>
            <h1><p></p></h1>
            <li> <NavLink className="link" to="/FormBuilderPage"
                activeStyle={{ background: 'white', color: 'black', border: 'solid 2px black' }}>
                Form Builder Page
            </NavLink> </li>
        </div>

    </header>
);


export default Header;