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

let nbBot = randomNumber(1,5);
console.log(nbBot+'nombre de bot');
let nbBaseBot = 0;

setTimeout(() => {
  let allDiv = document.querySelectorAll('.divBox');
  //console.log(allDiv);
  allDiv.forEach(divio => {
    // divio.classList.add('divBorder');
    divio.addEventListener('click', () => {
      //botChoice(allDiv);
      let nbBaseBot = 0;
       /// crée un nombre de bot en fonction d'un nombre aléatoire 👍
      while (nbBaseBot != nbBot){
        nbBaseBot++;
        botChoice(allDiv);
      }
    })
  })
}, 100);

const candyColors = [
  'url("images/v1.png")',
  'url("images/v2.png")',
  'url("images/v3.png")',
  'url("images/v4.png")',
  'url("images/v5.png")'
]

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/// crée un choix, ici quand on clique sur une case rajoute au hazard une autre maison, mais ne choisi pas une maison déjà séléctionner 


function botChoice(allDiv) {

  let io = 0;
 
  let randomMat = randomNumber(0, 100);
  /////
  if (allDiv[randomMat].style.backgroundImage == '') {
    allDiv[randomMat].style.backgroundImage = candyColors[0];
    allDiv[randomMat].classList.add('divBorder');

  } else if (allDiv[randomMat].style.backgroundImage != '') {
    while (allDiv[randomMat].style.backgroundImage == '' || io === 10) {
      let newMat = randomMat
      allDiv[newMat].style.backgroundImage = candyColors[0];
      allDiv[newMat].classList.add('divBorder');
      
      io++;
    }
  }
}


