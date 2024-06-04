import { useState } from "react"
import styles from "./contact.module.css"
import { init, send } from "@emailjs/browser"
export default function Contact() {
    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    })

    const handleChange = (e) => {
        const fieldName = e.target.name
        const value = e.target.value

        setFormInput({ ...formInput, [fieldName]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        init({
            publicKey: "9THNFbfru8nqk8iho",
            blockHeadless: true,
            limitRate: {
                id: "app",
                // Allow 1 request per 10s
                throttle: 10000,
            },
        })
        send("service_zez6468", "template_gjwc9ov", {
            from_name: formInput.name,
            email: formInput.email,
            phone: formInput.phone,
            subject: formInput.subject,
            message: formInput.message,
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
    return (
        <section className={styles.contactDetails}>
            <h1>Contact Details</h1>
            <p>
                Feel free to reach out to us with any questions or inquiries.
                Our team is here to assist you and will respond as quickly as
                possible.
            </p>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.flex}>
                    <div className={styles.formfield}>
                        <label>*Name</label>
                        <input
                            name="name"
                            type="text"
                            onChange={handleChange}
                            placeholder="Eg. John Smith"
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
                            placeholder="Eg. Quote regarding XYZ"
                        />
                    </div>
                    <div className={styles.formfield}>
                        <label>Phone</label>
                        <input
                            name="phone"
                            type="text"
                            onChange={handleChange}
                            placeholder="Eg. +91987654321"
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
    )
}
