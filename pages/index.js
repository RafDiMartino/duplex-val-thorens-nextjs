import Head from 'next/head'
import useTranslation from "next-translate/useTranslation"
import Header from "../components/header/Header" 
import HomeHeaderImg from "../assets/headers/home.webp" 


function HomePage() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>Duplex Val Thorens</title>
                <meta name="description" content={t("common:head.description")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                objPosition={"left"}
                img={HomeHeaderImg}
                h1={t("common:headers.page_title_home")}
                h2={t("common:headers.title_home")}
            />
            
        </div>
    )
}

export default HomePage

//Flat to rent in Val Thorens for 8/10 people with direct access to the slopes of the 3 Vallées ski resort. 