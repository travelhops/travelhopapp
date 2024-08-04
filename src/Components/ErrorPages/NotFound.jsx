import react from 'react';
import Layout from '../Layout';
import {Helmet} from "react-helmet-async";

const NotFound = ()=>{
    return (
        <Layout>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div className="flex w-screen h-screen justify-center items-center">
                <span>Page Not Found</span>
            </div>
        </Layout>
    );
}


export default NotFound;
