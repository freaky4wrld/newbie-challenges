const dataObjectArray = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./images/icon-visual.svg"
  }
];

const resultElements = document.querySelectorAll('.result-element');
const resultElementsArray = [];
resultElements.forEach((element)=>{
  resultElementsArray.push(element)
  let elementPosition = resultElementsArray.indexOf(element)
  element.children[0].children[1].children[0].innerText = dataObjectArray[elementPosition].score
  element.children[0].children[0].children[0].src  = dataObjectArray[elementPosition].icon
  element.children[0].children[0].children[1].innerText = dataObjectArray[elementPosition].category
})