
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GoogleButton} from 'react-google-button';
import { signInWithGoogle } from '../firebase';
import {auth, provider} from '../firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import HomePage from './homepage';

function Login() {
  //const [user, loading, error] = useAuthState(auth);
  const user = getAuth();
  const navigate = useNavigate();
  const [signin, setsignin] = React.useState(false);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        const name = result.user.displayName
        const email = result.user.email
        setsignin(true);
        navigate({pathname :'/homepage'},{replace : true})
    }).catch((error)=>{
        console.log(error);
    })
};

    return (
        <div>
        <div className='justify-center'>
        <h1>Hi</h1>
        <GoogleButton onClick={signInWithGoogle}></GoogleButton>
        </div>
        </div>
    );
}

export default Login;