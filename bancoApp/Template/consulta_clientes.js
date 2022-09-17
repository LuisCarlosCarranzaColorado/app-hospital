customers = [];

function getCustomers() {
  // Petición HTTP
  fetch('https://minticreto3.herokuapp.com/getAllUsuarios')
    .then(response => {
      console.log(response);
      if (response.ok)
        return response.text()
      else
        throw new Error(response.status);
    })
    .then(data => {
      console.log("Datos: " + data);
      customers = JSON.parse(data);
      handleCustomers();
    })
    .catch(error => {
      console.error("ERROR: ", error.message);
      handleError();
    });
}

function handleCustomers() {
  const divs = [];
  customers.forEach((cust) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>primer_nombre: ${cust.primer_nombre}</h3>
      <h3>primer_apellido: ${cust.primer_apellido}</h3>
      <h3>no_cedula: ${cust.no_cedula}</h3>
      <h3>no_cedula: ${cust.no_cedula}</h3>
      <h3>no_cedula: ${cust.no_cedula}</h3>
      <h3>no_cedula: ${cust.no_cedula}</h3>
      `;
    divs.push(div);
  });
  document.getElementById("cargando").remove();
  const info = document.getElementById("info-customers");
  divs.forEach(div => info.appendChild(div));
}

function handleError() {
  document.getElementById("cargando").remove();
  const message = document.createElement("p");
  message.innerText = "No se pudo cargar la información. Intente más tarde.";
  const info = document.getElementById("info-customers");
  info.appendChild(message);
}

//-----------------------------------

document.addEventListener("DOMContentLoaded", getCustomers);