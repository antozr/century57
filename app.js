document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.getElementById('score')
  const width = 10
  const squares = []
  let score = 0

  grid.style.width = (width * 70) + "px"

  const candyColors = [
    'url("images/v1.png")',
    'url("images/v2.png")',
    'url("images/v3.png")',
    'url("images/v4.png")',
    'url("images/v5.png")'
  ]

  //create your board
  function createBoard() {
    for (let i = 0; i < width * width; i++) {
      const square = document.createElement('div')
      square.setAttribute('id', i)
      square.style.backgroundImage = ''
      square.classList.add('divBox')
      grid.appendChild(square)
      squares.push(square)
    }
  }
  createBoard()

  squares.forEach(square => square.addEventListener('click', create))

  function create() {
    this.style.backgroundImage = candyColors[0]
  }

  function checkRowForThree() {
    for (i = width; i < width * width - width; i++) {
      let rowOfThree = [i, i + 1, i - 1, i + width, i - width]
      let decidedColor = squares[i].style.backgroundImage
      const isBlank = squares[i].style.backgroundImage === ''
      let oui = squares[i].style.backgroundImage

      // if (arr[3] !== undefined) {
      // }

      if (rowOfThree.every(index => squares[index].style.backgroundImage >= decidedColor && !isBlank)) {
        score += 3
        scoreDisplay.innerHTML = score
        let next = candyColors.indexOf(decidedColor) + 1;
        squares[i].style.backgroundImage = candyColors[next]
      }
    }
  }
  checkRowForThree()

  window.setInterval(function () {
    checkRowForThree()
  }, 100)
})


/// paramètre pour le bot 

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
//choixClanUtilisateur ();
var nbBot = randomNumber(1, 5); // donne le nombre de bots disponnible 
console.log(nbBot + ' nombre de bot');
let nbBaseBot = 0;

/// crée deuxgroupe de bot au hassard se bassant sur le nombre défini avant 
function century57BotSize() {
  var botCentury57 = randomNumber(1, nbBot);
  console.log('Bot de Century 57: ' + botCentury57);
  return botCentury57;

}
function thomasBotSiez() {
  let botThomasFiron = nbBot - century57BotSize();
  console.log('Bot de THomas & Firon: ' + botThomasFiron);
  return botThomasFiron;
}

setTimeout(() => {
  

  ////

  let allDiv = document.querySelectorAll('.divBox');

  allDiv.forEach(divio => {
    //divio.style.backgroundColor = "red";
    divio.addEventListener('click', () => {
      let io = 0;
      let io2 = 0;
      //botChoice(allDiv);
      let nbBaseBot = 0;
      let nbBaseBot2 = 0;
      /// crée un nombre de bot en fonction d'un nombre aléatoire 👍
      // while (nbBaseBot != nbBot){
      //   nbBaseBot++;
      //   botChoice(allDiv);
      // }
      while (nbBaseBot != century57BotSize() ||io === 10 ) {
        io++;
        nbBaseBot++;
        botChoice(allDiv, 'divBorderCT');// bug mettre des if 
      }
      while (nbBaseBot2 != thomasBotSiez() ||io2 === 10 ) {
        io2++;
        console.log(io2);
        nbBaseBot2++;
        botChoice(allDiv, 'divBorderTF');
      }
    })
  });

  
}, 100);

const candyColors = [
  'url("images/v1.png")',
  'url("images/v2.png")',
  'url("images/v3.png")',
  'url("images/v4.png")',
  'url("images/v5.png")'
]


/// crée un choix, ici quand on clique sur une case rajoute au hazard une autre maison, mais ne choisi pas une maison déjà séléctionner 


function botChoice(allDiv, divBorder) {

  let io = 0;

  let randomMat = randomNumber(0, 100);
  ///// condition pour le choix de la case, si le background est vide ou pas. 
  if (allDiv[randomMat].style.backgroundImage == '') {
    allDiv[randomMat].style.backgroundImage = candyColors[0];
    allDiv[randomMat].classList.add(divBorder);

  } else if (allDiv[randomMat].style.backgroundImage != '') {
    while (allDiv[randomMat].style.backgroundImage == '' || io === 10) {
      let newMat = randomMat
      allDiv[newMat].style.backgroundImage = candyColors[0];
      allDiv[newMat].classList.add(divBorder);

      io++;
    }
  }
}


// function scoreAgence() {
//   // initialisation des score des clans
//   let score = 0;

//   let scoreCentury = document.querySelector('#scoreC57').innerHTML = score;
//   let scoreThomasF = document.querySelector('#scoreTF').innerHTML = score;
// }


/// choix du clan de l'utilisateur

// function choixClanUtilisateur() {
//   let choiceUser = prompt('ENtre ton clan :');
//   console.log(choiceUser);
// }
