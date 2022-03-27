import Head from 'next/head'
import useTranslation from "next-translate/useTranslation"
import Header from "../components/header/Header" 
import HomeHeaderImg from "../assets/headers/home.webp" 
import HomeDescription from '../components/home-description/HomeDescription'
import View from "../assets/home-description/view.webp"
import LivingRoom from "../assets/home-description/livingRoom.webp"
import Bedroom from "../assets/home-description/bedroom.webp"
import classes from "../components/home-description/home-description.module.scss"

function HomePage() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>Appartement Val Thorens</title>
                <meta name="google-site-verification" content="bkY2o5jkwrKhlB1U7RJ_uYSAKNL8o8fVd5FT5O5OeYY" />
                <meta name="description" content={t("common:head.home")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                objPosition={"left"}
                img={HomeHeaderImg}
                h1={t("common:headers.page_title_home")}
                h2={t("common:headers.title_home")}
                priority={"priority"}
            />
            <HomeDescription 
                className={classes["view-wrapper"]}
                text={t("common:home.first_paragraph")}
                img={View}
            />
            <HomeDescription 
                className={classes["view-reverse"]}
                text={t("common:home.second_paragraph")}
                img={LivingRoom}
            />
            <HomeDescription 
                className={classes["view-wrapper"]}
                text={t("common:home.third_paragraph")}
                img={Bedroom}
            />
        </div>
    )
}

export default HomePage
