import React from 'react';
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/LoginForm';
import Footer from '../Components/Footer';

class LoginForm extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar />
                <LoginForm />
                <Footer />
            </React.Fragment>
        )
    }
}
export default LoginForm;