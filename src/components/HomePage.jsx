import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

function HomePage() {
  return (
    <div
      className="min-h-screen p-8 bg-gray-100 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url("https://picsum.photos/1200/1300")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw", // Set width to full viewport width
        height: "60vh", // Set height to 60% of viewport height
      }}
    >
      <div className="flex flex-col items-center space-y-8 bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Xush kelibsiz!</h1>
        <NavLink to="/population">
          <div className="card bg-primary text-primary-content p-6 rounded-lg shadow-lg hover:bg-primary-focus">
            <h2 className="text-xl font-bold text-center">
              Barcha davlatlarning aholisi sonini ko'rish uchun bu yerni bosing
            </h2>
          </div>
        </NavLink>
        <NavLink to="/area">
          <div className="card bg-secondary text-secondary-content p-6 rounded-lg shadow-lg hover:bg-secondary-focus">
            <h2 className="text-xl font-bold text-center">
              Barcha davlatlarning hudud maydonini ko'rish uchun bu yerni bosing
            </h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
