"use client"; // This is a client component 👈🏽
import React, { useState } from 'react';
import styles from './ContactForm.module.css'

export function ContactForm () {

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
      });

      const [errors, setErrors] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validar nombre
        if (formData.nombre.length < 2 || formData.nombre.length > 30) {
          newErrors.nombre = 'El nombre debe tener entre 2 y 30 caracteres';
          isValid = false;
        }
    
        // Validar correo
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegex.test(formData.correo)) {
          newErrors.correo = 'Ingresa un correo electrónico válido';
          isValid = false;
        }
    
        // Validar mensaje
        if (formData.mensaje.length < 5 || formData.mensaje.length > 100) {
          newErrors.mensaje = 'El mensaje debe tener entre 5 y 100 caracteres';
          isValid = false;
        }
    
        // Actualizar el estado de errores
        setErrors(newErrors);
        return isValid;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // Realizar acciones con los datos del formulario
          console.log('Datos del formulario:', formData);
        } else {
          console.log('Formulario no válido. Por favor, corrige los errores.');
        }
      };




  return (

    <div className='container'>

      <div className={styles.contactPage}>

        <div className={styles.contactImage}>

        </div>

        <form className={styles.formContainer} onSubmit={handleSubmit}>

          <div className={styles.inputBox}>

            <label className={styles.label}>Nombre: </label>
            <input className={styles.input} type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>

            <div>
              {errors.nombre && <p className="error-message">{errors.nombre}</p>}
            </div>

          </div>
      

        <div className={styles.inputBox}>

          <label className={styles.label}>Correo: </label>
          <input className={styles.input}  type="text" name="correo" value={formData.correo} onChange={handleChange}/>

          <div>
            {errors.correo && <p className="error-message">{errors.correo}</p>}
          </div>

        </div>

        <div className={styles.inputBox}>

          <label className={styles.label}>Mensaje: </label>
          <textarea className={styles.input} name="mensaje" value={formData.mensaje} onChange={handleChange}/>

          <div>
            {errors.mensaje && <p className="error-message">{errors.mensaje}</p>}
          </div>
        </div>


        <button type="submit" > Enviar </button>
        </form>




      </div>


    </div>




    
  )
}
