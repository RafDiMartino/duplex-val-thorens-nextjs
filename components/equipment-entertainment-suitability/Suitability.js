import classes from"./equipment-entertainment-suitability.module.scss"
import useTranslation from "next-translate/useTranslation"

function Suitability() {

    const { t } = useTranslation()

    return (
        <div className={classes.icons}>
            <h1 className={classes["h1-equipment"]}>{t("common:apartment.suitability.suitabilityTitle")}</h1>
            <hr className={classes["hr-floors"]} />
            <div className={classes["suitability-wrapper"]}>
                <p className={classes.suitability}>{t("common:apartment.suitability.children")}</p>
                <p className={classes.suitability}>{t("common:apartment.suitability.smoking")}</p>
                <p className={classes.suitability}>{t("common:apartment.suitability.pets")}</p>
                <p className={classes.suitability}>{t("common:apartment.suitability.wheelchair")}</p>
            </div>
        </div>
    )
}

export default Suitability
