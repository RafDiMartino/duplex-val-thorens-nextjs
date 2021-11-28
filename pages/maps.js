import Header from "../components/header/Header"
import MapsHeaderImg from "../assets/headers/maps.webp"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import MapsComponent from "../components/maps/MapsComponent"

function Maps() {
    
    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.maps")}</title>
                <meta name="description" content={t("common:head.maps")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={MapsHeaderImg}
                h1={t("common:headers.page_title_maps")}
                h2={t("common:headers.title_maps")}
            />
            <MapsComponent />
        </div>
    )
}

export default Maps