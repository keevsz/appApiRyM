import React from "react";
import { useFormulario } from "../hooks/useFormulario";
import Swal from "sweetalert2";

const Formulario = (props) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });
  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);
    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Nombre ogligatorio",
        icon: "error",
      });
    }
    props.setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  };
  return (
    <form onSubmit={handleSubmit} className="form-control mb-2">
      <input
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-3 mt-3"
        value={nombre}
        onChange={handleChange}
        name="nombre"
      />
      <button type="submit" className="btn btn-dark mb-3 form-control">
        Buscar
      </button>
    </form>
  );
};

export default Formulario;
