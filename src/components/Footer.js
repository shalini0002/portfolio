import { MailchimpForm } from "./MailchipForm";
import linkedIn from '../assets/images/linkedin-in.svg';
import facebook from '../assets/images/facebook-f.svg';
import insta from '../assets/images/instagram.svg';
export const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="row align-item-center">
                <MailchimpForm />
                <div className="col-sm-6">
                    <img src={''} />
                </div>
                <div className="col-sm-6 text-center text-sm-end">
                    <div className="social-icon">
                    < a href="" ><img src={linkedIn} /></a>
                    < a href="" ><img src={facebook} /></a>
                    < a href="" ><img src={insta} /></a>
                    </div>
                    <p>copyright &@2022. All Right Reserved</p>
                </div>
                </div>
            </div>
        </footer>
    )
}