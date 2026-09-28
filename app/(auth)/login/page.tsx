import { AuthLeftPanel } from '@/src/components/auth/AuthLeftPanel';
import { LoginLeftContent } from '@/src/components/auth/LoginLeftContent';
import { LoginForm } from '@/src/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-[#F5F0FF]">
      <AuthLeftPanel>
        <LoginLeftContent />
      </AuthLeftPanel>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <LoginForm />
      </div>
    </div>
  );
}
