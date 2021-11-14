import React, { useState } from 'react'
import Link from "next/link"
import classes from "./navbar.module.scss"
import "flag-icon-css/css/flag-icons.min.css"
// import { useTranslation} from 'react-i18next'

function Navbar() {

    // const { t, i18n } = useTranslation()

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng)
    //     setOpenMenu(!openMenu)
    // }

    const [openMenu, setOpenMenu] = useState(false)

    let toogleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={classes.nav}>
            <h1 className={classes.logo}><Link href="/">Duplex Val Thorens</Link></h1>
            <div className={classes.wrapper}>
                <div className={classes["menu-icon"]} onClick={toogleMenu}>
                    <i className={openMenu ? classes.open : classes.close}></i>
                    <i className={openMenu ? classes.open : classes.close}></i>
                    <i className={openMenu ? classes.open : classes.close}></i>
                </div>
            </div>
            <div className={classes.links}>
                <ul>
                    <li><Link href="/">test</Link></li>
                    <li><Link href="/apartment">test</Link></li>
                    <li><Link href="/rates">test</Link></li>
                    <li><Link href="/maps">test</Link></li>
                    <li><Link href="/contacts">test</Link></li>
                </ul>
                <div className={classes["translation-wrapper"]}>
                    <button aria-label="french translation" className={classes.translation}><span className="flag-icon flag-icon-fr"></span></button>
                    <button aria-label="english translation" className={classes.translation}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
            <div className={openMenu ? classes["nav-links"] : classes["nav-links-closed"]}>
                <ul>
                    <li onClick={toogleMenu}><Link href="/">test</Link></li>
                    <li onClick={toogleMenu}><Link href="/apartment">test</Link></li>
                    <li onClick={toogleMenu}><Link href="/rates">test</Link></li>
                    <li onClick={toogleMenu}><Link href="/maps">test</Link></li>
                    <li onClick={toogleMenu}><Link href="/contacts">test</Link></li>
                </ul>
                <div className={classes["translation-wrapper"]}>
                    <button aria-label="french translation" className={classes.translation}  onClick={() => changeLanguage("fr")}><span className="flag-icon flag-icon-fr"></span></button>
                    <button aria-label="english translation" className={classes.translation} onClick={() => changeLanguage("en")}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar