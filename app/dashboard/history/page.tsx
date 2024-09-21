'use client';

import { useState, useEffect, useRef } from 'react';
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
    .replace(/\b(niche|outline)\b/g, '') // Remove specified words
    .replace(/['":]/g, '') // Remove single quotes, double quotes, and colons
    .trim(); // Remove leading or trailing whitespace
};

const HistoryPage = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<number | null>(null); // Track expanded row ID
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null); // Store the position of the floating div
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // Correct query using Drizzle ORM to order by ID in descending order
        {/*@ts-ignore*/ }
        const result = await db
          .select()
          .from(AIOutput)
          .orderBy(desc(AIOutput.id)); // Order by ID in descending order

        console.log('Fetched data:', result); // Debugging - Check the fetched data

        // Convert `created_at` to a string
        const formattedResult: HistoryItem[] = result.map((item) => ({
          id: item.id,
          FormData: item.FormData,
          templateSlug: item.templateSlug,
          aiResponse: item.aiResponse ?? '', // Default aiResponse to empty string if null
          created_at: item.created_at
            ? new Date(item.created_at as Date).toISOString()
            : '', // Convert Date to ISO string
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

  // Detect clicks outside the popup and close the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setExpandedRow(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleShowMore = (id: number, event: React.MouseEvent<HTMLTableCellElement>) => {
    const cell = event.currentTarget;
    const rect = cell.getBoundingClientRect();
    setPopupPosition({ top: rect.top, left: rect.left });
    setExpandedRow(id);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="ml-0 md:ml-48 lg:ml-64 px-3 py-5 md:p-5 bg-purple-50">
      <h1>History</h1>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <table className="min-w-full text-center text-xs md:text-base table-spacing table-cell-padding table-row-border">
          <thead>
            <tr className="bg-[#E5E5E5]">
              <th className="w-32 h-12">ID</th>
              <th className="w-64 h-12">Form Data</th>
              <th className="w-64 h-12">AI Response</th>
              <th className="w-40 h-12">Created At</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border-b border-zinc-600 w-32 h-12">{item.id}</td>
                <td className="px-4 text-left py-2 border-b border-zinc-600 w-64 h-12">{extractPrimaryContent(item.FormData)}</td>
                <td
                  className="px-4  border-b border-zinc-600 relative min-w-[150px] h-[50px] sm:h-[100px] ai-response-cell cursor-pointer"
                  onClick={(event) => handleShowMore(item.id, event)}
                >
                  <div className="text-left">
                    {item.aiResponse && item.aiResponse.length > 100
                      ? `${item.aiResponse.slice(0, 130)}... `
                      : item.aiResponse || 'No response available'}
                    {item.aiResponse && item.aiResponse.length > 100 && (
                      <span className="text-blue-500 cursor-pointer"> Show more</span>
                    )}
                  </div>
                </td>
                <td className="px-4  py-2 border-b border-zinc-600 w-40 h-12">
                  {item.created_at ? new Date(item.created_at).toLocaleDateString() : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Floating div for full response */}
      {expandedRow !== null && popupPosition && (
        <div
          ref={popupRef}
          style={{ 
            position: 'absolute', 
            top: popupPosition.top + 40, 
            left: popupPosition.left + 5,
            zIndex: 1000,
            width: '100%', // Set width as needed
          }}
          className="bg-white border p-4 shadow-lg auto-height max-w-sm"
        >
          <p>{history.find(item => item.id === expandedRow)?.aiResponse}</p>
          <button
            onClick={() => setExpandedRow(null)}
            className="text-blue-500 mt-2"
          >
            Show less
          </button>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
