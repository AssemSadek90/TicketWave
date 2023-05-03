import { React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function GoogleLogin({ params }) {
  const navigate = useNavigate();
  const accessCode = params.location.pathname.slice(13, 43);
  const codeParams = { code: accessCode };
  const submitCode = () => {
    axios
      .post('google/login/connect', codeParams)
      .then((res) => {
        console.log('putting token in local storage');
        localStorage.setItem('accessToken', res.data.key);
        //setToken(token);
        console.log('Logged in successfully with google');
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    submitCode();
  }, []);
  return <div>Sign in with Google</div>;
}
