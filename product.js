const cartExists = localStorage.getItem('cart')

if(! cartExists) {
const cart = []
localStorage.setItem('cart', JSON.stringify(cart))
}

const searchPrams = new URLSearchParams(window.location.search)
const productId = searchPrams.get('id') 

fetch('http://localhost:3000/api/furniture/'+ productId)
  .then(response => response.json())
  .then(data => {
    
  console.log(data)
    const productListElement = document.getElementById('product')

     
      const product = data;
      const productCard =createProductCard(product)
  
      productListElement.appendChild(productCard)
    
  })

function createProductCard(product){
  const card = document.createElement('div')
  const row = document.createElement('div')
  const colImg = document.createElement('div')
  const img = document.createElement('img')
  const cardTitle = document.createElement('h5')
  const col = document.createElement('div')
  const cardBody = document.createElement('div')
  const cardText = document.createElement('p')
  const button = document.createElement('button')
  const select = document.createElement('select')
  const price =document.createElement('p')
  

  card.setAttribute('class','card')
  img.setAttribute('style','object-fit: cover; width: 100%;')
  img.src = product.imageUrl
  img.alt = product.name
  img.setAttribute('class', 'card-img-top')
  col.setAttribute('class', 'col-md-8')
  cardBody.setAttribute('class', 'card-body')
  cardTitle.setAttribute('class', 'card-title')
  cardTitle.textContent = product.name
  cardText.setAttribute('class', 'card-text')
  cardText.textContent = product.description
  button.setAttribute('class', 'button btn btn-primary')
  button.textContent = 'add to Cart'
  var myModal = new bootstrap.Modal(document.getElementById('myModal'))
  button.addEventListener('click', function(){
    const cartString = localStorage.getItem('cart')
	  const cart = JSON.parse(cartString)
    
    myModal.show()

    console.log(cart)

    cart.push ({
      name: product.name,
      price: product.price,
      varnish: select.selectedOptions[0].value,
      id: product._id

    })

    localStorage.setItem('cart', JSON.stringify(cart))
  })
  
  select.setAttribute('class', 'form-select default-form-select mb-3 w-50')
  price.textContent = product.price

  for (let i = 0; i < product.varnish.length; i++){
    console.log(product.varnish[i], i)

    const option= document.createElement('option')

    option.value = product.varnish[i]
    option.textContent =product.varnish[i]

    select.appendChild(option)
  }
   
  
  card.appendChild(img)
  card.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(price)
  cardBody.appendChild(select)
  cardBody.appendChild(button)

  return card
}
