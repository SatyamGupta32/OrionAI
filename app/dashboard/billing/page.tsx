import React from 'react'

function billing() {
  return (
    <div className="ml-0 md:ml-48 lg:ml-64 min-h-[calc(100vh-62px)] flex items-center justify-center bg-gray-50">
      <div className=" md:max-w-4xl w-full h-[500px] rounded-lg p-0 md:p-8 flex flex-col md:flex-row gap-3 justify-between">
        {/* Free Plan */}
        <div className="w-full md:w-1/2 bg-white border border-gray-300  rounded-lg p-6 flex flex-col items-center mx-0 md:mx-4">
          <h2 className="text-lg font-semibold text-gray-600">Free</h2>
          <p className="text-4xl font-bold text-gray-900 mt-4">0$<span className="text-sm">/month</span></p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>✓ 10,000 Words/Month</li>
            <li>✓ 50+ Content Templates</li>
            <li>✓ Unlimited Download & Copy</li>
            <li>✓ 1 Month of History</li>
          </ul>
          <button
            className="mt-auto bg-gray-800 text-white px-6 py-2 rounded-full cursor-not-allowed"
            disabled
          >
            Currently Active Plan
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="w-full md:w-1/2 bg-white rounded-lg border border-gray-300 p-6 flex flex-col items-center  mx-0 md:mx-4">
          <h2 className="text-lg font-semibold text-gray-600">Monthly</h2>
          <p className="text-4xl font-bold  mt-4">
            9.99$
            <span className="text-sm text-gray-500">/month</span>
          </p>
          <ul className="mt-6 space-y-2 text-gray-600">
            <li>✓ 1,00,000 Words/Month</li>
            <li>✓ 50+ Template Access</li>
            <li>✓ Unlimited Download & Copy</li>
            <li>✓ 1 Year of History</li>
          </ul>
          <button className="mt-auto border border-primary text-primary px-14 py-2 rounded-full hover:bg-primary hover:text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default billing
