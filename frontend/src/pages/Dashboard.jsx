import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



const Dashboard = () => {
  const navigate = useNavigate();
const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  setUser(storedUser);
  fetch("http://localhost:5000/api/facilities")
  .then(res => res.json())
  .then(data => {
    setCounts({
      rest: data.filter(f => f.type === "Rest").length,
      medical: data.filter(f => f.type === "Medical").length,
    });
  });
}, []);

  const cards = [
    { title: "Route Map", path: "/map", emoji: "🗺️" },
    { title: "Rest Points", path: "/rest", emoji: "🛏️" },
    { title: "Medical Help", path: "/medical", emoji: "🏥" },
    { title: "Darshan", path: "/darshan", emoji: "🙏" },
  ];

  const [counts, setCounts] = useState({
  rest: 0,
  medical: 0,
});




  return (
    <div className="min-h-screen bg-orange-50 p-4 relative">
      
   <h1 className="text-2xl font-bold text-orange-700 mb-6">
  Welcome, {user?.fullName || "Kanwariya"}
</h1>


      {/* Cards */}
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition"
          >

            <span className="text-4xl mb-2">{card.emoji}</span>
            <p className="text-sm text-gray-500">
  {card.title === "Rest Points" && counts.rest + " Available"}
  {card.title === "Medical Help" && counts.medical + " Available"}
</p>
            <p className="font-semibold text-gray-700">{card.title}</p>
          </div>
        ))}
      </div>

      {/* SOS Button */}
      <button
        onClick={() => navigate("/sos")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-red-700 transition animate-pulse"
      >
        🚨 SOS EMERGENCY
      </button>
    </div>
  );
};

export default Dashboard;
