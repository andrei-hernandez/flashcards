import { useEffect, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Profile from './Profile';



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

  let navigation = [
    { name: 'Home', href: '#', current: true, path: 'home' },
    { name: 'Sign Up', href: '#', current: false, path: 'signup' },
  ]

  let auth = false;

  const [jwt, setJwt] = useState<string | null>('');

  useEffect(() => {
    const storedJwt = localStorage.getItem('token');
    setJwt(storedJwt)
  }, [jwt]);

  if (jwt !== '' && jwt !== null && jwt !== undefined) {
    auth = true;
    navigation = [
      { name: 'Home', href: '#', current: true, path: 'home' }
    ]
  }

  return (
    <Disclosure as="nav" className="bg-gray-800" key="navbar">
      {({ open }) => (
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8" key="navbar4">
          <div className="relative flex items-center justify-between h-16" key="navbar4">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" key="navbar5">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" key="navbar2">
                <span className="sr-only" key="navbar6">Open main menu</span>
                {open ? (
                  <XIcon className="block w-6 h-6" aria-hidden="true" key="navbar7" />
                ) : (
                  <MenuIcon className="block w-6 h-6" aria-hidden="true" key="navbar8" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start" key="navbar9">
              <div className="flex items-center flex-shrink-0" key="navbar10">
                <img
                  key="navbar11"
                  className="block w-auto h-8 lg:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  key="navbar12"
                  className="hidden w-auto h-8 lg:block"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6" key="navbar13">
                <div className="flex space-x-4" key="navbar14">
                  {navigation.map((item) => (
                    <Link to={item.path} key={item.name} href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" key="navbar15">
              {
                auth === false &&
                <Link to="/signin">
                  <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:text-white hover:bg-blue-500" key="navbar16">
                    Sign In
                  </button>
                </Link>
              }
              {auth === true && <Profile />}
            </div>
          </div>
        </div>
      )}
    </Disclosure>
  );
}

export default Navbar;