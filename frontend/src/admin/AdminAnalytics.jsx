import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const AdminAnalytics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://kawariya-website-backend.onrender.com/api/admin/analytics")
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err));
  }, []);

  if (!data) return <p className="p-6">Loading Analytics...</p>;

  // Bar Chart Data
  const barData = [
    { name: "Rest", value: data.restCount },
    { name: "Medical", value: data.medicalCount },
    { name: "SOS", value: data.totalSOS },
    { name: "Bookings", value: data.totalBookings },
  ];

  // Pie Chart Data
  const pieData = [
    { name: "Active", value: data.activeFacilities },
    { name: "Inactive", value: data.totalFacilities - data.activeFacilities },
  ];

  const COLORS = ["#f97316", "#ef4444"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-orange-700">
        📊 Admin Analytics Dashboard
      </h1>

      {/* BAR CHART */}
      <div className="bg-white p-6 rounded-2xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4">Facility Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Active vs Inactive</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminAnalytics;
