import useTranslation from "next-translate/useTranslation"
import classes from "./floor-descriptions.module.scss"

export function ULGroundFloor() {

    const { t } = useTranslation()

    return (
        <div className={classes["ul-wrapper"]}>
            <div className={classes["ul-container"]}>
                <ul className={classes["ul-floor"]}>
                    <li>{t("common:apartment.ground_floor.first_li")}</li>
                    <li>{t("common:apartment.ground_floor.second_li")}</li>
                    <li>{t("common:apartment.ground_floor.third_li")}</li>
                    <li>{t("common:apartment.ground_floor.fourth_li")}</li>
                    <li>{t("common:apartment.ground_floor.fifth_li")}</li>
                </ul>
            </div>
        </div>
    )
}

export function ULFirstFloor() {

    const { t } = useTranslation()

    return (
        <div className={classes["ul-wrapper"]}>
            <div className={classes["ul-container"]}>
                <ul className={classes["ul-floor"]}>
                    <li>{t("common:apartment.first_floor.first_li")}</li>
                    <li>{t("common:apartment.first_floor.second_li")}</li>
                    <li>{t("common:apartment.first_floor.third_li")}</li>
                    <li>{t("common:apartment.first_floor.fourth_li")}</li>
                    <li>{t("common:apartment.first_floor.fifth_li")}</li>
                    <li>{t("common:apartment.first_floor.sixth_li")}</li>
                    <li>{t("common:apartment.first_floor.seventh_li")}</li>
                </ul>
            </div>
        </div>
    )
}