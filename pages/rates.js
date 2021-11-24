import Header from "../components/header/Header"
import RatesHeaderImg from "../assets/headers/rates.webp"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

function Rates() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.rates")}</title>
                <meta name="description" content={t("common:head.description")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={RatesHeaderImg}
                h1={t("common:headers.page_title_rates")}
                h2={t("common:headers.title_rates")}
            />
        </div>
    )
}

export default Rates