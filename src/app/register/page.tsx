import { headers, cookies } from 'next/headers';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Join Memory Companion
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Start preserving your precious memories today
          </p>
        </div>
        {/* Auth form will be added once Supabase config is merged */}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-center text-gray-600">Registration coming soon!</p>
        </div>
      </div>
    </div>
  );
}