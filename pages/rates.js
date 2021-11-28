import Header from "../components/header/Header"
import RatesHeaderImg from "../assets/headers/rates.webp"
import useTranslation from "next-translate/useTranslation"
import Head from "next/head"
import RatesTable from "../components/rate-table/RatesTable"
import classes from "../components/rate-table/rates-table.module.scss"

function Rates() {

    const { t } = useTranslation()

    return (
        <div>
            <Head>   
                <title>{t("common:navbar.rates")}</title>
                <meta name="description" content={t("common:head.rates")} />
                <link rel="icon" href="/snowflake.png" />
            </Head>
            <Header
                img={RatesHeaderImg}
                h1={t("common:headers.page_title_rates")}
                h2={t("common:headers.title_rates")}
            />
            <RatesTable 
                season={t("common:rates.seasons.season_start.season_title")}
                period={t("common:rates.seasons.season_start.months")}
                rates="1500€"
                period2={t("common:rates.seasons.season_start.months2")}
                rates2="1700€"
            />
            <RatesTable 
                season={t("common:rates.seasons.christmas.season_title")}
                period={t("common:rates.seasons.christmas.months")}
                rates="3800€"
                period2={t("common:rates.seasons.christmas.months2")}
                rates2="4200€"
            />
            <RatesTable 
                season={t("common:rates.seasons.season_low.season_title")}
                period={t("common:rates.seasons.season_low.months")}
                rates="2250€"
                period2={t("common:rates.seasons.season_low.months2")}
                rates2="2500€"
            />
            <RatesTable 
                season={t("common:rates.seasons.season_mid.season_title")}
                period={t("common:rates.seasons.season_mid.months")}
                rates="3000€"
            />
            <RatesTable 
                season={t("common:rates.seasons.season_high.season_title")}
                period={t("common:rates.seasons.season_high.months")}
                rates="4000€"
            />
            <RatesTable 
                season={t("common:rates.seasons.season_mid2.season_title")}
                period={t("common:rates.seasons.season_mid2.months")}
                rates="3000€"
                period2={t("common:rates.seasons.season_mid2.months2")}
                rates2="2850€"
                period3={t("common:rates.seasons.season_mid2.months3")}
                rates3="2650€"
            />
            <RatesTable 
                season={t("common:rates.seasons.season_end.season_title")}
                period={t("common:rates.seasons.season_end.months")}
                rates="2950€"
            />
            <div className={classes["short-stay-wrapper"]}>
                <h1 className={classes["h1-short-stay"]}>{t("common:rates.short_stay_title")}</h1>
                <hr className={classes["hr-rates"]} />
                <p className={classes["short-stay"]}>{t("common:rates.short_stay")}</p>
            </div>
        </div>
    )
}

export default Rates