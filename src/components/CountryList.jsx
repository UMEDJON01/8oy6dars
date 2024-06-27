import React, { useEffect, useState } from "react";

function CountryList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Davlatlar Ro'yxati
      </h1>
      <ul className="list-disc pl-8">
        {countries.map((country) => (
          <li key={country.cca3} className="mb-2">
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
