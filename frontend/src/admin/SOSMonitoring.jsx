import { useState } from "react";
import { useEffect } from "react";

const SOSMonitoring = () => {
const [alerts, setAlerts] = useState([]);
useEffect(() => {
  fetch("https://kawariya-website-backend.onrender.com/api/sos")
    .then(res => res.json())
    .then(data => setAlerts(data));
}, []);

 const resolveSOS = async (id) => {
  await fetch(`https://kawariya-website-backend.onrender.com/api/sos/${id}`, {
    method: "PUT",
  });

  setAlerts(alerts.map(alert =>
    alert._id === id ? { ...alert, status: "RESOLVED" } : alert
  ));
};


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        SOS Alerts
      </h1>

      {/* SOS Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {alerts.map((alert) => (
              <tr key={alert.id} className="border-t">
                <td className="p-3">{alert.name}</td>
                <td className="p-3">{alert.location}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      alert.status === "OPEN"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>
                <td className="p-3">
                  {alert.status === "OPEN" && (
                    <button
                      onClick={() => resolveSOS(alert.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                    >
                      Resolve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SOSMonitoring;
