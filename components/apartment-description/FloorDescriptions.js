import classes from "./floor-descriptions.module.scss"

function FloorDescriptions({ title, ul, carousel, className }){

    return (
    <div className= {className}>
        <div className={classes.floor}>
            <div className={classes["floor-wrapper"]}>  
                <h1 className={classes["h1-floor"]}>{title}</h1>
                <hr className={classes["hr-floors"]} />
            </div>
            <div className={classes["ul-wrapper"]}>{ul}</div>
        </div>
        {carousel}
    </div>
    )
}

export default FloorDescriptions