import classes from "./header.module.scss"
import Image from 'next/image'

function Header({ img, h1, h2, objPosition }) {

    return (
        <div>
            <div style={{position: "relative", width: "100%", height: "25rem"}}>
                <Image 
                    className={classes["img-container"]} 
                    layout="fill"
                    objectFit="cover"
                    objectPosition={objPosition}
                    src={img} 
                    alt={"Views of Val Thorens"} 
                    priority 
                />
            </div>
            <div className={classes["page-title-wrapper"]}>
                <h1 className={classes["page-title"]}>{h1}</h1>
                <h2 className={classes["page-title2"]}>{h2}</h2>
            </div>
        </div>
    )
}

export default Header