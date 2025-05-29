'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RequestsTable from '@/components/RequestsTable';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 5000, // Refetch every 5 seconds
      refetchOnWindowFocus: true,
    },
  },
});

export default function DashboardPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-blue-900">
                  Travel Studio
                </h1>
                <p className="text-blue-600 mt-1">Guest Request Dashboard</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">Hotel Management System</p>
                <p className="text-xs text-blue-500">Real-time Updates</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-lg border border-blue-100 overflow-hidden">
            <div className="px-6 py-4 bg-blue-600 text-white">
              <h2 className="text-xl font-semibold">Pending Guest Requests</h2>
              <p className="text-blue-100 text-sm">WhatsApp requests from hotel guests</p>
            </div>
            
            <div className="p-6">
              <RequestsTable />
            </div>
          </div>
        </main>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}