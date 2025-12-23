import { useState } from 'react';
import { AdminSidebar } from './components/admin/AdminSidebar';
import { Dashboard } from './components/admin/Dashboard';
import { CruiseManagement } from './components/admin/CruiseManagement';
import { BlogManagement } from './components/admin/BlogManagement';
import { UserManagement } from './components/admin/UserManagement';
import { Settings } from './components/admin/Settings';


interface Cruise {
  id: number;
  name: string;
  image: string;
  duration: string;
  location: string;
  date: string;
  price: string;
  priceNumber: number;
  badge: string;
  starRating: number;
  reviewCount: number;
  facilities: string[];
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  joinDate: string;
  status: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [adminName, setAdminName] = useState('Admin');
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  // Cruises state
  const [cruises, setCruises] = useState<Cruise[]>([
    {
      id: 1,
      name: 'Du thuyền Heritage Bình Chuẩn Cát Bà',
      image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2N-1Đ',
      location: 'Hạ Long',
      date: '25/6 - 27/6',
      price: '530.000đ',
      priceNumber: 530000,
      badge: '8.9 Rất tốt (68)',
      starRating: 4.5,
      reviewCount: 68,
      facilities: ['wifi', 'pool', 'restaurant', 'spa']
    },
    {
      id: 2,
      name: 'Du thuyền Indochine',
      image: 'https://images.unsplash.com/photo-1649872646705-c1c41b1d5f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2N-1Đ',
      location: 'Hạ Long',
      date: '25/6 - 27/6',
      price: '1.230.000đ',
      priceNumber: 1230000,
      badge: '8.9 Rất tốt (68)',
      starRating: 4.5,
      reviewCount: 68,
      facilities: ['wifi', 'restaurant', 'karaoke']
    },
    {
      id: 3,
      name: 'Du thuyền Le Theatre',
      image: 'https://images.unsplash.com/photo-1719644206665-69afa40ab1b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3N-2Đ',
      location: 'Hạ Long',
      date: '25/6 - 27/6',
      price: '2.780.000đ',
      priceNumber: 2780000,
      badge: '9.0 Tuyệt vời (89)',
      starRating: 4.5,
      reviewCount: 89,
      facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant']
    },
    {
      id: 4,
      name: 'Du thuyền Paradise Elegance',
      image: 'https://images.unsplash.com/photo-1698366427449-a378d22fd17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3N-2Đ',
      location: 'Hạ Long',
      date: '26/6 - 28/6',
      price: '4.150.000đ',
      priceNumber: 4150000,
      badge: '9.3 Xuất sắc (105)',
      starRating: 4.7,
      reviewCount: 105,
      facilities: ['wifi', 'pool', 'spa', 'restaurant']
    },
    {
      id: 5,
      name: 'Du thuyền Royal Palace',
      image: 'https://images.unsplash.com/photo-1678122878191-79b60410779f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGx1eHVyeXxlbnwxfHx8fDE3NjYwODIxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3N-2Đ',
      location: 'Hạ Long',
      date: '29/6 - 1/7',
      price: '4.800.000đ',
      priceNumber: 4800000,
      badge: '9.4 Xuất sắc (115)',
      starRating: 4.7,
      reviewCount: 115,
      facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
    },
    {
      id: 6,
      name: 'Du thuyền Capella',
      image: 'https://images.unsplash.com/photo-1651173801841-c648ae6c2471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3VpdGUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjYwODI2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2N-1Đ',
      location: 'Lan Hạ',
      date: '27/6 - 29/6',
      price: '3.500.000đ',
      priceNumber: 3500000,
      badge: '9.1 Xuất sắc (92)',
      starRating: 4.6,
      reviewCount: 92,
      facilities: ['wifi', 'pool', 'spa', 'restaurant']
    },
    {
      id: 7,
      name: 'Du thuyền Stellar',
      image: 'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '3N-2Đ',
      location: 'Bái Tử Long',
      date: '1/7 - 3/7',
      price: '5.100.000đ',
      priceNumber: 5100000,
      badge: '9.5 Tuyệt vời (128)',
      starRating: 4.8,
      reviewCount: 128,
      facilities: ['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke']
    },
    {
      id: 8,
      name: 'Du thuyền V Legend',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      duration: '2N-1Đ',
      location: 'Lan Hạ',
      date: '28/6 - 30/6',
      price: '2.200.000đ',
      priceNumber: 2200000,
      badge: '8.8 Rất tốt (75)',
      starRating: 4.4,
      reviewCount: 75,
      facilities: ['wifi', 'restaurant', 'karaoke']
    },
  ]);

