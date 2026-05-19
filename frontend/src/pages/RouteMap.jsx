import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
};

const RouteMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [facilities, setFacilities] = useState([]);
  const [userAddress, setUserAddress] = useState("");
useEffect(() => {
  if (userLocation) {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLocation[0]}&lon=${userLocation[1]}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserAddress(data.display_name);
      })
      .catch((err) => console.log(err));
  }
}, [userLocation]);


  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation([
          pos.coords.latitude,
          pos.coords.longitude
        ]);
      },
      () => alert("Location permission denied")
    );
  }, []);

  // Fetch facilities
  useEffect(() => {
    fetch("http://localhost:5000/api/facilities")
      .then((res) => res.json())
      .then((data) => setFacilities(data))
      .catch((err) => console.log(err));
  }, []);

  if (!userLocation) return <h2>Loading Map...</h2>;

  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* User Marker */}
      <Marker position={userLocation}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Facilities + Polyline */}
      {facilities.map((facility, index) => {
        const facilityPos = [
          facility.latitude,
          facility.longitude
        ];
        const distance = getDistance(
    userLocation[0],
    userLocation[1],
    facility.latitude,
    facility.longitude
  );


        return (
        <div key={index}>
      <Marker position={facilityPos}>
        <Popup>
          <b>{facility.name}</b>
          <br />
          Type: {facility.type}
          <br />
          Location: {facility.location}
          <br />
          Distance: {distance} KM
          <br />
          Contact: {facility.contact || "N/A"}
        </Popup>
      </Marker>

      <Polyline
        positions={[userLocation, facilityPos]}
        pathOptions={{ color: "orange", weight: 3 }}
      />
    </div>
        );
      })}
    </MapContainer>
  );
};

export default RouteMap;
