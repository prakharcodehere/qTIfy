import React from 'react';
import styles from "./navbar.module.css"

import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Search from '../search/Search';

const Navbar = () => {
  return (
   <nav className={styles.navbar}>

   <Logo/>
   <Search/>
    <Button children="Give feedback"/>
   </nav>
  )
}

export default Navbar;
