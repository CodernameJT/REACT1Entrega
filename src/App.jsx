// src/App.js
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/NavBar/CartWidget';
import './index.css'; 


const App = () => {
    return (
        <div>
            <NavBar>
                <CartWidget />
            </NavBar >
            <ItemListContainer />
            
        </div>
    );
};

export default App;