  // Blog posts state
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: '10 điều cần biết trước khi đặt du thuyền Hạ Long',
      excerpt: 'Hướng dẫn chi tiết giúp bạn lựa chọn du thuyền phù hợp và tiết kiệm chi phí cho chuyến đi của mình.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mẹo du lịch',
      author: 'Nguyễn Văn A',
      date: '15/12/2024',
      readTime: '5 phút đọc',
      tags: ['Du lịch', 'Hạ Long', 'Mẹo hay']
    },
    {
      id: 2,
      title: 'Khám phá vẻ đẹp hoang sơ của Vịnh Lan Hạ',
      excerpt: 'Vịnh Lan Hạ - điểm đến mới nổi với cảnh quan thiên nhiên tuyệt đẹp, ít du khách qua lại.',
      image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW4lMjBoYSUyMGJheXxlbnwxfHx8fDE3MzQ4OTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Điểm đến',
      author: 'Trần Thị B',
      date: '12/12/2024',
      readTime: '7 phút đọc',
      tags: ['Lan Hạ', 'Khám phá', 'Thiên nhiên']
    },
    {
      id: 3,
      title: 'Trải nghiệm ẩm thực trên du thuyền 5 sao',
      excerpt: 'Thưởng thức các món ăn hải sản tươi ngon được chế biến bởi đầu bếp chuyên nghiệp ngay trên du thuyền.',
      image: 'https://images.unsplash.com/photo-1590761397801-2ff9a6461c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwZGVjayUyMHBvb2x8ZW58MXx8fHwxNzY2MDE1MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Trải nghiệm',
      author: 'Lê Văn C',
      date: '10/12/2024',
      readTime: '6 phút đọc',
      tags: ['Ẩm thực', 'Du thuyền', 'Sang trọng']
    },
    {
      id: 4,
      title: 'Hướng dẫn đóng gói hành lý du lịch biển hiệu quả',
      excerpt: 'Những mẹo đóng gói thông minh để tiết kiệm không gian và đảm bảo tất cả đồ dùng lên tàu an toàn.',
      image: 'https://images.unsplash.com/photo-1559832206-6643d28e04b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdWdnYWdlJTIwdHJhdmVsfGVufDF8fHx8MTc2NjA4MjE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mẹo du lịch',
      author: 'Phạm Thị D',
      date: '8/12/2024',
      readTime: '4 phút đọc',
      tags: ['Hành lý', 'Mẹo hay', 'Chuẩn bị']
    },
    {
      id: 5,
      title: 'Top 5 hoạt động thú vị trên du thuyền bạn không nên bỏ lỡ',
      excerpt: 'Danh sách các hoạt động vui nhộn và thư giãn mà bạn có thể tham gia trên du thuyền.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzdW5zZXR8ZW58MXx8fHwxNzY2MDgyMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Trải nghiệm',
      author: 'Hoàng Văn E',
      date: '5/12/2024',
      readTime: '8 phút đọc',
      tags: ['Hoạt động', 'Giải trí', 'Du thuyền']
    },
    {
      id: 6,
      title: 'Vịnh Bái Tử Long - Điểm đến bí ẩn của du lịch Việt Nam',
      excerpt: 'Khám phá vẻ đẹp hoang dã của Bái Tử Long với những hang động kỳ lạ và cảnh quan độc đáo.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWV0bmFtJTIwYmF5fGVufDF8fHx8MTczNDg5MjAyNHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Điểm đến',
      author: 'Nguyễn Văn F',
      date: '2/12/2024',
      readTime: '9 phút đọc',
      tags: ['Bái Tử Long', 'Khám phá', 'Thiên nhiên']
    },
    {
      id: 7,
      title: 'Cách chọn mùa đẹp nhất để du lịch vịnh Hạ Long',
      excerpt: 'So sánh các mùa du lịch khác nhau và tìm thời điểm tối ưu để có trải nghiệm tuyệt vời nhất.',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWxvbmclMjBiYXl8ZW58MXx8fHwxNzM0ODkyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Mẹo du lịch',
      author: 'Lý Thị G',
      date: '28/11/2024',
      readTime: '6 phút đọc',
      tags: ['Mùa du lịch', 'Thời tiết', 'Kế hoạch']
    },
  ]);

  // Users state
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      email: 'vana@email.com',
      phone: '0912345678',
      address: '123 Đường ABC, Hà Nội',
      role: 'Khách hàng',
      joinDate: '2024-01-15',
      status: 'Hoạt động'
    },
    {
      id: 2,
      name: 'Trần Thị B',
      email: 'thib@email.com',
      phone: '0987654321',
      address: '456 Đường XYZ, Hồ Chí Minh',
      role: 'Khách hàng',
      joinDate: '2024-02-20',
      status: 'Hoạt động'
    },
    {
      id: 3,
      name: 'Lê Văn C',
      email: 'vanc@email.com',
      phone: '0909999999',
      address: '789 Đường DEF, Đà Nẵng',
      role: 'Admin',
      joinDate: '2023-12-01',
      status: 'Hoạt động'
    },
    {
      id: 4,
      name: 'Phạm Thị D',
      email: 'thid@email.com',
      phone: '0933333333',
      address: '321 Đường GHI, Hải Phòng',
      role: 'Khách hàng',
      joinDate: '2024-03-10',
      status: 'Hoạt động'
    },
    {
      id: 5,
      name: 'Hoàng Văn E',
      email: 'vane@email.com',
      phone: '0944444444',
      address: '654 Đường JKL, Cần Thơ',
      role: 'Khách hàng',
      joinDate: '2024-04-05',
      status: 'Vô hiệu hóa'
    },
    {
      id: 6,
      name: 'Lý Thị F',
      email: 'thif@email.com',
      phone: '0955555555',
      address: '987 Đường MNO, Quy Nhơn',
      role: 'Moderator',
      joinDate: '2024-01-20',
      status: 'Hoạt động'
    },
    {
      id: 7,
      name: 'Võ Văn G',
      email: 'vang@email.com',
      phone: '0966666666',
      address: '135 Đường PQR, Nha Trang',
      role: 'Khách hàng',
      joinDate: '2024-05-12',
      status: 'Hoạt động'
    },
    {
      id: 8,
      name: 'Bùi Thị H',
      email: 'thih@email.com',
      phone: '0977777777',
      address: '246 Đường STU, Vinh',
      role: 'Khách hàng',
      joinDate: '2024-02-28',
      status: 'Hoạt động'
    },
    {
      id: 9,
      name: 'Đỗ Văn I',
      email: 'vani@email.com',
      phone: '0988888888',
      address: '357 Đường VWX, Hue',
      role: 'Khách hàng',
      joinDate: '2024-06-01',
      status: 'Hoạt động'
    },
  ]);

  // CRUD handlers for Cruises
  const handleAddCruise = (cruise: Omit<Cruise, 'id'>) => {
    const newId = Math.max(...cruises.map(c => c.id), 0) + 1;
    setCruises([...cruises, { ...cruise, id: newId }]);
  };

  const handleUpdateCruise = (id: number, cruise: Omit<Cruise, 'id'>) => {
    setCruises(cruises.map(c => c.id === id ? { ...cruise, id } : c));
  };

  const handleDeleteCruise = (id: number) => {
    setCruises(cruises.filter(c => c.id !== id));
  };

  // CRUD handlers for Blog Posts
  const handleAddBlog = (blog: Omit<BlogPost, 'id'>) => {
    const newId = Math.max(...blogPosts.map(b => b.id), 0) + 1;
    setBlogPosts([...blogPosts, { ...blog, id: newId }]);
  };

  const handleUpdateBlog = (id: number, blog: Omit<BlogPost, 'id'>) => {
    setBlogPosts(blogPosts.map(b => b.id === id ? { ...blog, id } : b));
  };

  const handleDeleteBlog = (id: number) => {
    setBlogPosts(blogPosts.filter(b => b.id !== id));
  };

  // CRUD handlers for Users
  const handleAddUser = (user: Omit<User, 'id'>) => {
    const newId = Math.max(...users.map(u => u.id), 0) + 1;
    setUsers([...users, { ...user, id: newId }]);
  };

  const handleUpdateUser = (id: number, user: Omit<User, 'id'>) => {
    setUsers(users.map(u => u.id === id ? { ...user, id } : u));
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  // Auth handlers
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setAdminName(loginForm.email.split('@')[0]);
      setLoginForm({ email: '', password: '' });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginForm({ email: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-2 text-teal-600">mjxHạ Admin</h1>
            <p className="text-gray-600">Đăng nhập để tiếp tục</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                required
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Mật khẩu</label>
              <input
                type="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg transition-colors font-medium"
            >
              Đăng nhập
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Demo: Nhập bất kỳ email và mật khẩu nào để đăng nhập
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
        adminName={adminName}
      />
      
      <main className="flex-1 overflow-auto">
        {activeSection === 'dashboard' && (
          <Dashboard cruisesCount={cruises.length} blogsCount={blogPosts.length} />
        )}
        
        {activeSection === 'cruises' && (
          <CruiseManagement
            cruises={cruises}
            onAdd={handleAddCruise}
            onUpdate={handleUpdateCruise}
            onDelete={handleDeleteCruise}
          />
        )}
        
        {activeSection === 'blogs' && (
          <BlogManagement
            blogs={blogPosts}
            onAdd={handleAddBlog}
            onUpdate={handleUpdateBlog}
            onDelete={handleDeleteBlog}
          />
        )}
        
        {activeSection === 'users' && (
          <UserManagement
            users={users}
            onAdd={handleAddUser}
            onUpdate={handleUpdateUser}
            onDelete={handleDeleteUser}
          />
        )}
        
        {activeSection === 'settings' && (
          <Settings />
        )}
      </main>
    </div>
  );
}
