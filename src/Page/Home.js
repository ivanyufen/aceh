import React from 'react';
import Navbar from './../Components/Navbar';
import Carousel from './../Components/Carousel';
import Content from './../Components/Content';
import Footer from './../Components/Footer';
import Tes from './../Components/Tes'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <Navbar /> */}
                <Carousel />
                <Content />

            </React.Fragment>
        )
    }
}
export default Home;
