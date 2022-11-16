import { useState } from "react";
import "./contact.scss"

export default function Contact() {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }


    return (
        <div className="contact" id="contact">
            <div className="left"><img src="https://images.unsplash.com/photo-1499159058454-75067059248a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />

            </div>
            <div className="right">
                <h2>Contact Me.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
};

//21638
