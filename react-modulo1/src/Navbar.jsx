import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-indigo-600 text-white p-4">
      <div className="flex justify-between items-center">

        <div className="font-bold text-xl">Mi App</div>

        <div className="hidden sm:flex gap-6">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>

        <button 
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Contacto</a>
        </div>
      )}
    </div>

    
  )
}

export default Navbar;
