import React, { useState } from 'react'
import Link from "next/link"
import classes from "./navbar.module.scss"
import "flag-icon-css/css/flag-icons.min.css"
import {useRouter} from "next/router"
import useTranslation from "next-translate/useTranslation"

function Navbar() {
    const { t } = useTranslation()

    const router = useRouter()
    const { locale } = router

    const englishToFrench = () => {
        locale === "en" ? router.push(router.asPath, router.asPath, {locale: "fr"}) : ""
        setOpenMenu(!openMenu)
    }

    const frenchToEnglish = () => {
        locale === "fr" ? router.push(router.asPath, router.asPath, {locale: "en"}) : ""
        setOpenMenu(!openMenu)
    }

    const [openMenu, setOpenMenu] = useState(false)

    let toogleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={classes.nav}>
            <h1 className={classes.logo}><Link href="/">Appartement Val Thorens</Link></h1>
            <div className={classes.wrapper}>
                <div className={classes["menu-icon"]} onClick={toogleMenu}>
                    <i className={openMenu ? classes.open : classes.close}></i>
                    <i className={openMenu ? classes.open : classes.close}></i>
                    <i className={openMenu ? classes.open : classes.close}></i>
                </div>
            </div>
            <div className={classes.links}>
                <ul>
                    <li><Link href="/">{t("common:navbar.home")}</Link></li>
                    <li><Link href="/apartment">{t("common:navbar.apartment")}</Link></li>
                    <li><Link href="/rates">{t("common:navbar.rates")}</Link></li>
                    <li><Link href="/maps">{t("common:navbar.maps")}</Link></li>
                    <li><Link href="/contacts">{t("common:navbar.contacts")}</Link></li>
                </ul>
                <div className={classes["translation-wrapper"]}>
                    <button aria-label="french translation" className={classes.translation} onClick={() => englishToFrench()}><span className="flag-icon flag-icon-fr"></span></button>
                    <button aria-label="english translation" className={classes.translation} onClick={() => frenchToEnglish()}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
            <div className={openMenu ? classes["nav-links"] : classes["nav-links-closed"]}>
                <ul>
                    <li onClick={toogleMenu}><Link href="/">{t("common:navbar.home")}</Link></li>
                    <li onClick={toogleMenu}><Link href="/apartment">{t("common:navbar.apartment")}</Link></li>
                    <li onClick={toogleMenu}><Link href="/rates">{t("common:navbar.rates")}</Link></li>
                    <li onClick={toogleMenu}><Link href="/maps">{t("common:navbar.maps")}</Link></li>
                    <li onClick={toogleMenu}><Link href="/contacts">{t("common:navbar.contacts")}</Link></li>
                </ul>
                <div className={classes["translation-wrapper"]}>
                    <button aria-label="french translation" className={classes.translation}  onClick={() => englishToFrench()}><span className="flag-icon flag-icon-fr"></span></button>
                    <button aria-label="english translation" className={classes.translation}  onClick={() => frenchToEnglish()}><span className="flag-icon flag-icon-gb"></span></button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar
