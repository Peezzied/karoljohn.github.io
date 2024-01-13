import {top, technologies, addCard, addCardList} from './index.js'

const topCards = document.querySelectorAll('.cards-container:nth-of-type(2) div')
const multimediaElement = document.querySelector('.cards-container:nth-of-type(4) .cards')
const web = document.querySelector('.cards-container:nth-of-type(5) .cards')
console.log(multimediaElement)

top.forEach((item, index)=>{
    addCardList(topCards, index,
    `
        <div class="emoji">${item.emoji}</div>
        <div class="title font-muted font-title-normal">${item.title}</div>
        <div class="body">${item.body}</div>
    `)

})
technologies.sort((a, b)=> {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
});
technologies.forEach((item)=>{
    const content = `
    <li class="corner-normal card-hover">
        <img src="${item.img}" loading="lazy" alt="${item.name} logo">
        <p class="font-pr">${item.name}</p>
    </li> `
    if (item.category === 'multimedia'){
        addCard(multimediaElement, content)
    } else {
        addCard(web, content)
    }
})

