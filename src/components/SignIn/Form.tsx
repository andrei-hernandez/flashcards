import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Form = ({ handleInputChange = (e: any) => { }, handleSubmit = (e: any) => { } }) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link to="/">
              <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Or{' '}
              <Link to='/signup' className="font-medium text-indigo-600 hover:text-indigo-500">
                create an account
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="p-4 bg-white shadow-md rounded-xl">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="mb-4 -space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only ">
                    Email address
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    onChange={handleInputChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <p className="mt-1 text-sm text-center text-gray-600">
            <Link to='/' className="font-medium text-indigo-600 hover:text-indigo-500">
              Return to home
            </Link>
          </p>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div >
    </>
  );
}

export default Form;
