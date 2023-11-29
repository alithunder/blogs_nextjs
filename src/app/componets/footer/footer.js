import React from 'react'
import { Container } from '../container/container'
import styles from './footer.module.css'
import { FaFacebookSquare ,FaTwitterSquare ,FaInstagramSquare  } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.footer}>
        <Container>
            <div className={styles.foot}>
            <p>All Rights Reserved - Aon2023</p>
            <div>
            <Link className={styles.link} href="/"><FaFacebookSquare className={styles.icon}/></Link>
            <Link className={styles.link} href="/"><FaTwitterSquare className={styles.icon}/></Link>
            <Link className={styles.link} href="/"><FaInstagramSquare className={styles.icon}/></Link>
            </div>

            </div>
        </Container>
    </div>
  )
}

export default Footer