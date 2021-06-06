import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Content from './Content';

const Landing = () => {

  const [tokenOnRenderExists, setTokenOnRenderExists] = useState(false);

  useEffect(() => {
    const tokenOnRender: any = localStorage.getItem('token');
    if (tokenOnRender) {
      setTokenOnRenderExists(true);
    } else {
      setTokenOnRenderExists(false);
    }
  }, [tokenOnRenderExists]);

  return (
    <>
      {
        tokenOnRenderExists && <Redirect
          to={{
            pathname: "/home",
          }}
        />
      }
      <Content />
    </>
  );
}

export default Landing;
