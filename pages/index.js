import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next'


export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        }
    }
}

function HomePage() {

    const { t } = useTranslation("common")

    return (
        <div>
            <Head>   
                <title>Duplex Val Thorens</title>
                <meta name="description" content="Apartment a vendre" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{t("headers.page_title_home")}</h1>
            
        </div>
    )
}

export default HomePage
