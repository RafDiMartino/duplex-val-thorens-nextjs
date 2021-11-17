import classes from "./footer.module.scss"
import BusinessIcon from '@material-ui/icons/Business';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation"

function Footer() {
    
    const { t } = useTranslation()

    return (
        <footer className={classes["footer-wrapper"]}>
            <div className={classes["footer-contacts"]}>
                <ul>
                    <li><BusinessIcon fontSize="small" mr={5} /><p>Résidence les Lauzières, 155 Rue du soleil, 73440 VAL THORENS</p></li>
                    <li><LocalPhoneIcon fontSize="small" /><p>+33 0673346890</p></li>
                    <li><EmailIcon fontSize="small" /><p>pascal.paire@orange.fr</p></li>
                    <li><ContactSupportIcon fontSize="small" /><Link href="/contacts"><p>{t("common:headers.page_title_contacts")}</p></Link></li>
                </ul>
            </div>
            <hr className={classes["hr-footer"]} />
            <div className={classes["footer-container"]}>
                <p className={classes.madeBy}>&copy; 2021 Duplex Val Thorens | by Raffaele Di Martino</p>
            </div>
        </footer>
    )
}

export default Footer