
export function contactPeople(event, formData, setFormData, setSuccessMessage) { //this is the function to handle form submission inside the contact me page
    event.preventDefault(); //stops the page from refreshing

    const { name, email, message } = formData; //takes out all the data from formData to be used

    if (name && email && message) { //this is one big if else statement it makes sure the fields arent empty
        const contactData = {       //sends a message if it is and stores everything and tells the user both 
            name,                   //with an alert up top and a conditional render it then resets the fields
            email,
            message,
            date: new Date().toLocaleString()
        };

        let existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || []; //storing the messages in local storage
        existingMessages.push(contactData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

        alert(`Your Message\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        setFormData({ name: '', email: '', message: '' });
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 5000);

        setFormData({ name: '', email: '', message: '' });
    } else {
        alert('Please fill in all fields');
    }
}
