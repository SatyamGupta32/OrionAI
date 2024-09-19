'use client';

import React, { useContext } from 'react';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { HistoryItem } from '../history/page';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

function UsageTrack() {
    const { user } = useUser();
    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext)

    const GetData = async () => {
        if (user?.primaryEmailAddress?.emailAddress) {
            // Ensure the value is defined and cast it to string
            const emailAddress = user.primaryEmailAddress.emailAddress;
            const result: HistoryItem[] = await db
                .select()
                .from(AIOutput)
                .where(eq(AIOutput.created_by, emailAddress));
            getTotalUsage(result);
        }
    };

    React.useEffect(() => {
        GetData();
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
                        style={{ width: `${(totalUsage / 10000) * 100}%` }}
                    ></div>
                </div>
                <h2 className='text-xs mt-3'>{totalUsage}/10,000 Credit Used</h2>
            </div>
            <Button variant={'secondary'} className='w-full mt-4 text-sm font-semibold border border-primary text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
