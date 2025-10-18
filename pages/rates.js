import Header from "../components/header/Header"
import Header2 from "../components/header/Header2"
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
      {/* <Header
        img={RatesHeaderImg}
        h1={t("common:headers.page_title_rates")}
        h2={t("common:headers.title_rates")}
      />
      <RatesTable
        season={t("common:rates.seasons.season_end.season_title")}
        period={t("common:rates.seasons.season_end.months")}
        rates="3000€"
        period2={t("common:rates.seasons.season_end.months2")}
        rates2="3000€"
        period3={t("common:rates.seasons.season_end.months3")}
        rates3="3000€"
        period4={t("common:rates.seasons.season_end.months4")}
        rates4="3000€"
        period5={t("common:rates.seasons.season_end.months5")}
        rates5="2500€"
      /> */}
      <Header2
        h1={t("common:headers.page_title_rates2")}
        h2={t("common:headers.title_rates2")}
      />
      <RatesTable
        season={t("common:rates.seasons.season_start.season_title")}
        period={t("common:rates.seasons.season_start.months")}
        rates="1800€"
        period2={t("common:rates.seasons.season_start.months2")}
        rates2="1800€"
        period3={t("common:rates.seasons.season_start.months3")}
        rates3="1800€"
        period4={t("common:rates.seasons.season_start.months4")}
        rates4="3000€"
      />
      <RatesTable
        season={t("common:rates.seasons.christmas.season_title")}
        period={t("common:rates.seasons.christmas.months")}
        rates="4600€"
        period2={t("common:rates.seasons.christmas.months2")}
        rates2="5300€"
      />
      <RatesTable
        season={t("common:rates.seasons.season_mid.season_title")}
        period={t("common:rates.seasons.season_mid.months")}
        rates="3600€"
        period2={t("common:rates.seasons.season_mid.months2")}
        rates2="3600€"
        period3={t("common:rates.seasons.season_mid.months3")}
        rates3="3800€"
        period4={t("common:rates.seasons.season_mid.months4")}
        rates4="3800€"
        period5={t("common:rates.seasons.season_mid.months5")}
        rates5="3800€"
      />
      <RatesTable
        season={t("common:rates.seasons.season_high.season_title")}
        period={t("common:rates.seasons.season_high.months")}
        rates="4900€"
        period2={t("common:rates.seasons.season_high.months2")}
        rates2="4900€"
        period3={t("common:rates.seasons.season_high.months3")}
        rates3="4900€"
        period4={t("common:rates.seasons.season_high.months4")}
        rates4="4900€"
      />
      <RatesTable
        season={t("common:rates.seasons.season_mid2.season_title")}
        period={t("common:rates.seasons.season_mid2.months")}
        rates="4000€"
        period2={t("common:rates.seasons.season_mid2.months2")}
        rates2="3800€"
        period3={t("common:rates.seasons.season_mid2.months3")}
        rates3="3800€"
        period4={t("common:rates.seasons.season_mid2.months4")}
        rates4="3800€"
      />
      <RatesTable
        season={t("common:rates.seasons.season_end.season_title")}
        period={t("common:rates.seasons.season_end.months")}
        rates="3800€"
        period2={t("common:rates.seasons.season_end.months2")}
        rates2="3800€"
        period3={t("common:rates.seasons.season_end.months3")}
        rates3="3800€"
        period4={t("common:rates.seasons.season_end.months4")}
        rates4="3800€"
        // period5={t("common:rates.seasons.season_end.months5")}
        // rates5="2500€"
      />
      <div className={classes["short-stay-wrapper"]}>
        <h1 className={classes["h1-short-stay"]}>{t("common:rates.short_stay_title")}</h1>
        <hr className={classes["hr-rates"]} />
        <p className={classes["short-stay"]}>{t("common:rates.short_stay")}</p>
        <p className={classes["short-stay"]}>{t("common:rates.short_stay2")}</p>
        <p className={classes["short-stay"]}>{t("common:rates.short_stay3")}</p>
      </div>
    </div>
  )
}

export default Rates