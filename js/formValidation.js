function validateForm() {
    nombre = document.getElementById("nombre").value
    email = document.getElementById("email").value
    dni = document.getElementById("dni").value
    tel = document.getElementById("tel").value
    if(email === "" || nombre === "" || dni === "" || tel === "") {
        alert("Todas las areas de texto del formulario deben ser llenadas!")
        return false
    }
}