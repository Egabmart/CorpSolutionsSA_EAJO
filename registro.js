document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById('formulario-registro');
    const contenedorTabla = document.getElementById('contenedor-tabla');
    let tabla; // la creacion tabla
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const cedula = document.getElementById('numerocedula').value;
      const nombres = document.getElementById('nombres').value;
      const apellidos = document.getElementById('apellidos').value;
      const departamento = document.getElementById('departamento').value;
      const motivo = document.getElementById('motivo').value;

      if (cedula.length !== 16) {
        alert('El número de cédula debe tener exactamente 16 caracteres.');
        return;
      }

      if (departamento === "") {
        alert('Debe seleccionar un departamento válido.');
        return;
      }      
  
      if (!tabla) {
        tabla = document.createElement('table');
        tabla.classList.add('tabla-registros'); 
  
        tabla.innerHTML = `
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Departamento</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody></tbody>
        `;
  
        contenedorTabla.appendChild(tabla);
      }
  
      // meter fila
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${cedula}</td>
        <td>${nombres}</td>
        <td>${apellidos}</td>
        <td>${departamento}</td>
        <td>${motivo}</td>
      `;
      tabla.querySelector('tbody').appendChild(fila);
  
      formulario.reset();
    });
  });

// Responsables de la lógica y validaciones con JavaScript: Alvaro Rocha y Oscar Martinez
  