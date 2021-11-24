import Header from "../components/header/Header"
import ApartmentHeaderImg from "../assets/headers/apartment.webp"
import useTranslation from "next-translate/useTranslation"
import Head from 'next/head'

function Apartment() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.apartment")}</title>
                <meta name="description" content={t("common:head.description")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={ApartmentHeaderImg}
                objPosition={"top"}
                h1={t("common:headers.page_title_apartment")}
                h2={t("common:headers.title_apartment")}
            />
        </div>
    )
}

export default Apartment
