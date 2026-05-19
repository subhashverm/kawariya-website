import { useState } from "react";
import { useEffect } from "react";
import L from "leaflet";
const FacilityManagement = () => {
  const [facilities, setFacilities] = useState([
    { id: 1, type: "Rest", location: "Haridwar", status: "Active" },
    { id: 2, type: "Medical", location: "Rishikesh", status: "Active" },
  ]);

  const [form, setForm] = useState({
  type: "",
  location: "",
  status: "Active",
  latitude: "",
  longitude: "",
});


    // 👇 YAHAN add karna tha
  useEffect(() => {
    fetchFacilities();
  }, []);

  const fetchFacilities = async () => {
    const res = await fetch("http://localhost:5000/api/facilities");
    const data = await res.json();
    setFacilities(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const addFacility = async () => {
  if (!form.type || !form.location || !form.latitude) {
    alert("Please fill all fields and select location on map");
    return;
  }

  await fetch("http://localhost:5000/api/facilities/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  alert("Facility Added Successfully");
};

useEffect(() => {
  const map = L.map("adminMap").setView([29.9457, 78.1642], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  let marker;

  map.on("click", function (e) {
    const { lat, lng } = e.latlng;

    // Update form state
    setForm((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lng,
    }));

    if (marker) {
      map.removeLayer(marker);
    }

    marker = L.marker([lat, lng]).addTo(map);
  });

  return () => {
    map.remove();
  };
}, []);



  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <h1 className="text-2xl font-bold mb-4 text-gray-700">
        Facility Management
      </h1>

      {/* Facility Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto mb-6">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Type</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {facilities.map((f) => (
              <tr key={f.id} className="border-t">
                <td className="p-3">{f.type}</td>
                <td className="p-3">{f.location}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      f.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {f.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Facility */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-3">Add New Facility</h2>

        <div className="space-y-3">
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Type</option>
            <option>Rest</option>
            <option>Medical</option>
          </select>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
 <div className="mt-4">
  <label className="block font-semibold mb-2">
    Click on Map to Select Location
  </label>
  <div id="adminMap" className="h-64 w-full rounded"></div>
</div>

          <button
            onClick={addFacility}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Add Facility
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityManagement;
