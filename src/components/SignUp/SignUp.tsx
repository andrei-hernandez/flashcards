import { useLazyQuery, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { CREATE_USER, LOG_IN } from '../../queries';
import Form from './Form';

const SignUp = () => {

  const [token, setToken] = useState(null)
  const [tokenOnRenderExists, setTokenOnRenderExists] = useState(false);

  useEffect(() => {
    const tokenOnRender: any = localStorage.getItem('token');
    if (tokenOnRender) {
      setTokenOnRenderExists(true);
    } else {
      setTokenOnRenderExists(false);
    }
  }, [tokenOnRenderExists]);

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [tokenExists, setTokenExists] = useState(false);

  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: () => {
      LogInQuery();
    }
  });

  const [logIn, { data, loading }] = useLazyQuery(LOG_IN, {
    onCompleted: (data: any) => {
      storeToken();
    }
  });

  const LogInQuery = () => {
    logIn({ variables: { email, password } });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUser({ variables: { email, userName, password } });
  }

  const handleInputChange = (e: any) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
    if (e.target.name === 'userName') {
      setUserName(e.target.value);
    }
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

export default SignUp;
