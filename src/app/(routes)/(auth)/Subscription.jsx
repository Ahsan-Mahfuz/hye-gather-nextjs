import React from 'react'
import { useState } from 'react'
import subscribe from '../../assets/subscribe.png'
import { Link } from 'react-router-dom'

const Subscription = () => {
  const [plan, setPlan] = useState('monthly')

  return (
    <div className="flex ">
      <div className="w-1/2  max-lg:hidden">
        <img
          src={subscribe}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col max-lg:w-full items-center justify-center min-h-screen  px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Choose Your Subscription Plan
          </h2>
          <p className="text-gray-600 text-sm">
            Get the best features to grow your business!
          </p>
        </div>

        <div className="p-6 rounded-lg  max-w-lg w-full">
          <div className="flex justify-center space-x-2 mb-6 ">
            <button
              className={`cursor-pointer px-6 py-2 rounded-lg ${
                plan === 'monthly'
                  ? 'bg-blue-800 text-white shadow'
                  : 'bg-gray-200'
              }`}
              onClick={() => setPlan('monthly')}
            >
              Monthly
            </button>
            <button
              className={`cursor-pointer px-6 py-2 rounded-lg ${
                plan === 'yearly'
                  ? 'bg-blue-800 text-white  shadow'
                  : 'bg-gray-200'
              }`}
              onClick={() => setPlan('yearly')}
            >
              Yearly
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {plan === 'monthly' ? 'Monthly Plan' : 'Yearly Plan'}
            </h3>
            {plan === 'monthly' && (
              <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-full">
                Popular
              </span>
            )}
            <p className="text-2xl font-bold  text-blue-600 mt-2">
              ${plan === 'monthly' ? '29' : '290'}
              {plan === 'monthly' ? '/month' : '/year'}
            </p>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Priority listing
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Customer
                messaging
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Advanced
                analytics
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Premium support
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> Customer
                messaging
              </li>
            </ul>

            <button className="cursor-pointer mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              <Link to={'/payment'}>Subscribe Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
