let jugada  = prompt("Enter size")
jugada = Number(jugada);


if ( isNaN(jugada)){
    window.location.reload();
    
}

if (jugada >65 || jugada<2){
    alert('Enter a number from 1-64 range')
    window.location.reload();
}
let tamanioquadrado=0;
if (jugada < 10){
    tamanioquadrado = '60px';
    }
else if(jugada<30) {
        tamanioquadrado='30px'
    } 
    
else if(jugada<65) {
        tamanioquadrado='20px'
    } 


const size = '--size'
 

document.documentElement.style.setProperty(size,tamanioquadrado);

csselementos =  document.getElementsByClassName('elementos')
csselementos.style =  "height: 5px;"


const juego = document.querySelector('#juego')


const createNewColumn= ()=>{
    const verticalflex = document.createElement('div');
    verticalflex.classList.add("verticalflex");
    juego.appendChild(verticalflex); 
    return verticalflex;
}

const ramdomColor= ()=>{
    const numero1 = Math.floor((Math.random()*249)+1);
    const numero2 = Math.floor((Math.random()*249)+1);
    const numero3 = Math.floor((Math.random()*249)+1);
    const rgb = `rgb(${numero1},${numero2},${numero3})`
    
    return rgb
}

const crateNewRow=(columna)=>{
    const horisontalflex = document.createElement('div');
    horisontalflex.classList.add('horisontalflex');
    columna.appendChild(horisontalflex)
    return horisontalflex
};
const createNewBox= (y)=>{
    const elementos = document.createElement('div');
    elementos.classList.add('elementos');
    
    y.appendChild(elementos);
    elementos.addEventListener('mouseover',function(e){        
        let colorRan =ramdomColor();
        e.target.style.backgroundColor=colorRan;
        //console.log(color);
        
    })
   
}
let newCol = '';
let newRow = '';

for (let x = 0; x<jugada;x++){
    newCol=createNewColumn();
    newRow=crateNewRow(newCol);       
    for (let y = 0; y<jugada;y++){
        createNewBox(newRow);
    
    }   
}
const botonrefresh = document.querySelector('#boton');
botonrefresh.addEventListener('click',function(e){
    window.location.reload();
})
