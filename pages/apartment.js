import Header from "../components/header/Header"
import ApartmentHeaderImg from "../assets/headers/apartment.webp"
import useTranslation from "next-translate/useTranslation"

function Apartment() {

    const { t } = useTranslation()

    return (
        <div>
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
