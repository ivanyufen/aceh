import React from 'react';
import Navbar from './../Components/Navbar';
import Payment from './../Components/Payment';
import Footer from './../Components/Footer';

class Payment extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Navbar />
                <Payment />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Payment;