'use client';

import { useAuthStore } from '@/src/store/useAuthStore';
import {Card, CardContent, CardHeader,CardTitle} from '@/src/components/ui/Card';
import { AccessDenied } from '@/src/components/ui/AccessDenied'
import { useAdminUsers } from '@/src/features/admin/hooks/useAdminUsers';
import UsersTable from '@/src/features/admin/components/users/UsersTable';

export default function AdminUsersPage() {
  const { user } = useAuthStore();
  const {users,isLoading,toggleUserStatus,isUpdating} = useAdminUsers();

  if (!user || user.role !== 'ADMIN') {
    return <AccessDenied role="ADMIN" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="mb-8 text-4xl md:text-5xl font-black text-brand-800 text-center">
          User Management
        </h1>

      <Card className="shadow-md border-slate-200">
        <CardHeader className="bg-slate-50 border-b border-slate-200">
          <CardTitle className="text-xl p-7">
            Platform Users
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          {isLoading ? (
            <div className="p-10 text-center animate-pulse">
              Loading users...
            </div>
          ) : (
            <UsersTable
              users={users}
              isLoading={isUpdating}
              onToggle={toggleUserStatus}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
}