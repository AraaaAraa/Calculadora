//variables
const resultado = document.querySelector(".resultado");
const bottons = document.querySelectorAll(".boton");
const borrar = document.getElementById("ac");

bottons.forEach(botton => {
    botton.addEventListener ("click", () => {
        const apretadoBotton = botton.value;

        if (resultado.value === "0"){
            resultado.value = apretadoBotton;
        }
        else{
            resultado.value += apretadoBotton;
        }
    })

    borrar.addEventListener ('click', () => resultado.value = 0)
})
