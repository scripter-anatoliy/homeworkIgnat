import React, {ChangeEvent, useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import h from "./Header.module.css";


function Header() {

    const [open, setOpen] = useState(false)

    const openMenu = () =>{
        if(!open){
            setOpen(true)
        } else {
            setOpen(false)
        }
    }


    return (
        <div>
            <button onClick={openMenu}>Меню</button>
            {open &&
            < div className={h.menu}>
                < NavLink to={PATH.PRE_JUNIOR} className={h.nav}>Pre Junior</NavLink>
                <NavLink to={PATH.JUNIOR} className={h.nav}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS} className={h.nav}>Junior Plus</NavLink>
            </div>
            }
        </div>
    );
}

export default Header;
