import { useState } from "react"
import styles from "./contact.module.css"
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
        console.log(formInput)
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
