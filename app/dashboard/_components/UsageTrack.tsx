'use client';

import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HistoryItem } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)
    const [maxWords, setMaxWords] = React.useState(10000)
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);


    const GetData = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            // Ensure the value is defined and cast it to string
            const emailAddress = user.primaryEmailAddress.emailAddress;
            {/*@ts-ignore*/ }
            const result: HistoryItem[] = await db
                .select()
                .from(AIOutput)
                .where(eq(AIOutput.created_by, emailAddress));
            getTotalUsage(result);
        }
    };

    const IsUserSubscribe = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            const emailAddress = user.primaryEmailAddress.emailAddress;

            try {
                const result = await db
                    .select()
                    .from(UserSubscription)
                    .where(eq(UserSubscription.email, emailAddress));

                if (result) {
                    setUserSubscription(true);
                    setMaxWords(100000)
                }
            } catch (error) {
                console.error('Error checking user subscription:', error);
            }
        }
    }

    React.useEffect(() => {
        user && GetData();
        user && IsUserSubscribe();
    }, [user]);

    React.useEffect(() => {
        user && GetData();
    }, [updateCreditUsage,user])


    const getTotalUsage = (result: HistoryItem[]) => {
        let total = 0;
        result.forEach(element => {
            total += (element.aiResponse?.length ?? 0);
        });
        setTotalUsage(total);
    };

    return (
        <div className='m-3'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h1 className='font-medium'>Credits</h1>
                <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                    <div
                        className='h-2 transition-width duration-800 bg-white rounded-full'
                        style={{ width: (totalUsage / maxWords) * 100 + '%' }}
                    ></div>
                </div>
                <h2 className='text-xs mt-3'>{totalUsage}/{maxWords} Credit Used</h2>
            </div>
            <Button className='w-full mt-4 text-sm hover:bg-white bg-white font-semibold border border-primary text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
