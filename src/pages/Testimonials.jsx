import react from 'react';
import {Helmet} from "react-helmet-async";
import Layout from '../Components/Layout';


const Testimonials = ()=>{
    return (
        <Layout>
            <Helmet>
                <title>Testimonials</title>
                <meta name="description" content="This is about page"/>
            </Helmet>

        </Layout>
    );
}

export default Testimonials;
