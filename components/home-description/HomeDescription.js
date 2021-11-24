import classes from "./home-description.module.scss"
import Image from "next/image"

function HomeDescription({ text, img, className, priority }) {
    return (
        <div>
            <div className={classes.description}>
                <div className={className}>
                    <div className={classes["img-wrapper"]}>
                        <Image 
                            layout="responsive"
                            objectFit="cover"
                            src={img} 
                            alt={"View"}
                            {...priority}
                        />
                    </div>
                    <div className={classes["text-wrapper"]}>
                        <h2 className={classes["main-text"]}>{text}</h2>
                        <div className={classes["border-text"]} /> 
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default HomeDescription