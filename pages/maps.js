import Header from "../components/header/Header"
import MapsHeaderImg from "../assets/headers/maps.webp"
import useTranslation from "next-translate/useTranslation"

function Maps() {
    
    const { t } = useTranslation()

    return (
        <div>
            <Header
                img={MapsHeaderImg}
                h1={t("common:headers.page_title_maps")}
                h2={t("common:headers.title_maps")}
            />
        </div>
    )
}

export default Maps