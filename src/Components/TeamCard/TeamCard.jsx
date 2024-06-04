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
            <a href={linkedin} target="__blank">
                Linkedin
            </a>
            <p className={styles.email}>
                Email -<br /> <a href={`mailto:${email}`}>{email}</a>
            </p>
        </div>
    )
}
