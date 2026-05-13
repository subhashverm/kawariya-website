import { useEffect, useState } from "react";

const RestFacilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/facilities")
      .then(res => res.json())
      .then(data => {
        const restPoints = data.filter(f => f.type === "Rest");
        setFacilities(restPoints);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-2xl font-bold mb-6 text-orange-700">
        🛏️ Rest Points
      </h1>

      {facilities.length === 0 ? (
        <p>No Rest Points Available</p>
      ) : (
        facilities.map(f => (
          <div
            key={f._id}
            className="bg-white shadow rounded-xl p-4 mb-4"
          >
            <h2 className="font-bold text-lg">{f.name}</h2>
            <p>📍 {f.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RestFacilities;
