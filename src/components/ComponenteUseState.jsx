import React, { useState } from "react";

export const ComponenteUseState = () => {
  const [form, setForm] = useState({ name: "", age: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
     
      <h3>Use State</h3>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Ingresa tu nombre" className="formulario"></input> &nbsp;
      <input name="age" value={form.age} onChange={handleChange} placeholder="Ingresa tu edad"></input>  
      <p>Tu nombre es {form.name} y tu edad es {form.age}</p> 
      </div>
  );
};
