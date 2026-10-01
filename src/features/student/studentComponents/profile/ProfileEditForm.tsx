import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Edit3, Save, X, User as UserIcon, Mail } from 'lucide-react';
import { StudentProfileEditFormProps } from '@/src/types';

export function ProfileEditForm({profile, isEditing, formData, isPending, setFormData, onEdit, onSubmit, onCancel}: StudentProfileEditFormProps) {
  return (
    <div className="bg-white border border-surface-300 rounded-[1.75rem] px-6 sm:px-8 py-7 shadow-[0_4px_24px_rgba(45,31,88,0.06)]">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
            <Edit3 className="w-5 h-5 text-brand-600" />
          </div>
          <h2 className="font-black text-brand-900 text-lg">Edit Profile Information</h2>
        </div>

        {!isEditing && (
          <Button
            onClick={onEdit}
            className="rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold shrink-0">
            <Edit3 className="w-4 h-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
                Full Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl border-surface-400 bg-surface-100 text-brand-900 focus:ring-brand-500 focus:border-brand-500"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl border-surface-400 bg-surface-100 text-brand-900 focus:ring-brand-500 focus:border-brand-500"
                required/>
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onCancel} className="rounded-full border-surface-400 text-brand-700 hover:bg-surface-200 font-bold">
              <X className="w-4 h-4 mr-2" /> Cancel
            </Button>
            <Button type="submit" className="rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold shadow-lg shadow-brand-600/20" isLoading={isPending}>
              <Save className="w-4 h-4 mr-2" /> Save Changes
            </Button>
          </div>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-surface-200/60 p-4">
            <div className="flex items-center gap-1.5 text-brand-700/50 mb-1">
              <UserIcon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-wide">Full Name</span>
            </div>
            <p className="font-bold text-brand-900">{profile?.name}</p>
          </div>
          <div className="rounded-2xl bg-surface-200/60 p-4">
            <div className="flex items-center gap-1.5 text-brand-700/50 mb-1">
              <Mail className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold uppercase tracking-wide">Email Address</span>
            </div>
            <p className="font-bold text-brand-900 truncate">{profile?.email}</p>
          </div>
        </div>
      )}
    </div>
  );
}
