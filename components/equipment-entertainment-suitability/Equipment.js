import Icon1 from "../../assets/icons-equipment/fridge.png"
import Icon2 from "../../assets/icons-equipment/washing-machine.png"
import Icon3 from "../../assets/icons-equipment/dishwasher.png"
import Icon4 from "../../assets/icons-equipment/microwave.png"
import Icon5 from "../../assets/icons-equipment/toaster.png"
import Icon6 from "../../assets/icons-equipment/raclette.png"
import Icon7 from "../../assets/icons-equipment/fondue.png"
import Icon8 from "../../assets/icons-equipment/coffee-machine.png"
import Icon9 from "../../assets/icons-equipment/filter-coffee.png"
import Icon10 from "../../assets/icons-equipment/kettle.png"
import Icon11 from "../../assets/icons-equipment/vacuum.png"
import Icon12 from "../../assets/icons-equipment/ironing.png"
import Icon13 from "../../assets/icons-equipment/hair-dryer.png"
import Icon14 from "../../assets/icons-equipment/baby-crib.png"
import Icon21 from "../../assets/icons-equipment/skiing.png"
import Icon22 from "../../assets/icons-equipment/oven.png"
import classes from"./equipment-entertainment-suitability.module.scss"
import Image from "next/image"
import useTranslation from "next-translate/useTranslation"


export function Equipment({title}) {

    const { t } = useTranslation()

    return (
        <div className={classes.icons}>
            <h1 className={classes["h1-equipment"]}>{title}</h1>
            <hr className={classes["hr-floors"]} />
            <div className={classes["icon-container"]}>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon1} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.fridge")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon2} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.washing_machine")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon3} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.dishwasher")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon22} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.oven")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon4} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.microwave")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon5} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.toaster")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon6} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.raclette")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon7} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.foundue")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon8} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.coffe")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon9} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.filter_coffe")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon10} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.kettle")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon11} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.vacuum")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon12} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.iron")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon13} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.hair_dryer")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon14} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.baby_bed")}</p>
                </div>
                <div className={classes["icon-wrapper"]}>
                    <div className={classes.imgWrapper}>
                        <Image src={Icon21} layout="responsive" objectFit="cover" alt="Equipment icons" />
                    </div>
                    <p className={classes["icon-description"]}>{t("common:apartment.equipment.ski_closet")}</p>
                </div>
            </div>
        </div>
    )
}



