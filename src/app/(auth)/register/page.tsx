import { headers, cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/config';
import { AuthForm } from '../components/auth-form';

export default async function RegisterPage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: { session }} = await supabase.auth.getSession();

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
        <AuthForm view="sign-up" />
      </div>
    </div>
  );
}