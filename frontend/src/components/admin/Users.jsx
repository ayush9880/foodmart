import { useEffect, useState } from "react";
import AdminLayout from "../AdminLayout";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/user/allUsers");
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      } else {
        console.error("Failed to fetch users");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.contact && user.contact.toString().includes(searchTerm))
  );

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-4">User List</h2>

      {/* ✅ Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name, email or contact..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-sm border px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 border-b font-medium">Image</th>
                <th className="px-6 py-3 border-b font-medium">Name</th>
                <th className="px-6 py-3 border-b font-medium">Email</th>
                <th className="px-6 py-3 border-b font-medium">Contact</th>
                <th className="px-6 py-3 border-b font-medium">City</th>
                <th className="px-6 py-3 border-b font-medium">State</th>
                <th className="px-6 py-3 border-b font-medium">Pincode</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-6">
                    No users found.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b">
                       {user.image?.path ? (
                        <img
                          src={user.image.path}
                          alt={user.name}
                          className="h-12 w-12 rounded object-cover border"
                        />
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="px-6 py-4 border-b">{user.name}</td>
                    <td className="px-6 py-4 border-b">{user.email}</td>
                    <td className="px-6 py-4 border-b">{user.contact}</td>
                    <td className="px-6 py-4 border-b">{user.address?.city || "N/A"}</td>
                    <td className="px-6 py-4 border-b">{user.address?.state || "N/A"}</td>
                    <td className="px-6 py-4 border-b">{user.address?.pincode || "N/A"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
