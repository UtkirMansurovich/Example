import React from 'react'

const Menu = ({menuItems}) => {
    return (
        <div className="section-center"> 
            {menuItems.map(el =>{
                return(
                    <article className="menu-item">
                        <img className="photo" src={el.img}/>
                        <div className="item-info">
                            <header>
                                <h4>{el.title}</h4>
                                <h4 className="price">${el.price}</h4>
                            </header>
                            <p className="item-text">{el.desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Menu
