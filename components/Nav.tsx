import React from 'react'
import Link from "next/link"
import styles from "../styles/components/Nav.module.css"

const Nav:React.FC = () => {
    return (
        <div className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__list_item}>
                    <Link href="/">
                        <a>Invoicing</a>
                    </Link>
                </li>
                <li className={styles.nav__list_item}>
                    <Link href="/calculate">
                        <a>Savings Calculator</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
