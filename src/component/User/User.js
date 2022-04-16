import axios from 'axios';
import React, { useEffect } from 'react';
import {AxiosPost} from '../../utilities/AxiosPost'

const instance = axios.create({
    baseURL:"http://10.100.92.108/super_home_laravel/",
    withCredentials:true,
    'Access-Control-Allow-Origin':'*',
    headers: {Accept:'application/json',
}
  });
//const deeeeeta ={employee_id:71699,password:12345678,otp:1850};
const User = (props) => {
    console.log(props)
    
    

    // useEffect(()=>{
    //     instance.get('sanctum/csrf-cookie')
    //     .then(res=> instance.post('send_otp',props.data)
    //     .then(res=>alert(JSON.stringify(res.data))))
    // },[props.data])  
    AxiosPost(props)
};

export  {User,instance};