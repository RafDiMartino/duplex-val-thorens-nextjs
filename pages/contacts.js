import Header from "../components/header/Header"
import ContactstHeaderImg from "../assets/headers/contacts.webp"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import ContactForm from "../components/contact-form/ContactForm"
import classes from "../components/contact-form/contact-form.module.scss"

function Contacts() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.contacts")}</title>
                <meta name="description" content={t("common:head.contacts")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={ContactstHeaderImg}
                h1={t("common:headers.page_title_contacts")}
                h2={t("common:headers.title_contacts")}
            />
            <div className={classes.wrapper}>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contacts