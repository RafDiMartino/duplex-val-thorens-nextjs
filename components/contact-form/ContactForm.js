import classes from "./contact-form.module.scss"
import SendIcon from '@material-ui/icons/Send';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"

function ContactForm() {

    const router = useRouter()
    const { locale } = router

    const { t } = useTranslation()

    return (
        <div className={classes["form-container"]}>
            <div className={classes["contacts-form-wrapper"]}>
                <div className={classes["contacts-form"]}><LocalPhoneIcon fontSize="medium" /><p>(+33) 6 40 10 88 62</p></div>
                <div className={classes["contacts-form"]}><EmailIcon fontSize="medium" /><p>pascal.paire@orange.fr</p></div>
            </div>
            <form action="https://formsubmit.co/e8d4183aebb9cecb5af6933b481a6d04" method="POST">
                <input className={classes.input} type="text" name="_honey" style={{display: "none"}}/>
                <input className={classes.input} type="hidden" name="_captcha" value="true" />
                <input className={classes.input} type="hidden" name="_next" value={locale == "en" ? "https://duplexvalthorens.com/en/contacts/success" : "https://duplexvalthorens.com/contacts/success"} />
                <input className={classes.input} type="hidden" name="_template" value="box" />
                <div className={classes["form-group"]}>
                    <input className={classes.input} type="text" name="Name" placeholder={t("common:contacts.full_name")} required/>
                    <input className={classes.input} type="email" name="Email" placeholder={t("common:contacts.email")} required/>
                </div>
                <div className={classes["form-group"]}>
                    <textarea  placeholder={t("common:contacts.message")} className={classes["form-control"]} name="Message" rows="20" required></textarea>
                </div>
                <button className={classes["send-form"]} type="submit" ><SendIcon />&#8194;{t("common:contacts.send")}</button>
            </form>
        </div>
    )
}

export default ContactForm