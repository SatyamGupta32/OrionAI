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

function UsageTrack() {
    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext)

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
                        style={{ width: `${Math.min((totalUsage / 10000) * 100, 100)}%` }} // Safeguard against overflow
                    ></div>
                </div>
                <h2 className='text-xs mt-3'>{totalUsage}/10,000 Credit Used</h2>
            </div>
            <Button variant={'secondary'} className='w-full mt-4 text-sm font-semibold border border-primary text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
