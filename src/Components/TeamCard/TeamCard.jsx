import styles from "./teamCard.module.css"

export default function TeamCard({
    name,
    designation,
    creds,
    email,
    linkedin,
    img,
}) {
    return (
        <div className={styles.teamcard}>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p className={styles.designation}>{designation}</p>
            <div className={styles.flex}>
                <p className={styles.creds}>{creds}</p>
                <a href={linkedin} target="__blank">
                    Linkedin
                </a>
            </div>
            <p className={styles.email}>Email - {email}</p>
        </div>
    )
}
