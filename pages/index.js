import Head from 'next/head'
import useTranslation from "next-translate/useTranslation"

function HomePage() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>Duplex Val Thorens</title>
                <meta name="description" content="Apartment a vendre" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{t("common:headers.page_title_home")}</h1>
            
        </div>
    )
}

export default HomePage
