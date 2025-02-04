import { useState } from "react";
import { contactPeople } from "../components/userInput";
import SearchBar from "../components/searchbar";
import CopyRight from "@/components/copyright";


export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    return (
        <div>
            <div className="contact-title">
            <h1 className="h1">Contact Me</h1>
            </div>
            <table className="contact-table">
                <tbody>
                <tr>
                    <td>
                        <form onSubmit={(e) => contactPeople(e, formData, setFormData)}>
                            <div>
                            <label>Name</label><br></br>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                            </div>
                            <div>
                            <label>Email</label><br></br>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                            </div>
                            <div>
                            <label>Message</label><br></br>
                            <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </td>
                </tr>
                </tbody>
            </table>
            <img src="/Images/contact us background.jpg" alt="Contact Us Background" id="contactbackground" />
        <SearchBar />
        <CopyRight />
        </div>
    );
}
