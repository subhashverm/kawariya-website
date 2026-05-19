import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    mobile: "",
    emergency: "",
    bloodGroup: "",
 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/pilgrims/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful");
      navigate("/login");
    } else {
      alert(data.error || "Something went wrong");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};



  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">
        
        <h2 className="text-2xl font-bold text-orange-700 mb-4 text-center">
          Pilgrim Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            required
           
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            maxLength={10}
            required
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="tel"
            name="emergency"
            placeholder="Emergency Contact Number"
             maxLength={10}
            required
            value={formData.emergency}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <select
            name="bloodGroup"
            required
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">Select Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
