import { AuthLeftPanel } from '@/src/components/auth/AuthLeftPanel';
import { RegisterLeftContent } from '@/src/components/auth/RegisterLeftContent';
import { RegisterForm } from '@/src/components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex relative overflow-hidden bg-[#F5F0FF]">
      <AuthLeftPanel>
        <RegisterLeftContent />
      </AuthLeftPanel>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
        <RegisterForm />
      </div>
    </div>
  );
}
