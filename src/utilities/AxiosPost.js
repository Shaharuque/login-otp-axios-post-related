import { instance } from "../component/User/User";

const AxiosPost=(data)=>{
    instance.get('sanctum/csrf-cookie')
    .then(res=> instance.post('send_otp',data)
    .then(res=>alert(JSON.stringify(res.data))))
}


export {AxiosPost}