'use client';

import React from 'react';
import { Loader2Icon } from 'lucide-react';
import axios from 'axios';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { useContext } from 'react';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function billing() {

  const [loading, setLoading] = React.useState(false)
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)

  const CreateSubscription = () => {
    setLoading(true);
    axios.post('/api/create-subscription', {}) // Corrected 'axios' usage
      .then(resp => {
        console.log(resp.data);
        onPayment(resp.data.id);
      })
      .catch(err => {
        console.error('Error creating subscription:', err);
        setLoading(false);
      });
  };


  const onPayment = (subId: string) => {
    const options = {
      'key': process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      'subscription-id': subId,
      'name': 'Orion AI App',
      description: 'Monthly Subscription',
      handler: async (resp: any) => {
        console.log(resp);
        if (resp) {
          SaveSubscription(resp?.razorpay_payment_id)
        }
        setLoading(false);
      }
    }
     {/*@ts-ignore*/}
    const rzp = new Razorpay(options);
    rzp.open();
  }

  const SaveSubscription = async (paymentId: string) => {
    console.log(user);
    const userName = (user?.firstName && user?.lastName)
      ? `${user.firstName} ${user.lastName}`
      : user?.primaryEmailAddress?.emailAddress.split('@')[0].replace(/[^a-zA-Z]/g, '');
    const result = await db.insert(UserSubscription).values({
      email: user?.primaryEmailAddress?.emailAddress,
      userName: userName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format('DD/MM/YYYY')
    });
    console.log(result);
    if(result){
      window.location.reload();
    }
  }

  return (
    <div className="ml-0 md:ml-48 lg:ml-64 min-h-[calc(100vh-62px)] flex items-center flex-col justify-center bg-gray-50">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      <h2 className='font-semibold text-2xl lg:text-5xl text-center'>Upgrade with Monthly Plan</h2>
      <div className=" md:max-w-4xl w-full h-auto lg:h-[500px] rounded-lg p-0 md:p-8 flex flex-col lg:flex-row gap-3 justify-between">
        {/* Free Plan */}
        <div className="w-11/12 md:w-1/2 bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center mx-auto lg:mx-4">
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
        <div className="w-11/12 md:w-1/2 bg-white rounded-lg border border-gray-300 p-6 flex flex-col items-center  mx-auto lg:mx-4">
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
          <button
            disabled={loading}
            onClick={() => CreateSubscription()} className="relative mt-auto border bg-transparent flex items-center gap-1 border-primary text-primary px-14 py-2 rounded-full hover:bg-primary hover:text-white">
            {loading && <Loader2Icon className='absolute left-7 animate-spin' />}
            {userSubscription ? 'Active Plan' : 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default billing
