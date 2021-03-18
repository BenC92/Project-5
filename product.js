const cartExists = localStorage.getItem('cart')

if(! cartExists) {
  alert('cart does not exist!!!')
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
  row.setAttribute('class','row row-cols-1 row-cols-md-2 g-4')
  colImg.setAttribute('class','col')
  img.src = product.imageUrl
  img.alt = product.name
  img.setAttribute('class', 'card-img-top')
  col.setAttribute('class', 'col-md-8')
  cardBody.setAttribute('class', 'card-body')
  cardTitle.setAttribute('class', 'card-title')
  cardTitle.textContent = product.name
  cardText.setAttribute('class', 'card-text')
  cardText.textContent = product.description
  button.setAttribute('class', 'button btn btn-primary ')
  button.textContent = 'add to Cart'
  button.addEventListener('click', function(){
    const cartString = localStorage.getItem('cart')
	  const cart = JSON.parse(cartString)

    console.log(cart)

    cart.push ({
      name: product.name,
      price: product.price,
      varnish: select.selectedOptions[0].value,
      id: product._id

    })

    localStorage.setItem('cart', JSON.stringify(cart))
  })
  
  select.setAttribute('class', 'form-select default-form-select')
  price.textContent = product.price

  for (let i = 0; i < product.varnish.length; i++){
    console.log(product.varnish[i], i)

    const option= document.createElement('option')

    option.value = product.varnish[i]
    option.textContent =product.varnish[i]

    select.appendChild(option)
  }
   
  card.appendChild(row)
  row.appendChild(colImg)
  row.appendChild(col)
  colImg.appendChild(img)
  col.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(price)
  cardBody.appendChild(button)
  cardBody.appendChild(select)
  
  return card
}
