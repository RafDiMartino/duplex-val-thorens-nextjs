import classes from "./success-message.module.scss"
import useTranslation from "next-translate/useTranslation"

function SuccessMessage() {

    const { t } = useTranslation()

    return (
        <div className={classes["success-wrapper"]}>  
            <h2 className={classes["thanks-h2"]}>{t("common:success.thank_you")}</h2>
            <h3 className={classes["thanks-h3"]}>{t("common:success.thank_you2")}</h3>
            <hr className={classes["hr-success"]} />        
        </div>
    )
}

export default SuccessMessage