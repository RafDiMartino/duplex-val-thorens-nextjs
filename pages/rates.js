import Header from "../components/header/Header"
import RatesHeaderImg from "../assets/headers/rates.webp"
import useTranslation from "next-translate/useTranslation"


function Rates() {

    const { t } = useTranslation()

    return (
        <div>
            <Header
                img={RatesHeaderImg}
                h1={t("common:headers.page_title_rates")}
                h2={t("common:headers.title_rates")}
            />
        </div>
    )
}

export default Rates