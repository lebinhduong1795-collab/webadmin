import { Ship, FileText, Users, TrendingUp, DollarSign, Calendar } from 'lucide-react';

interface DashboardProps {
  cruisesCount: number;
  blogsCount: number;
}

export function Dashboard({ cruisesCount, blogsCount }: DashboardProps) {
  const stats = [
    {
      label: 'Tổng du thuyền',
      value: cruisesCount,
      icon: Ship,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      label: 'Bài viết Blog',
      value: blogsCount,
      icon: FileText,
      color: 'bg-purple-500',
      change: '+8%'
    },
    {
      label: 'Người dùng',
      value: '1,234',
      icon: Users,
      color: 'bg-green-500',
      change: '+23%'
    },
    {
      label: 'Doanh thu tháng',
      value: '245M',
      icon: DollarSign,
      color: 'bg-yellow-500',
      change: '+15%'
    },
  ];

  const recentBookings = [
    { id: 1, cruise: 'Du thuyền Heritage', customer: 'Nguyễn Văn A', date: '23/12/2024', price: '3.500.000đ', status: 'Đã xác nhận' },
    { id: 2, cruise: 'Du thuyền Indochine', customer: 'Trần Thị B', date: '23/12/2024', price: '2.800.000đ', status: 'Chờ xác nhận' },
    { id: 3, cruise: 'Du thuyền Le Theatre', customer: 'Lê Văn C', date: '22/12/2024', price: '4.200.000đ', status: 'Đã xác nhận' },
    { id: 4, cruise: 'Du thuyền Paradise', customer: 'Phạm Thị D', date: '22/12/2024', price: '5.100.000đ', status: 'Đã thanh toán' },
    { id: 5, cruise: 'Du thuyền Royal Palace', customer: 'Hoàng Văn E', date: '21/12/2024', price: '4.800.000đ', status: 'Đã xác nhận' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl mb-2">Dashboard</h1>
        <p className="text-gray-600">Tổng quan hệ thống quản lý du thuyền</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm">{stat.change}</span>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-2xl">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl">Doanh thu theo tháng</h2>
            <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              <option>2024</option>
              <option>2023</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 45, 78, 52, 88, 72, 95, 68, 82, 75, 90, 85].map((height, index) => (
              <div key={index} className="flex-1 bg-teal-500 rounded-t" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>T1</span>
            <span>T2</span>
            <span>T3</span>
            <span>T4</span>
            <span>T5</span>
            <span>T6</span>
            <span>T7</span>
            <span>T8</span>
            <span>T9</span>
            <span>T10</span>
            <span>T11</span>
            <span>T12</span>
          </div>
        </div>

        {/* Popular Cruises */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl mb-6">Du thuyền phổ biến</h2>
          <div className="space-y-4">
            {[
              { name: 'Du thuyền Paradise Elegance', bookings: 245, color: 'bg-blue-500' },
              { name: 'Du thuyền Royal Palace', bookings: 198, color: 'bg-purple-500' },
              { name: 'Du thuyền Heritage', bookings: 167, color: 'bg-green-500' },
              { name: 'Du thuyền Indochine', bookings: 142, color: 'bg-yellow-500' },
              { name: 'Du thuyền Le Theatre', bookings: 128, color: 'bg-red-500' },
            ].map((cruise) => (
              <div key={cruise.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{cruise.name}</span>
                  <span className="text-sm text-gray-600">{cruise.bookings} đặt</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${cruise.color} h-2 rounded-full`} 
                    style={{ width: `${(cruise.bookings / 245) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl">Đặt chỗ gần đây</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Du thuyền</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Khách hàng</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Ngày</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Giá</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">#{booking.id}</td>
                  <td className="px-6 py-4 text-sm">{booking.cruise}</td>
                  <td className="px-6 py-4 text-sm">{booking.customer}</td>
                  <td className="px-6 py-4 text-sm">{booking.date}</td>
                  <td className="px-6 py-4 text-sm">{booking.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      booking.status === 'Đã thanh toán' 
                        ? 'bg-green-100 text-green-700'
                        : booking.status === 'Đã xác nhận'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
