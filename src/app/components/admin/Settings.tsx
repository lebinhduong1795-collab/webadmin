import { useState } from 'react';
import { Save, Bell, Lock, Globe, Users, FileText } from 'lucide-react';

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: 'VivuCNWEB',
    siteDescription: 'Nền tảng đặt du thuyền uy tín hàng đầu',
    contactEmail: 'vivucnweb@gmail.com',
    supportPhone: '1900-1234',
    address: 'Hà Nội, Việt Nam',
    notificationsEmail: true,
    notificationsSMS: false,
    notificationsSystem: true,
    privacyPolicy: true,
    termsOfService: true,
    maintenanceMode: false,
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: any) => {
    setSettings({
      ...settings,
      [field]: value,
    });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Cài đặt hệ thống</h1>
        <p className="text-gray-600">Quản lý cấu hình và tùy chỉnh hệ thống</p>
      </div>

      {saved && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          ✓ Cài đặt đã được lưu thành công!
        </div>
      )}

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-teal-500" />
            <h2 className="text-xl">Cài đặt chung</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Tên trang web *</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Mô tả trang web</label>
              <textarea
                value={settings.siteDescription}
                onChange={(e) => handleChange('siteDescription', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email liên hệ</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Số điện thoại hỗ trợ</label>
              <input
                type="tel"
                value={settings.supportPhone}
                onChange={(e) => handleChange('supportPhone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Địa chỉ</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="w-5 h-5 text-teal-500" />
            <h2 className="text-xl">Cài đặt thông báo</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.notificationsEmail}
                onChange={(e) => handleChange('notificationsEmail', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Thông báo qua Email
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.notificationsSMS}
                onChange={(e) => handleChange('notificationsSMS', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Thông báo qua SMS
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.notificationsSystem}
                onChange={(e) => handleChange('notificationsSystem', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Thông báo hệ thống
              </label>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-teal-500" />
            <h2 className="text-xl">Cài đặt bảo mật</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.privacyPolicy}
                onChange={(e) => handleChange('privacyPolicy', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Bật chính sách bảo mật
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.termsOfService}
                onChange={(e) => handleChange('termsOfService', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Bật điều khoản dịch vụ
              </label>
            </div>

            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={settings.maintenanceMode}
                onChange={(e) => handleChange('maintenanceMode', e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <label className="text-sm cursor-pointer">
                Chế độ bảo trì
              </label>
            </div>
          </div>
        </div>

        {/* Database & Backup */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-teal-500" />
            <h2 className="text-xl">Sao lưu & Khôi phục</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
              Sao lưu dữ liệu
            </button>
            <button className="w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors">
              Khôi phục từ bản sao lưu
            </button>
            <button className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
              Xóa tất cả dữ liệu
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="flex-1 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
          >
            <Save className="w-5 h-5" />
            Lưu cài đặt
          </button>
        </div>
      </div>
    </div>
  );
}
