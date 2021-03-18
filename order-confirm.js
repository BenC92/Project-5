const cartExists = localStorage.getItem('cart')

if(! cartExists) {
  alert('cart does not exist!!!')
const cart = []
localStorage.setItem('cart', JSON.stringify(cart))
}


const body = document.getElementById('order-confirm')
const form = document.createElement('form')
const fBody = document.createElement('div')
const firstNameLabel = document.createElement('label')
firstNameLabel.textContent = 'First name'
const firstNameInput = document.createElement('input')
const lastNameLabel =document.createElement('label')
lastNameLabel.textContent = 'Last name'
const lastNameInput = document.createElement('input')
const addressLabel = document.createElement('label')
addressLabel.textContent = 'Address'
const addressInput = document.createElement('input')
const cityLabel = document.createElement('label')
cityLabel.textContent= 'City'
const cityInput = document.createElement('input')
const emailLabel = document.createElement('label')
emailLabel.textContent = 'Email'
const emailInput =document.createElement('input')
const button = document.createElement('a')
button.textContent = 'Submit'

fBody.setAttribute('class', 'mb-3')
firstNameLabel.setAttribute('class', 'form-label')
firstNameInput.setAttribute('type','text')
firstNameInput.setAttribute('class', 'form-control')
firstNameInput.setAttribute('id','first-name')
lastNameLabel.setAttribute('class', 'form-label')
lastNameInput.setAttribute('type','text')
lastNameInput.setAttribute('class', 'form-control')
lastNameInput.setAttribute('id','Last name')
addressLabel.setAttribute('class', 'form-label')
addressInput.setAttribute('type', 'text')
addressInput.setAttribute('class', 'form-control')
addressInput.setAttribute('id', 'Address')
emailLabel.setAttribute('class', 'form-label')
emailInput.setAttribute('type', 'text')
emailInput.setAttribute('class', ' form-control')
emailInput.setAttribute('id', 'Email')
button.setAttribute('class', 'btn btn-primary')
button.addEventListener('click', function(){
  const order =  {
	contact: {
		firstName: firstNameInput.value,
    lastName : lastNameInput.value,
		address: addressInput.value,
    city: cityInput.value,
    email: emailInput.value
	},
	products : []
}
const cart = [
	{
		name: 'bed1',
		price: 123,
		varnish: 'b',
		id: 'product1'
	},
	{
		name: 'bed2',
		price: 12333,
		varnish: 'b',
		id: 'product2'
	}
]


const order = {
	contact: {},
	products: []
}

// add all the product id's to the order object
for (let i = 0; i < cart.length; i++) {
	const product = cart[i]
	
	order.products.push(product.id)
}

console.log(order)

function getProductsFromLocalStorage() {
  const cs = localStorage.getItem('cart');
  if (cs === null) {
    addProduct();
  } else {
    $.each(cs.products, function(key, value) {
      cartList.prepend($('<li class="product"><div class="product-image"><a href="#0"><img src="'+ value.image +'" alt="placeholder"></a></div><div class="product-details"><h3><a href="#0">' + value.name + '</a></h3><span class="price">${value.price}</span><div class="actions"><a href="#0" class="delete-item">Delete</a><a class="delete-item">' + value.size + '</a><a class="delete-item">' + value.color + '</a><div class="quantity"><label for="cd-product-' + value.productId + '">Qty</label><span class="select"><select id="cd-product-' + value.productId + '" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'));
    });
  }
}
order.product.push(productId)


fetch('http://localhost:3000/api/furniture/order', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(order)
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch(error =>{
  console.error(error)
})

})

body.appendChild(form)
form.appendChild(fBody)
fBody.appendChild(firstNameLabel)
fBody.appendChild(firstNameInput)
fBody.appendChild(lastNameLabel)
fBody.appendChild(lastNameInput)
fBody.appendChild(addressLabel)
fBody.appendChild(addressInput)
fBody.appendChild(emailLabel)
fBody.appendChild(emailInput)
fBody.appendChild(button)

console.log

