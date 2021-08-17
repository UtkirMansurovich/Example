import React, { useState } from 'react';
import './style.css';
import data from './data'
import Menu from './companents/Menu'

const App = () => {
    const [menuItems, setMenuItems] = useState(data)
    return (
        <div className="section-center">
            <menu>
                <section className="menu section">
                    <div className="title">
                        <h2>Our menu</h2>
                        <div className="underline"></div>
                    </div>
                    <Menu menuItems={menuItems}/>
                </section>
            </menu>
        </div>
        
    )
}

export default App
