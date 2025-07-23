import AdminNavbar from "./admin/AdminNavbar";
import AdminSidebar from "./admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
