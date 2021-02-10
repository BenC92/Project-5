fetch('http://localhost:3000/api/furniture')
  .then(response => response.json())
  .then(data => {
    
  console.log(data)
    const productListElement = document.getElementById('product-list')

    for (let index = 0; index < data.length; index++) {
      const product = data[index];
      const productCard =createProductCard(product)
  
      productListElement.appendChild(productCard)
    }
  })


const cart = []
// add an empty cart (array)
// You should probably not overwrite the cart if it exists, try building a getter to check if returns something
localStorage.setItem('cart', JSON.stringify(cart))

const addToCard = document.getElementById('btn-add-to-cart')

addToCard.addEventListener('click', function () {
	// get the cart from localStorage
	const cartString = localStorage.getItem('cart')
	// convert the cart string into javascript using JSON.parse
	const cart = JSON.parse(cartString)
	
  cart.push({
    _id: 'product2',
    name: 'Oak table',
    price: 89900,
    varnish: 'option 2'
  })
	
  console.log(cart)
	// add the updated cart to the list
	localStorage.setItem('cart', JSON.stringify(cart))
})

console.log(price.toLocaleString('en-IN', { maximumSignificantDigits: 3 }))