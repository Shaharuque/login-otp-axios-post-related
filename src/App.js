import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from './component/User/User';
import useOtp from './hooks/useOtp';
import { Userotp } from './component/User/Userotp';
import Header from './component/Header/Header';
import { useSpring, animated } from 'react-spring';

function App() {
  //const [id, setId] = useState('')
  //const [p, setP] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState('')
  const [otp, setOtp] = useState('')

  //let data = {}


  // const handleUserId=(e)=>{
  //   console.log((e.target.value))
  // }

  // const handlePassword=(e)=>{
  //   setPassword(parseInt(e.target.value))
  // }
  // //console.log(id)
  // //console.log(password)
  // const handleSubmit=e=>{
  //   //console.log(id,password);
  //   data ={employee_id:id,password:password};
  //   e.preventDefault()
  // }


  // const settingId=()=>{
  //   setId(value)
  // }
  const passingData = () => {
    User({ employee_id: value, password: password });
    //<User employee_id={value} password={password} ></User>
  }

  const passingOtp = () => {
    Userotp({ employee_id: value, password: password, otp: otp })

  }

  // data['employee_id'] = id
  // data['password'] = p
  // console.log(id)
  //console.log(data)
  //console.log(data)

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: 'black' },
      { opacity: 0, color: 'green' },
    ],
    from: { opacity: 0, color: 'red' },
  })
  return (

    <div>
      <div className='loginPageDesign'>
        <div className='mx-auto w-50'>
         
          <div className=' d-flex justify-content-center'>
            <input className='ms-4 rounded' onChange={e => { setValue(e.target.value) }} type='text'
              placeholder='Enter ID'></input>
          </div>
          {/*<button onClick={settingId}>submit</button>*/}

          <div className='m-4 d-flex justify-content-center'>
            <input className='ms-4 rounded' onChange={e => { setPassword(e.target.value) }} type='password'
              placeholder='Enter Password'></input>
          </div>
          <div className='d-flex justify-content-center '>
            <button style={{ borderRadius: '10px', backgroundColor: '#00ffff', border: '1px solid #00ffff', color: 'black',padding:'0 10px' }}
              onClick={() => {
                passingData()
              }}>Get Otp</button>
          </div>
        </div>


        <div className='m-4 d-flex justify-content-center mt-5'>
          <input className='ms-4 rounded' onChange={e => { setOtp(e.target.value) }} type='text' placeholder='Enter OTP'></input>
        </div>
        <div className='d-flex justify-content-center '>
          <button style={{ borderRadius: '10px', backgroundColor: '#00ffff', border: '1px solid #00ffff', color: 'black',fontWeight:'bold', font:'sans-serif',padding:'0 10px' }} className='hover:bg-primary' onClick={passingOtp}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
