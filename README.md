# Prestamos
Hola, aca en la version 30/9:
  -volvi a hecer responsivo el index.html.
  -comente el style que estaba en index, porque la profe quiere todos los estilos en el css. Estan alli.
  -recorte un poquito el borde del logo, para que calce mejor en la pagina y para que se vea mejor en la solapa.
  -los cambio en el header y footer hagámoslos solo en el index.html, asi cuando terminamos lo recopiamos a los demas (o lo llamamos con una variable de JS, como explico en la primera clase de JS)
  -le meti el link de la animación, y le puse una animación enlatada en el header (despues vemos si otra queda mejor), pero por lo menos anda.
  
Hola! 06/10 
-cree un json con 10 datos de clientes
-cambie por una imagen el header pero se pixela. hay que tratar que quede estetica o cambiarla. 
-lo mismo con la imagen en el cuerpo, hay que lograr que quede bien.
-todos los cambios solo los hice en el index.
-quise ponerle color al body para que no quede blanco y no cambió (esta en estilos).
-me quedan: mejorar estilo, agregar planos de direcciones, poner video de youtube en home, achicar tabla de intereses
-JS: con las herramientas de la práctica 07/10 empezar a trabajar con el formulario.

Pablo: Hola! 08/10
- Agregue en el JS las funciones de validacion y limpieza del formulario.
- OJO que agregue una segunda entrade en email, para reconfirmar (esto se estila). NO sacarla porque funciona con la validacion!!!
- La fot del header me parece buena idea, pero allí yo había puesto la animación, que ahora no esta. Donde ponemos la animación??
- El JSON al verlo con el VSCode, marca error en los cam;or de FECHANACIMEINTO  y EMAIL....Será qeu hay que ponerlos como strings entre ""?

Pablo: Hola! 10/10
- Agregue en JS la lectura del archivo de datos (adaptado del JSON), con el mismo array de objetos pero sin formato JSON. Mañana le pregunto a la profe como hacerlo directo del JSON ,asi ya casi tenemos esto.
- puse la quinta pagina (y su boton de menu correspondiente) apra acceder a las "experiencias" que es con lo que cumpliremos el requisito de leer JSON.
- Falta: 1) animacion: ver donde poner, 2) terminar tema JSON, 3) foto de header no queda muy responsiva (se distorsiona un poco), 4) formato del formulario y tabla intereses.
- Recorte un poco la foto de pantalla de inicio, para tratar de que quede algo mejor.
- El BOOTSTRAP del formulario hace que no funcione bien el menu en esa página cuando se achica a formato celular, pueden reverlo?
- Les pido PORFA que no toquen mucho el JS, me costo un monton de tiempo la logica.

-anteriormente le puse fondo al body
-agregué video de youtube>(ahora funciona)
-puse fotos al JSON
-tengo el VUE pero hay que modificar todo ya que las tarjetas van en HTML y se desconfigura todo. Paso código:
JS
const { createApp } = Vue  //creo un objeto VUE llamdo createApp

  createApp({
    data() {
      return {
       
        url:'./datos.json',
        clientes:[]
      } 
    },   
    methods: {
      fetchData(url) {

          fetch(url)
              .then(response => response.json())
              .then(data => { 
                  this.clientes=data.clientes  //guarda en el array drinks lo obtenido del json del atributo 
                  console.log(this.clientes)

    created(){

      this.fetchData(this.url) 
    }

    
  }).mount('#app')

HTML
<div id="app">
                 <div class="container">
       //armo la cadena para poner en el HTML manipulado
        var aActual = (new Date()).getFullYear()
         <tr v-for="x in clientes"
            edad = aActual - parseInt(x.fechanacimiento.substr(6, 4))
            dniS = String(x.dni)
            dniX = dniS.substr(0, 2) + "." + dniS.substr(2, 3) + ".xxx"
            <div class="tarjeta">
            <div class="cuerpo">
                <img src="${x.imagen}" id="foto">
                <h4>Cliente: ${x.nombre} ${x.apellido}</h4>
                <p>DNI: ${dniX}</p>
                <p>Provincia: ${x.provincia}</p>
                <p>Edad: ${edad} años</p>
                <h4>Experiencia: ${x.exp}</h4>
            </div>
        </div>
    
        </tr>
        
        </div>

        </div>
esto no va:
            // le agrego el cierre de la etiqueta div
        console.log(cad)
        document.getElementById("tarjetas").innerHTML = cad

    }
    )

-OJO con los cambios que hagamos, se generó conflicto y me duplicó el home

FALTA: ver si la foto del header puede quedar mejor y ver como viene la estética aunque me parece que esta correcta. 