"use client" 
import Link from 'next/link';
import React from 'react'
import {Container} from '../container/container'
import styles from "./header.module.css";
const Header = () => { 
  return (
    <div className={styles.top}>
        <Container>
          <div className={styles.header}>
                      <h3>Aon 2023</h3>
          <div className={styles.navbtn}>
            <Link className={styles.link} href="/">Home</Link>     
            <Link className={styles.link}  href="/">About</Link>     
            <Link className={styles.link}  href="/">Help</Link>     
          </div>
          </div>
          </Container>
    </div>
  )
}

export default Header