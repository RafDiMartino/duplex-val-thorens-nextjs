import classes from "./header.module.scss"

function Header2({ h1, h2 }) {

    return (
        <div>
            <div className={classes["page-title-wrapper"]}>
                <h1 className={classes["page-title"]}>{h1}</h1>
                <h2 className={classes["page-title2"]}>{h2}</h2>
            </div>
        </div>
    )
}

export default Header2