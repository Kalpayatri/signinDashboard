import React from 'react';
import Link from 'next/link';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { useSession, signIn } from 'next-auth/react';

function Login() {
  // const session = useSession();
  return (
    <div className="flex flex-col md:flex-row w-screen">
      <section className="w-full md:w-1/2 bg-black text-white">
        <div className="flex items-center justify-center h-full">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Board.</h2>
          </div>
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white mb-1">
              Sign In
            </h1>
            <p className="text-sm text-gray-900">
              Sign in to your account
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 mt-8 mb-6">
              <button
                type="button"
                className="w-full  bg-white text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center flex items-center justify-center"
                // onClick={()=>signIn('google')}
              >
                <FaGoogle className="mr-2 text-red-600" /> Sign in with Google
              </button>
              <button
                type="button"
                className="w-full bg-white text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center flex items-center justify-center"
              >
                <FaApple className="mr-2 text-black" /> Sign in with Apple
              </button>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link href="#" className="text-sm font-small text-primary-600 hover:underline dark:text-primary-500 text-blue-600">Forgot password?</Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
            Don’t have an account? <a href="#" className="text-sm font-small text-primary-600 hover:underline dark:text-primary-500 text-blue-600">Register here</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
