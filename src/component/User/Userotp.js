import React from 'react';
import axios from 'axios';
import {AxiosPostOtp} from '../../utilities/AxiosPostOtp'


const instance = axios.create({
    baseURL:"http://10.100.92.108/super_home_laravel/",
    withCredentials:true,
    'Access-Control-Allow-Origin':'*',
    headers: {Accept:'application/json',
}
  });

const Userotp = (props) => {
    console.log(props)

    AxiosPostOtp(props)
    return (
        <div>
            
        </div>
    );
};

export {Userotp,instance} ;