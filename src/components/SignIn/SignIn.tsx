import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { LOG_IN } from '../../queries/index';
import { Redirect } from 'react-router-dom';
import Form from './Form';
const SignIn = () => {

  const [token, setToken] = useState(null);
  const [tokenOnRenderExists, setTokenOnRenderExists] = useState(false);

  useEffect(() => {
    const tokenOnRender: any = localStorage.getItem('token');
    if (tokenOnRender) {
      setTokenOnRenderExists(true);
    } else {
      setTokenOnRenderExists(false);
    }
  }, [tokenOnRenderExists]);

  const [logIn, { data, loading }] = useLazyQuery(LOG_IN, {
    onCompleted: (data: any) => {
      storeToken();
    }
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tokenExists, setTokenExists] = useState(false);

  const handleInputChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    logIn({ variables: { email, password } });
  }

  const storeToken = () => {
    if (loading) {
      console.log('loading');
    }
    localStorage.setItem('token', data?.accountLogIn?.token);
    const tokenLS: any = localStorage.getItem('token');
    setToken(tokenLS);
    if (tokenLS !== '' || null || undefined) {
      setTokenExists(true);
    }
  }

  return (
    <>
      <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      {
        tokenExists && <Redirect
          to={{
            pathname: "/home",
            state: { token: token }
          }}
        />
      }
      {
        tokenOnRenderExists && <Redirect
          to={{
            pathname: "/home",
            state: { token: token }
          }}
        />
      }
    </>
  );
}

export default SignIn;