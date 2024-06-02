import TeamCard from "../TeamCard/TeamCard"
import { team } from "./team"
import styles from "./about.module.css"
import { useEffect } from "react"

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <main className={styles.aboutContainer}>
            <section className={styles.aboutHero}>
                <h1>Get to Know Us</h1>
            </section>
            <section className={styles.aboutCompanyContainer}>
                <section className={styles.aboutCompany}>
                    <div>
                        <h1>Who we are</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Pellentesque
                            quis phasellus massa facilisis odio.Lorem ipsum
                            dolor sit amet consectetur. Pellentesque quis
                            phasellus massa facilisis odio.Lorem ipsum dolor sit
                            amet consectetur. Pellentesque quis phasellus massa
                            facilisis Lorem ipsum dolor sit amet consectetur.
                            Pellentesque quis phasellus massa facilisis
                            odio.Lorem ipsum dolor sit amet consectetur.
                            Pellentesque quis phasellus massa facilisis
                            odio.Lorem ipsum dolor sit amet consectetur.
                            Pellentesque quis phasellus massa facilisis{" "}
                        </p>
                    </div>
                    <div></div>
                </section>
                <section className={`${styles.aboutCompany} ${styles.reverse}`}>
                    <div>
                        <h1>Our Vision</h1>
                        <p>
                            Our vision is to revolutionize urban mobility
                            through innovative, AI-driven solutions that create
                            smarter, safer, and more efficient cities. We aim to
                            be at the forefront of technological advancements in
                            adaptive traffic control and crowd management,
                            empowering cities worldwide to thrive in an era of
                            rapid urbanization. By leveraging cutting-edge
                            technologies such as edge computing, cloud
                            computing, computer vision, and reinforcement
                            learning, we strive to enhance the quality of life
                            for urban dwellers, support sustainable development,
                            and contribute to the global movement towards
                            smarter, more connected cities. In alignment with
                            the "Make in India", "Made in India" and “Smart
                            Cities” initiatives, we are committed to developing
                            and manufacturing our solutions locally, fostering
                            technological self-reliance, and driving economic
                            growth within the country.
                        </p>
                    </div>
                    <div></div>
                </section>
            </section>
            <section className={styles.aboutTeam}>
                <h1>Our Team</h1>
                <div className={styles.teamcards}>
                    {team.map((member) => (
                        <TeamCard {...member} />
                    ))}
                </div>
            </section>
        </main>
    )
}
