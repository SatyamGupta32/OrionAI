'use client';

import { useState, useEffect } from 'react';
import { db } from '@/utils/db'; // Import your db configuration
import { AIOutput } from '@/utils/schema'; // Import your schema
import { desc } from 'drizzle-orm'; // Import desc for ordering

// Define a TypeScript interface for the history data
export interface HistoryItem {
  id: number;
  FormData: string;
  templateSlug: string;
  aiResponse: string | null; // Allow null
  created_at: string | null; // Ensure this is a string
  created_by: string;
}

// Function to clean up FormData and extract primary content
const extractPrimaryContent = (formData: string): string => {
  return formData
    .replace(/[{}]/g, '') // Remove curly braces
    .replace(/\binfo\b/g, '') // Remove the word 'info'
    .replace(/['":]/g, '') // Remove single quotes, double quotes, and colons
    .trim(); // Remove any leading or trailing whitespace
};

const HistoryPage = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Correct query using Drizzle ORM to order by ID in descending order
        const result = await db
          .select()
          .from(AIOutput)
          .orderBy(desc(AIOutput.id)); // Order by ID in descending order

        console.log('Fetched data:', result); // Debugging - Check the fetched data

        // Convert `created_at` to a string
        const formattedResult: HistoryItem[] = result.map(item => ({
          id: item.id,
          FormData: item.FormData,
          templateSlug: item.templateSlug,
          aiResponse: item.aiResponse ?? '', // Default aiResponse to empty string if null
          created_at: item.created_at ? new Date(item.created_at as Date).toISOString() : '', // Convert Date to ISO string
          created_by: item.created_by,
        }));

        setHistory(formattedResult);
      } catch (err) {
        setError('Failed to fetch history');
        console.error('Error:', err); // Debugging - Check the error
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ml-0 md:ml-48 lg:ml-64 p-5">
      <h1>History</h1>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <table className="min-w-full text-center text-xs md:text-base table-spacing table-cell-padding table-row-border">
          <thead>
            <tr className='bg-[#E5E5E5]'>
              <th className="w-32 h-12">ID</th>
              <th className="w-64 h-12">Form Data</th>
              <th className="w-64 h-12">AI Response</th>
              <th className="w-40 h-12">Created At</th>
              <th className="w-40 h-12">Created By</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td className="py-2 border-b border-zinc-600 w-32 h-12">{item.id}</td>
                <td className="py-2 border-b border-zinc-600 w-64 h-12">{extractPrimaryContent(item.FormData)}</td>
                <td className="border-b border-zinc-600 relative w-[180px] sm:w-[350px] h-[50px] sm:h-[100px]">
                  <div className="py-2 absolute inset-0 overflow-hidden">
                    <p className="scroll h-full w-full overflow-y-auto text-ellipsis text-left">
                      {item.aiResponse}
                    </p>
                  </div>
                </td>
                <td className="py-2 border-b border-zinc-600 w-40 h-12">{item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}</td>
                <td className="py-2 border-b border-zinc-600 w-40 h-12 pr-3">{item.created_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default HistoryPage;
