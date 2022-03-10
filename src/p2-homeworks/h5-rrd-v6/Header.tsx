import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from './Pages'


function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR}>pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} >Junior |</NavLink>
            <NavLink to={PATH.JUN_PLUS} >Junior+</NavLink>

        </div>
    )
}

export default Header
