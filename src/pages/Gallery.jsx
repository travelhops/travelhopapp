import react from 'react';
import {Helmet} from "react-helmet-async";
import Layout from '../Components/Layout';


const Gallery = ()=>{
    return (
        <Layout>
            <Helmet>
                <title>Gallery</title>
                <meta name="description" content="This is about page"/>
            </Helmet>

        </Layout>
    );
}

export default Gallery;
