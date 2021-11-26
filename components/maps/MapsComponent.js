import classes from "./maps.module.scss"
import useTranslation from "next-translate/useTranslation"
import Map1 from "../../assets/Maps/map1.webp"
import Map2 from "../../assets/Maps/map2.webp"
import Image from "next/image"

function MapsComponent() {

    const { t } = useTranslation()

    return (
        <div className={classes.wrapper}>
            <h3 className={classes["location-on-map"]}>{t("common:maps.location_on_map")}</h3>
            <hr className={classes["hr-maps"]} />
            <div className={classes["map-container"]}>
                <div className={classes.imgWrapper}>
                    <Image 
                        layout="responsive"
                        objectFit="cover"
                        priority
                        src={Map1} 
                        alt="Val Thorens map" 
                        onClick={() => window.open("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap1.06949ff6.webp&w=1920&q=75")}
                        />
                </div>
                <div className={classes.imgWrapper}>
                    <Image 
                        layout="responsive"
                        objectFit="cover"
                        priority
                        src={Map2} 
                        alt="Val Thorens map"  
                        onClick={() => window.open("_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap2.b0bd01bd.webp&w=1920&q=75")}  
                    />
                </div>
            </div>
            <iframe className={classes.iframe} title="Apartment Map in Val THorens" width="95%" height="500px" style={{border: "0"}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJs2VTQXmHiUcR-wd_4yz1MWI&key=AIzaSyAIOoRf6LLOSYcXx4ctKe46l5QJbjqm0ZY"></iframe>
        </div>
    )
}

export default MapsComponent

// <a href={Map1} target="_blank" rel="noreferrer"><img src={Map1} alt="Val Thorens map" /></a>
// <a href={Map2} target="_blank" rel="noreferrer"><img src={Map2} alt="Val Thorens map" /></a>