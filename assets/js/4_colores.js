// 4 Colores

const divAzul = document.getElementById("uno");
const divRojo = document.getElementById("dos");
const divVerde = document.getElementById("tres");
const divAmarillo = document.getElementById("cuatro");

function cambiarColor(div) {
    div.style.backgroundColor = "black";
}
divAzul.addEventListener("click", function() {
    cambiarColor(divAzul);
}
)
divRojo.addEventListener("click", function() {
    cambiarColor(divRojo);
}
)
divVerde.addEventListener("click", function() {
    cambiarColor(divVerde);
}
)
divAmarillo.addEventListener("click", function() {
    cambiarColor(divAmarillo);
}
)

// Eventos key   

function fondo(color){
    const ele = document.getElementById("key");
    ele.style.backgroundColor = color;
}
function crearDiv(color) {
    const keyContainer = document.getElementById('container');
    const div = document.createElement('div');
    div.className = 'key';
    div.style.backgroundColor = color;
    keyContainer.appendChild(div);
}
    
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    fondo("pink");
    } else if (event.key === 's') {
    fondo("orange");
    } else if (event.key === 'd'){
    fondo("skyblue");
    } else if (event.key === 'q'){
    crearDiv("purple");    
    } else if (event.key === 'w'){
    crearDiv("gray");    
    } else if (event.key === 'e'){
    crearDiv("brown");    
    }
    }
)