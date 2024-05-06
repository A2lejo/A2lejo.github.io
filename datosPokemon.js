
const consultarPokemon = (id,number) => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)  //Se hace la peticion     

    .then (response => {
        return response.json()  //Se tansforma en Json
    })

    .then(data=>{
    //    console.log(data) //Se captura la información
        pintarPokemon(data,number)  //va en vez de console.log
    })

    .catch(error=>{
        console.log(error)
    })
}

//consultarPokemon(1,5)  //Se llama a la función 

const btnSeleccionar = () => {

    let primerPokemon = Math.round(Math.random()*150) 
    let segundoPokemon = Math.round(Math.random()*150)
    consultarPokemon(primerPokemon,1)
    consultarPokemon(segundoPokemon,2)

}

btnSeleccionar()

const listarPokemon = document.getElementById("listarpokemon")


const pintarPokemon = (data,id) =>{

    let item = listarPokemon.querySelector(`#pok-${id}`)
    console.log(data)
    item.getElementsByTagName ("img")[0].setAttribute("src", data.sprites.front_default)
    item.getElementsByTagName ("p")[0].innerText=data.name
}   
