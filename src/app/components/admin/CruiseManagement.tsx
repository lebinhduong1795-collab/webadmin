import { useState } from 'react';
import { Plus, Pencil, Trash2, Search, X } from 'lucide-react';

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

interface CruiseManagementProps {
  cruises: Cruise[];
  onAdd: (cruise: Omit<Cruise, 'id'>) => void;
  onUpdate: (id: number, cruise: Omit<Cruise, 'id'>) => void;
  onDelete: (id: number) => void;
}

export function CruiseManagement({ cruises, onAdd, onUpdate, onDelete }: CruiseManagementProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingCruise, setEditingCruise] = useState<Cruise | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    duration: '2N-1Đ',
    location: 'Hạ Long',
    date: '',
    price: '',
    priceNumber: 0,
    badge: '',
    starRating: 4.5,
    reviewCount: 0,
    facilities: [] as string[],
  });

  const handleOpenForm = (cruise?: Cruise) => {
    if (cruise) {
      setEditingCruise(cruise);
      setFormData({
        name: cruise.name,
        image: cruise.image,
        duration: cruise.duration,
        location: cruise.location,
        date: cruise.date,
        price: cruise.price,
        priceNumber: cruise.priceNumber,
        badge: cruise.badge,
        starRating: 4.5,
        reviewCount: 0,
        facilities: cruise.facilities,
      });
    } else {
      setEditingCruise(null);
      setFormData({
        name: '',
        image: '',
        duration: '2N-1Đ',
        location: 'Hạ Long',
        date: '',
        price: '',
        priceNumber: 0,
        badge: '',
        starRating: 4.5,
        reviewCount: 0,
        facilities: [],
      });
    }
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCruise(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCruise) {
      onUpdate(editingCruise.id, formData);
    } else {
      onAdd(formData);
    }
    handleCloseForm();
  };

  const handleDelete = (id: number) => {
    onDelete(id);
    setShowDeleteConfirm(null);
  };

  const toggleFacility = (facility: string) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  const filteredCruises = cruises.filter(cruise =>
    cruise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cruise.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-2">Quản lý Du thuyền</h1>
          <p className="text-gray-600">Thêm, sửa, xóa thông tin du thuyền</p>
        </div>
        <button
          onClick={() => handleOpenForm()}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Thêm Du thuyền
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Tìm kiếm theo tên hoặc địa điểm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Tên Du thuyền</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Địa điểm</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Thời gian</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Giá</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Đánh giá</th>
                <th className="px-6 py-3 text-left text-xs text-gray-500 uppercase">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCruises.map((cruise) => (
                <tr key={cruise.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm">#{cruise.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={cruise.image} alt={cruise.name} className="w-12 h-12 rounded-lg object-cover" />
                      <span className="text-sm">{cruise.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm">{cruise.location}</td>
                  <td className="px-6 py-4 text-sm">{cruise.duration}</td>
                  <td className="px-6 py-4 text-sm">{cruise.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{cruise.starRating}</span>
                      <span className="text-gray-400">({cruise.reviewCount})</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleOpenForm(cruise)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Sửa"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(cruise.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Xóa"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCruises.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <p>Không tìm thấy du thuyền nào</p>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl">
                {editingCruise ? 'Sửa Du thuyền' : 'Thêm Du thuyền Mới'}
              </h2>
              <button onClick={handleCloseForm} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Tên Du thuyền *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="VD: Du thuyền Paradise Elegance"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">URL Hình ảnh *</label>
                  <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Địa điểm *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option value="Hạ Long">Hạ Long</option>
                    <option value="Lan Hạ">Lan Hạ</option>
                    <option value="Bái Tử Long">Bái Tử Long</option>
                    <option value="Cát Bà">Cát Bà</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Thời gian *</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option value="2N-1Đ">2N-1Đ</option>
                    <option value="3N-2Đ">3N-2Đ</option>
                    <option value="4N-3Đ">4N-3Đ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Ngày khởi hành *</label>
                  <input
                    type="text"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="VD: 25/6 - 27/6"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Giá (text) *</label>
                  <input
                    type="text"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="VD: 3.500.000đ"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Giá (số) *</label>
                  <input
                    type="number"
                    required
                    value={formData.priceNumber}
                    onChange={(e) => setFormData({ ...formData, priceNumber: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="VD: 3500000"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Badge đánh giá *</label>
                  <input
                    type="text"
                    required
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="VD: 9.2 Xuất sắc (105)"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm mb-2">Tiện ích</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['wifi', 'pool', 'spa', 'gym', 'restaurant', 'karaoke'].map((facility) => (
                      <label key={facility} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.facilities.includes(facility)}
                          onChange={() => toggleFacility(facility)}
                          className="w-4 h-4 text-teal-500 rounded focus:ring-teal-400"
                        />
                        <span className="text-sm capitalize">{facility}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-8">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  {editingCruise ? 'Cập nhật' : 'Thêm mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl mb-4">Xác nhận xóa</h3>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn xóa du thuyền này? Hành động này không thể hoàn tác.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
