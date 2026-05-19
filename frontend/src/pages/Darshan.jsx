import { useState } from "react";
const user = JSON.parse(localStorage.getItem("user"));

const slotsData = [
  { time: "08:00 – 09:00", crowd: "LOW" },
  { time: "09:00 – 10:00", crowd: "MED" },
  { time: "10:00 – 11:00", crowd: "HIGH" },
];

const crowdColor = (crowd) => {
  if (crowd === "LOW") return "bg-green-100 text-green-700";
  if (crowd === "MED") return "bg-yellow-100 text-yellow-700";
  return "bg-red-100 text-red-700";
};

const Darshan = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  
const bookSlot = async () => {
  if (!selectedSlot) {
    alert("Please select a slot");
    return;
  }

  try {
    const selected = slotsData.find(
      (slot) => slot.time === selectedSlot
    );

    const res = await fetch("http://localhost:5000/api/darshan/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pilgrimId: user._id,
        slotTime: selected.time,
        crowdStatus: selected.crowd,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Darshan slot booked successfully 🙏");
    } else {
      alert("Booking failed");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

  return (
    <div className="min-h-screen bg-orange-50 p-4">
      
      {/* Header */}
      <h1 className="text-2xl font-bold text-orange-700 mb-4">
        Darshan Slots
      </h1>

      {/* Slots */}
      <div className="space-y-3">
        {slotsData.map((slot, index) => (
          <label
            key={index}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow cursor-pointer"
          >
            <div>
              <p className="font-semibold">{slot.time}</p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${crowdColor(
                  slot.crowd
                )}`}
              >
                {slot.crowd}
              </span>

              <input
                type="radio"
                name="slot"
                value={slot.time}
                onChange={() => setSelectedSlot(slot.time)}
              />
            </div>
          </label>
        ))}
      </div>

      {/* Book Button */}
      <button
        onClick={bookSlot}
        className="w-full mt-6 bg-orange-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-orange-700 transition"
      >
        Book Slot
      </button>
    </div>
  );
};

export default Darshan;
