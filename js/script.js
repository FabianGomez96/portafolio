const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const form = document.querySelector("#form-contacto")

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    nav.classList.toggle("active");
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const data = {
        nombre: this[0].value,
        email: this[1].value,
        mensaje: this[2].value
    }

    fetch("https://formsubmit.co/ajax/34a9d94b342799857024f6e690fdfe0d", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        this[0].value = ""
        this[1].value = ""
        this[2].value = ""

        let mensaje = ""
        if (data.success) {
            mensaje = "Se envió correctamente."
        } else {
            mensaje = "Ocurrió un error intente de nuevo o mas tarde."
        }
        alert(mensaje)
        
    })
    .catch(error => console.log(error));
});

