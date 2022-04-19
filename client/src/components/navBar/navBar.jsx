import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import logo from './LasMoritasLogo.png'
import CartBtn from '../ShoppingCartButton/CartBtn'

export default function NavBar ({getTotalItems}) {
  return (
    <div className='container'>
      <Link to='/'>
        <img className='image' src={logo} alt='logo de las moritas' />
      </Link>
      <Link to='/register' className='button'>
        Registrar
      </Link>
      <Link to='/iniciar' className='button'>
        Iniciar Sesion
      </Link>
      <Link to='/aboutUs' className='button'>
        Sobre Nosotros
      </Link>
      <Link to='/carrito' className='button'>
        <CartBtn getTotalItems = {getTotalItems} />
      </Link>
    </div>
  )
}
