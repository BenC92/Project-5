const cartExists = localStorage.getItem('cart')

if(! cartExists) {
  alert('cart does not exist!!!')
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


 table.setAttribute('class', 'table border')
 trHead.setAttribute('class', 'col')
 thName.setAttribute('scope' , 'col')
 thPrice.setAttribute('scope', 'col')
 thVarnish.setAttribute('scope', 'col')


 cartElement.appendChild(table)
 table.appendChild(thead)
 thead.appendChild(trHead)
 trHead.appendChild(thName)
 trHead.appendChild(thPrice)
 trHead.appendChild(thVarnish)
 table.appendChild(tbody)



for (let index = 0; index < cart.length; index++) {
  const product = cart[index];

 
 const trFirstRow = document.createElement('tr')
 const tdFirstRowName = document.createElement('td')
 tdFirstRowName.textContent = product.name
 const tdFirstRowPrice = document.createElement('td')
 tdFirstRowPrice.testContent = product.price
 const tdFirstRowVarnish = document.createElement('td')
 tdFirstRowVarnish.textContent = product.varnish


 tbody.appendChild(trFirstRow)
 trFirstRow.appendChild(tdFirstRowName)
 trFirstRow.appendChild(tdFirstRowPrice)
 trFirstRow.appendChild(tdFirstRowVarnish)
 
 console.log(product.price.toLocaleString('de-DE'))
  console.log(cart[index])
  
}
