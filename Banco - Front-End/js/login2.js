//const loginUrl = 'https://mintic-bancoproj-g2.herokuapp.com/login';
const loginUrl = 'http://127.0.0.1:8000/login2';

function collectData(evt) {
    evt.preventDefault();

    const email = document.login.email.value.trim();
    const password = document.login.password.value;

    const customer = {
        email: email,
        password: password
    }
    //console.log(customer);
    const dataToSend = JSON.stringify(customer);
    console.log("datos capturados del documentO "+dataToSend);
    login(dataToSend);
}

function login(data) {
    // Petición HTTP
    fetch(loginUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })
        .then(response => {
            console.log("respuesta promesa "+response);
            if (response.ok || response.status == 401)
                return response.text()
            else
                throw new Error(response.text());
        })
        .then(data => {
            if (data.includes("Credenciales inválidas")) {
                handleError(data);
            }
            console.log("datos resibidos de la promesa "+data);
            handleSuccess(JSON.parse(data));
        })
        .catch(error => {
            console.error("ERROR: ", error.message);
            handleError(error.message);
        });
}

function handleSuccess(data) {
    console.log("datos parseados a javascrips"+data)
    document.getElementById("formData").remove();
    const message = document.createElement("p");
    message.innerText = "Ingreso exitoso. Accediendo a su información...";
    const info = document.getElementById("info");
    info.appendChild(message);
    console.log("datos de refresh en JSON  "+data.refresh);
    console.log("datos de acceso en JSON  "+data.access);
    console.log("datos de id en JSON  "+data.id);
    console.log("datos de nombre en JSON  "+data.primer_nombre);
    sessionStorage.setItem("accessToken", data.refresh);
    sessionStorage.setItem("refreshToken", data.access);
    sessionStorage.setItem("clientId", data.id);
    sessionStorage.setItem("primer_nombre", data.primer_nombre);
    
    window.location.href = './medico.html?id=' + data.id;
}

function handleError(err) {
    document.getElementById("formData").remove();
    const message = document.createElement("p");
    if (err)
        message.innerText = err;
    else
        message.innerText = "No se pudo ingresar. Intente luego.";
    const info = document.getElementById("info");
    info.appendChild(message);
}

// --------------------
document.login.addEventListener("submit", collectData);