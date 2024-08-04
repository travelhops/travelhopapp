import {Navigate, Outlet} from 'react-router-dom';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';

import axios from 'axios';

const PrivateRoutes = ()=>{
    const [auth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    const API_URL = process.env.API_URL;

    const isAuth = ()=>{
        axios.get(API_URL+"/api/isAuth", {
            headers: {
                'x-access-token': Cookies.get('token')
            }
        }).then(res=>{
            setAuth(res.data.auth);
            setLoading(false);
        }).catch(error=>{
            setAuth(false);
            setLoading(false);
        });
    }

    useEffect(()=>{
        isAuth();
    }, []);


    if(isLoading){
        return (
            <div>Loading...</div>
        );
    }

    return (
        auth ? <Outlet/>: <Navigate to = '/admin/login' />
    );
}

export default PrivateRoutes;

