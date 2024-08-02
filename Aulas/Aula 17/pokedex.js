const imgChooseYou = document.querySelector('#imgPokemon');
const nomePokemon = document.querySelector('#nomePokemon')
const idPokemon = document.querySelector('#idPokemon')
const tipoPokemon1 = document.querySelector('#tipagem1')
const tipoPokemon2 = document.querySelector('#tipagem2')
const pesoPokemon = document.querySelector('#peso')
const alturaPokemon = document.querySelector('#altura')
const habilidadePokemon = document.querySelector('#abilities')
const botao1 = document.querySelector('#botao1')
const botao2 = document.querySelector('#botao2')
const form = document.querySelector('.formBusca')
const input = document.querySelector('#inputName')
const som = document.querySelector('.som')

let procurarPokemon = 1;

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
};

const showPokemon = async(pokemon) => {
    const dataPokemon = await fetchPokemon(pokemon);

    if (dataPokemon) {
        imgChooseYou.src = dataPokemon.sprites.front_default;
        nomePokemon.innerHTML = dataPokemon.name;
        idPokemon.innerHTML = dataPokemon.id;
        tipoPokemon1.innerHTML = dataPokemon.types[0].type.name
        pesoPokemon.innerHTML = dataPokemon.weight;
        alturaPokemon.innerHTML = dataPokemon.height;
        habilidadePokemon.innerHTML = dataPokemon.abilities[0].ability.name;
        if (dataPokemon.types.length>=2) {
            tipoPokemon2.innerHTML = dataPokemon.types[1].type.name
        } else {
            tipoPokemon2.innerHTML = ' '
        }
        som.src = dataPokemon.cries.latest
        input.value = ''
        procurarPokemon = dataPokemon.id;
    }
};

botao1.addEventListener("click", () => {
    if (procurarPokemon > 1) {
    procurarPokemon -= 1;
    showPokemon(procurarPokemon);
}
});

botao2.addEventListener("click", () => {
    if (procurarPokemon < 1025) {
        procurarPokemon += 1;
        showPokemon(procurarPokemon);}
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase());
})

showPokemon(procurarPokemon);

const audioP = document.querySelector('#audioplayer');

const inputRange = document.querySelector('#input-range')

const buttonPlayer = document.querySelector('#Play')

inputRange.addEventListener("input",() => {audioP.volume = inputRange.value});

buttonPlayer.addEventListener("click", () => {audioP.play();});