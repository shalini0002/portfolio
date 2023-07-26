import { useState } from  "react"; 
// import contactImg from "../assets/images/"
export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value()
        })
    }
    const handleSubmit =  async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
           method:" POST",
           headers: {
            "Content-Type": "Application/json;charset=utf-8",
           },
           body: JSON.stringify(formDetails),

        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({ success: true, message: 'Message sent successfully'});

        }else {
            setStatus({
                 success: false, message: 'Something went wrong, please try againcrcri'
            })
        }

    }
    return (
        <>
    <section className="contact" id="connect">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                <img src={''} alt="contact us"/>
                </div>
                <div className="col-md-6">
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)} />
                            </div>
                            <div className="col-md-6 px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)} />
                            </div>
                            <div className="col-md-6 px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email',e.target.value)} />
                            </div>
                            <div className="col-md-6 px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone',e.target.value)} />
                            </div>
                           <div className="col">
                            <textarea row="6" value={formDetails.message} placeholder="Message"  onChange={(e) => onFormUpdate('phone',e.target.value)} />
                            <button type="submit"><span>{buttonText}</span></button>
                           </div>
                           {
                            status.message && 
                            <div className="col">
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </div>
                           }
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </section>
        </>
    )
}