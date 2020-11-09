import React from 'react';

import SlideComponent from './SlideComponent';
import ListProduct from './ListProduct';
import Header from "../../Component/Header";
const Home = () => {
    //cách khai báo một function
    const HandleEvent = () => {

    }
    return (
        <div>
            <Header />
            <SlideComponent />
            <ListProduct />
        </div>
    );
}

export default Home;