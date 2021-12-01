import Icon15 from "../../assets/icons-entertainment/wifi.png"
import Icon16 from "../../assets/icons-entertainment/tv-monitor.png"
import Icon17 from "../../assets/icons-entertainment/dvd-player.png"
import Icon18 from "../../assets/icons-entertainment/xbox.png"
import Icon19 from "../../assets/icons-entertainment/board-game.png"
import Icon20 from "../../assets/icons-entertainment/books.png"
import classes from"./equipment-entertainment-suitability.module.scss"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"

export function Entertainment({title}) {

    const { t } = useTranslation()

    return (
        <div className={classes.icons}>
            <h1 className={classes["h1-equipment"]}>{title}</h1>
            <hr className={classes["hr-floors"]}/>
            <div className={classes["icon-container"]}>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon15} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.wifi")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon16} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.tv")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon17} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.dvd")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon18} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.xbox")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon19} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.games")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon20} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.entertainment.books")}</p>
                </div>
            </div>
        </div>
    )
}