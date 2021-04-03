const cartExists = localStorage.getItem('cart')

if(! cartExists) {
const cart = []
localStorage.setItem('cart', JSON.stringify(cart))
}

let cart = localStorage.getItem('cart')
cart = JSON.parse(cart)

const cartElement = document.getElementById('cart')

const table = document.createElement('table')
 const thead = document.createElement('thead')
 const trHead = document.createElement('tr')
 const thName = document.createElement('th')
 thName.textContent = 'Name'
 const thPrice = document.createElement('th')
 thPrice.textContent = 'Price'
 const thVarnish = document.createElement('th')
 thVarnish.textContent = 'Varnish'
 const tbody = document.createElement('tbody')
 const footer = document.createElement('div') 
 const button = document.createElement('a')
 button.textContent = 'order now'



 

 table.setAttribute('class', 'table border')
 trHead.setAttribute('class', 'col')
 thName.setAttribute('scope' , 'col')
 thPrice.setAttribute('scope', 'col')
 thVarnish.setAttribute('scope', 'col')
 footer.setAttribute('class', 'd-flex justify-content-between')
 button.setAttribute('class', 'button btn btn-primary a')
 button.setAttribute('href', 'order-confirm.html')



 cartElement.appendChild(table)
 table.appendChild(thead)
 thead.appendChild(trHead)
 trHead.appendChild(thName)
 trHead.appendChild(thPrice)
 trHead.appendChild(thVarnish)
 table.appendChild(tbody)
 cartElement.appendChild(footer)
 footer.appendChild(button)
 

let total = 0

for (let index = 0; index < cart.length; index++) {
  const product = cart[index];

 total += product.price
 const trFirstRow = document.createElement('tr')
 const tdFirstRowName = document.createElement('td')
 tdFirstRowName.textContent = product.name
 const tdFirstRowPrice = document.createElement('td')
 tdFirstRowPrice.textContent = product.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
 const tdFirstRowVarnish = document.createElement('td')
 tdFirstRowVarnish.textContent = product.varnish
 


 tbody.appendChild(trFirstRow)
 trFirstRow.appendChild(tdFirstRowName)
 trFirstRow.appendChild(tdFirstRowPrice)
 trFirstRow.appendChild(tdFirstRowVarnish)
 
 console.log(product.price.toLocaleString('de-DE'))
  console.log(cart[index])
  
}
console.log(total)

const totalPrice = document.createElement('h4')
totalPrice.textContent = total.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

footer.appendChild(totalPrice)