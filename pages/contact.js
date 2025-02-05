import { useState } from "react"; //all the imports for the contact page to be used
import { contactPeople } from "../components/userInput"; //the file to handle the user submission logic and errors
import SearchBar from "../components/searchbar"; 
import CopyRight from "../components/copyright";
import SuccessMessage from "../components/successmessage"; //a success message logic file to tell the user it was sent

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" }); //our variables being declared that can be updated when needed
    const [successMessage, setSuccessMessage] = useState(false);

    return (
        <div>
            <div className="contact-title"> {/**This is the main page which has all the html style code and lables and forms  */}
            <h1 className="h1">Contact Me</h1>
            </div>
            <table className="contact-table">
                <tbody>
                <tr>
                    <td>
                        
                        <form onSubmit={(e) => contactPeople(e, formData, setFormData, setSuccessMessage)}>
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
            <SuccessMessage show={successMessage} /> {/**this is our successmessage being updated  */}
            <img src="/Images/contact us background.jpg" alt="Contact Us Background" id="contactbackground" />
        <SearchBar /> {/**rendering other components */}
        <CopyRight />
        </div>
    );
}
