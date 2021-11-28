import Header from "../../components/header/Header"
import useTranslation from "next-translate/useTranslation"
import SuccessMessage from "../../components/success-message/SuccessMessage"
import classes from "../../components/success-message/success-message.module.scss"
import ContactstHeaderImg from "../../assets/headers/contacts.webp"
import Head from "next/head"

function Success() {
    
    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.contacts")}</title>
                <meta name="description" content={t("common:head.description")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={ContactstHeaderImg}
                h1={t("common:headers.page_title_contacts")}
                h2={t("common:headers.title_contacts")}
            />
            <div className={classes.contacts}>
                <SuccessMessage />
            </div>
        </div>
    )
}

export default Success
