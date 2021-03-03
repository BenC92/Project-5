const cartExists = localStorage.getItem('cart')

if(! cartExists) {
  alert('cart does not exist!!!')
const cart = []
localStorage.setItem('cart', JSON.stringify(cart))
}

function createOrderConfirmedCard(order){
const card = document.createElement('card')
const cardBody = document.createElement('div')
const head = document.createElement('h1')
head.textContent= 'order confirmed'
const note = document.createElement('h3')
note.textContent= 'Your order has been placed'
const paragraph = document.createElement('p')
paragraph.textContent = '. Your order will arrive in 5-7 working days. You will  receive a message from the delivery driver 1 hour before he arrives. thank you for ordering with us'
const button = document.createElement('a')


card.setAttribute('class','card mb3')
head.setAttribute('class', 'border center')
button.setAttribute('class', 'button btn btn-primary a')
button.setAttribute('href', '/index.html')

order.appendChild(card)
card.appendChild(cardBody)
cardBody.appendChild(h1)
cardBody.appendChild(h3)
cardBody.appendChild(p)
cardBody.appendChild(button)


console.log(order)

}
