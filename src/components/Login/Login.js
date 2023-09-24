import React, { Fragment } from 'react';
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from '../Firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/counter/userSlice';


function Login() {

  const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then(({user})=> {
      dispatch(
        login({
          displayName : user.displayName,
          email : user.email,
          photoURL : user.photoURL,
       })
       );
    })
    .catch(err => alert(err))
  }
  return (
    <Fragment>
      <div className="login">
        <div className="login__container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0ux_8_Xl2czTeeELR5JNkPsLVJIctJSdfIIi-HaWe35Q0d8wkcL6jK-Lh_k8aV2zXQ&usqp=CAU"
            alt=""
          />
          <Button onClick={signIn} variant='contained' color='primary' >Login</Button>
        </div>
      </div>
    </Fragment>
  );
}

export default Login