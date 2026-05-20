import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const sendOtp = () => {
    if (mobile.length !== 10) {
      alert("Enter valid 10 digit mobile number");
      return;
    }
    setOtpSent(true);
  };
const verifyOtp = async () => {
  if (otp.length !== 4) {
    alert("Invalid OTP");
    return;
  }

  try {
    const res = await fetch("https://kawariya-website-backend.onrender.com/api/pilgrims/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful");

      // Save user in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};


  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-orange-700 text-center mb-6">
          Login
        </h2>

        <div className="space-y-4">
          {/* Mobile Number */}
          <input
            type="tel"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* OTP */}
          {otpSent && (
            <input
              type="number"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-xl text-center tracking-widest text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          )}

          {/* Buttons */}
          {!otpSent ? (
            <button
              onClick={sendOtp}
              className="w-full bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-700 transition"
            >
              Send OTP
            </button>
          ) : (
            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
            >
              Verify & Login
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default Login;
