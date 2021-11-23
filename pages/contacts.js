import Header from "../components/header/Header"
import ContactstHeaderImg from "../assets/headers/contacts.webp"
import useTranslation from "next-translate/useTranslation"


function Contacts() {

    const { t } = useTranslation()

    return (
        <div>
            <Header
                img={ContactstHeaderImg}
                h1={t("common:headers.page_title_contacts")}
                h2={t("common:headers.title_contacts")}
            />
        </div>
    )
}

export default Contacts