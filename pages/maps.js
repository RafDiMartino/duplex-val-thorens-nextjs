import Header from "../components/header/Header"
import MapsHeaderImg from "../assets/headers/maps.webp"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"

function Maps() {
    
    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.maps")}</title>
                <meta name="description" content={t("common:head.description")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={MapsHeaderImg}
                h1={t("common:headers.page_title_maps")}
                h2={t("common:headers.title_maps")}
            />
        </div>
    )
}

export default Maps