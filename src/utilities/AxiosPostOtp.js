
import { instance } from "../component/User/Userotp";


const AxiosPostOtp=(data)=>{
    instance.get('sanctum/csrf-cookie')
    .then(res=> instance.post('check_otp',data)
    .then(res=>alert(JSON.stringify(res.data))))
}

export {AxiosPostOtp}