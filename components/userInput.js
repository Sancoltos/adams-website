// components/userinput.js

export function contactPeople(event, formData, setFormData) {
    event.preventDefault();

    const { name, email, message } = formData;

    if (name && email && message) {
        const contactData = {
            name,
            email,
            message,
            date: new Date().toLocaleString()
        };

        let existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        existingMessages.push(contactData);
        localStorage.setItem('contactMessages', JSON.stringify(existingMessages));

        alert(`Adam will get back to you shortly!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

        setFormData({ name: '', email: '', message: '' });
    } else {
        alert('Please fill in all fields');
    }
}
