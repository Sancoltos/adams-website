const SuccessMessage = ({ show }) => { //function for the message
    if (!show) return null; // Conditional Rendering and props being passed
    return <p className="success-message">Your message has been successfully sent!<br></br>
                                        Adam will get back shortly</p>;
};

export default SuccessMessage;
