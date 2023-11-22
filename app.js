const listadoErrores = []

function agregarEquipo(event){
    event.preventDefault()
    let nombre = document.getElementById('nombre-pc')
    let error = document.getElementById("error")
    listadoErrores.push({
        nombre: nombre.value,
        error: error.value
    })
    nombre.value = ""
    error.value = ""
    mostrarRegistro()
}

function mostrarRegistro(){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    listadoErrores.map((e,i)=>{
        tbody.innerHTML += `
        <tr>
        <th>${i}</th>
        <td>${e.nombre}</td>
        <td>${e.error}</td>
        <td><input type="checkbox"></td>
        </tr>
        `
    })
}