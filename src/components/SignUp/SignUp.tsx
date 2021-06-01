import { LockClosedIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link to="/">
            <a href="/#">
              <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
            </a>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Create a new account</h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or{' '}
            <Link to='/signin'>
              <a href="/#" className="font-medium text-indigo-600 hover:text-indigo-500">
                sign in in to your account
              </a>
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
                <label htmlFor="username" className="sr-only">
                  User Name
                </label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
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
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div >
  );
}

export default SignUp;
