function validar() {
    let nom = document.getElementById("nombre").value
    localStorage.setItem("nombre", nom.toUpperCase())
    let ape = document.getElementById("apellido").value
    localStorage.setItem("apellido", ape.toUpperCase())
    let fec = document.getElementById("fechan").value
    localStorage.setItem("fechaNacimiento", fec)
    let doc = document.getElementById("documento").value
    localStorage.setItem("documento", doc)
    let ing = document.getElementById("ingresos").value
    localStorage.setItem("ingresos", ing)
    let pro = document.getElementById("provincia").value
    localStorage.setItem("provincia", pro)
    let ema = document.getElementById("email").value
    localStorage.setItem("email", ema)
    let ema2 = document.getElementById("email2").value
    localStorage.setItem("email", ema2)
    if (nom == "") alert("debe ingresar su nombre")
    if (ape == "") alert("debe ingresar su apellido")
    if (doc > 100000000 || doc <= 0) alert("ingrese un número de documento válido")
    if (ing == 0) alert("se requiere un monto válido de ingreso mensual")
    if (pro === "Selecciona una") alert("ingrese una provincia")
    if ((ema.indexOf("@") == -1) || (ema.indexOf(".") == -1)) alert("ingrese una dirección válida de email")
    if (ema !== ema2) alert("las direcciones de email no coinciden")
    if ((fec.substr(0, 4) === "") || (fec.substr(5, 2) === "") || (fec.substr(8, 2) === "")) alert("ingrese una fecha de nacimiento válida")
    var aNac = parseInt(fec.substr(0, 4))
    var mNac = parseInt(fec.substr(5, 2))
    var fecha = new Date()
    var aAct = fecha.getFullYear()
    var mAct = 1 + fecha.getMonth()
    if (((aAct - aNac) > 80) || ((aAct - aNac) == 80) && (mAct >= mNac)) alert("debe tener menos de 80 años al momento de la solicitud")
    if (((aAct - aNac) < 18) || ((aAct - aNac) == 18) && (mAct < mNac)) alert("debe tener 18 años cumplidos")
    if ((nom != "") && (ape != "") && (doc < 100000000 && doc > 0) && (ing != 00) && (pro !== "Selecciona una") &&
        (ema === ema2) && (fec.substr(0, 4) !== "") && (fec.substr(5, 2) !== "") && (fec.substr(8, 2) !== "") &&
        !(((aAct - aNac) > 80) || ((aAct - aNac) == 80) && (mAct >= mNac)) && !(((aAct - aNac) < 18) || ((aAct - aNac) == 18) && (mAct < mNac)))
        alert("* SU SOLICITUD SE HA ENVIADO CORRECTAMENTE * Nos comunicaremos via email dentro de las próximas 48hs.")
}
function limpiar() {
    document.getElementById("nombre").value = ""
    localStorage.setItem("nombre", "")
    document.getElementById("apellido").value = ""
    localStorage.setItem("apellido", "")
    document.getElementById("fechan").value = ""
    localStorage.setItem("fechaNacimiento", "")
    document.getElementById("documento").value = null
    localStorage.setItem("documento", 0)
    document.getElementById("ingresos").value = null
    localStorage.setItem("ingresos", 0)
    document.getElementById("provincia").value = "Selecciona una"
    localStorage.setItem("provincia", "Selecciona una")
    document.getElementById("email").value = ""
    localStorage.setItem("email", "")
    ema2 = document.getElementById("email2").value = ""
    localStorage.setItem("email", "")
}
//lectura JSON experiencias clientes
let url = "./datos.json"
let clientes = [];
fetch(url)
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        console.log(data)
        clientes = data.clientes
        console.log(clientes)

        let cad = `<div class="container">
       `//armo la cadena para poner en el HTML manipulado
        var aActual = (new Date()).getFullYear()
        for (x of clientes) {
            edad = aActual - parseInt(x.fechanacimiento.substr(6, 4))
            dniS = String(x.dni)
            dniX = dniS.substr(0, 2) + "." + dniS.substr(2, 3) + ".xxx"
            cad += `<div class="tarjeta">
            <div class="cuerpo">
                <img src="${x.imagen}" id="foto">
                <h4>Cliente: ${x.nombre} ${x.apellido}</h4>
                <p>DNI: ${dniX}</p>
                <p>Provincia: ${x.provincia}</p>
                <p>Edad: ${edad} años</p>
                <h4>Experiencia: ${x.exp}</h4>
            </div>
        </div>
    `
        }
        cad += `</div>
      `       // le agrego el cierre de la etiqueta div
        console.log(cad)
        document.getElementById("tarjetas").innerHTML = cad

    }
    )
pieDePagina=`<div class="footer">
<P>Seguinos</P>
<a target="_blank" href="https://facebook.com">
    <img src="./imagenes/facebook.png" alt="Facebook">
</a>
<a target="_blank" href="https://www.instagram.com">
    <img src="./imagenes/instagram.png" alt="Instagram">
</a>
<a target="-blank" href="https://twitter.com/">
    <img src="./imagenes/gorjeo.png" alt="Twitter">
</a>
<a target="-blank" href="https://api.whatsapp.com/send?phone=0123456789">
    <img src="./imagenes/whatsapp.png" alt="Whatsapp">
</a>
<p>&copy Copyright 2022 by Laura Moggia & Pablo Chini</p>
</div>`
document.getElementById("pie").innerHTML=pieDePagina

var fecha = new Date()
var aAct = fecha.getFullYear()
var mAct = 1 + fecha.getMonth()
var dAct = fecha.getDate()
PlaInt=`<div class="containerTabla">                   
<h3>Plazos e Intereses</h3><h6>(vigentes al ${dAct} - ${mAct} - ${aAct})</h6>
<table class="table table-striped table-bordered table-sm">
    <tr>
        <th>Días</th>
        <th>Interés</th>
    </tr>
    <tr>
        <td>30</td>
        <td>15%</td>
    </tr>
    <tr>
        <td>60</td>
        <td>35%</td>
    </tr>
    <tr>
        <td>180</td>
        <td>70%</td>
    </tr>
</table>
</div>)`
document.getElementById("PlaInt").innerHTML=PlaInt