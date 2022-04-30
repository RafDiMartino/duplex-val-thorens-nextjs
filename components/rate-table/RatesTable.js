import classes from "./rates-table.module.scss"
import useTranslation from "next-translate/useTranslation"


function RatesTable({ season, period, period2, period3, period4, period5, rates, rates2, rates3, rates4, rates5 }) {

    const { t } = useTranslation()

    return (
        <div className={classes["rates-wrapper"]}>
            <h3>{season}</h3>
            <div className={classes.titles}>
                <h4>{t("common:rates.period")}</h4>
                <h4>{t("common:rates.weekly_rates")}</h4>                
            </div> 
            <div className={classes["rates-container"]}>
                <div className={classes.rates}>
                    <p>{period}</p>
                    <p>{rates}</p>
                </div>
                { period2 ? <div className={classes.rates}>
                    <p>{period2}</p>
                    <p>{rates2}</p>
                    </div> : <></> } 
                { period3 ? <div className={classes.rates}>
                    <p>{period3}</p>
                    <p>{rates3}</p>
                    </div> : <></> } 
                { period4 ? <div className={classes.rates}>
                    <p>{period4}</p>
                    <p>{rates4}</p>
                    </div> : <></> } 
                { period5 ? <div className={classes.rates}>
                    <p>{period5}</p>
                    <p>{rates5}</p>
                    </div> : <></> }
            </div>   
        </div>
    )
}

export default RatesTable