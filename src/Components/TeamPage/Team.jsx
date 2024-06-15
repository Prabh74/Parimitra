import TeamCard from "../TeamCard/TeamCard"
import styles from "./teampage.module.css"
import { useState, useEffect, useContext } from "react"
import { send } from "@emailjs/browser"
import { ThemeContext } from "../../ThemeStore"

export default function Team() {
    const { isDark } = useContext(ThemeContext)
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const handleChange = (e) => {
        const fieldName = e.target.name
        const value = e.target.value

        setFormInput({ ...formInput, [fieldName]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = formInput.name.trim()
        const email = formInput.email.trim()
        const subject = formInput.subject.trim()
        const message = formInput.message.trim()
        if (name === "" || email === "" || subject === "" || message === "") {
            if (name === "") alert("Name is a necessary field")
            else if (email === "") alert("Email is a necessary field")
            else if (subject === "") alert("Subject is a necessary field")
            else if (message === "") alert("Message is a necessary field")
        } else {
            send("service_vlvo6ni", "template_fo0s97s", {
                from_name: name,
                email: email,
                phone: formInput.phone,
                subject: `Email from hiring section:  ${subject}`,
                message: message,
            }).then(
                (res) => {
                    alert("Email Sent")
                    console.log(res)
                    window.location.reload()
                },
                (err) => {
                    alert("Something Went Wrong. Please try again later.")
                    console.log(err)
                }
            )
        }
    }

    const team = [
        {
            name: "Prof. Amit Agarwal",
            designation: "Founder & Director",
            linkedin: "https://www.linkedin.com/in/amit-agarwal-99a20232/",
            email: "amitfce@iitr.ac.in",
            img: "/Images/amit.jpg",
        },
        {
            name: "Karthik Krishnan O",
            designation: "CoFounder & Director",
            linkedin:
                "https://www.linkedin.com/in/karthik-krishnan-o-75846920b/",
            email: "karthikkrishnanozhinhala@gmail.com",
            img: "/Images/karthik.jpg",
        },
    ]
    return (
        <main className={styles.teamPage}>
            <section className={styles.aboutTeam}>
                <h1>Our Team</h1>
                <div className={styles.teamcards}>
                    {team.map((member) => (
                        <TeamCard {...member} />
                    ))}
                </div>
            </section>
            <section className={`${styles.careerForm} ${isDark && "dark-theme"}`}>
                <h1>Work Where You Thrive</h1>
                <p>
                    We're a company in constant motion, pushing boundaries and
                    innovating every day. <br /> If you're a go-getter who
                    thrives on challenge and collaboration, we want to hear from
                    you. <br />
                    Become part of our dynamic team and help us shape the future
                    of the Transportation Industry.
                </p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.flex}>
                        <div className={styles.formfield}>
                            <label>*Name</label>
                            <input
                                name="name"
                                type="text"
                                onChange={handleChange}
                                placeholder="Eg. ABC XYZ"
                            />
                        </div>
                        <div className={styles.formfield}>
                            <label>*Email</label>
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange}
                                placeholder="Eg. abc@xyz.com"
                            />
                        </div>
                    </div>

                    <div className={styles.flex}>
                        <div className={styles.formfield}>
                            <label>*Subject</label>
                            <input
                                name="subject"
                                type="text"
                                onChange={handleChange}
                                placeholder="Eg. Applying for XYZ role"
                            />
                        </div>
                        <div className={styles.formfield}>
                            <label>Phone</label>
                            <input
                                name="phone"
                                type="number"
                                onChange={handleChange}
                                placeholder="Eg. 987654321"
                            />
                        </div>
                    </div>

                    <div className={styles.formfield}>
                        <label>*Message</label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </section>
        </main>
    )
}
