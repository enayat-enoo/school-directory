import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/schools`)
      .then(res => setSchools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Schools Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {schools.map((school) => (
          <div key={school.id} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition">
            <img
              src={school.image}
              alt={school.name}
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{school.name}</h3>
            <p className="text-gray-600">{school.address}</p>
            <p className="text-sm text-gray-500">{school.city}, {school.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowSchools;
