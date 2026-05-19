import { useEffect, useState } from "react";

const SOS = () => {
  const [location, setLocation] = useState("Detecting...");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation("Location not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude.toFixed(4)}, Lng: ${longitude.toFixed(4)}`);
      },
      () => {
        setLocation("Unable to fetch location");
      }
    );
  }, []);

  const triggerSOS = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/sos/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Pilgrim User",
        location: location,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("SOS Sent Successfully");
      setSent(true);
    } else {
      alert("Failed to send SOS");
    }

  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};


  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-4 text-center">
      
      <h2 className="text-3xl font-bold text-red-600">
          Emergency SOS
        </h2>

        <p className="mt-4 text-gray-600">
          Press the button below if you are in danger or need immediate help.
        </p>


      {/* SOS Button */}
      <button
        onClick={triggerSOS}
        className="bg-red-600 text-white  mt-4 w-40 h-20 rounded-full text-2xl font-bold shadow-lg hover:bg-red-700 transition animate-pulse "
      >
        SOS
      </button>

      {/* Info */}
      <div className="mt-6 text-gray-700 space-y-2">
        <p>
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Emergency Contact:</strong> Registered Contact
        </p>
      </div>

      {sent && (
        <p className="mt-4 text-green-700 font-semibold">
          ✔ Emergency alert sent successfully
        </p>
      )}
    </div>
  );
};

export default SOS;
