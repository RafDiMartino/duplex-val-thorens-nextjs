import Header from "../components/header/Header"
import ApartmentHeaderImg from "../assets/headers/apartment.webp"
import useTranslation from "next-translate/useTranslation"
import Head from 'next/head'
import FloorDescriptions from "../components/apartment-description/FloorDescriptions"
import { ULGroundFloor, ULFirstFloor } from "../components/apartment-description/ULs"
import classes from "../components/apartment-description/floor-descriptions.module.scss"
import Carousel from "../components/carousel/Carousel"
import { imgDataFF, imgDataGF } from "../data/ImgData"
import SimpleReactLightbox from "simple-react-lightbox"

function Apartment() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.apartment")}</title>
                <meta name="description" content={t("common:head.apartment")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={ApartmentHeaderImg}
                objPosition={"top"}
                h1={t("common:headers.page_title_apartment")}
                h2={t("common:headers.title_apartment")}
            />
            <SimpleReactLightbox>
            <FloorDescriptions
                className={classes["floor-container"]}
                title={t("common:apartment.ground_floor.groundFloor")} 
                ul={<ULGroundFloor />}
                carousel={<Carousel data={imgDataGF}/>}
            />
            </SimpleReactLightbox>
            <SimpleReactLightbox>
                <FloorDescriptions
                    className={classes["reverse"]}
                    title={t("common:apartment.first_floor.firstFloor")} 
                    ul={<ULFirstFloor />}
                    carousel={<Carousel data={imgDataFF}/>}
                />
            </SimpleReactLightbox>
            <h1>test</h1>
        </div>
    )
}

export default Apartment
