const cartExists = localStorage.getItem('cart')

if(! cartExists) {
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
const button = document.createElement('button')
button.textContent = 'Submit'

fBody.setAttribute('class', 'mb-3')
firstNameLabel.setAttribute('class', 'form-label')
firstNameLabel.setAttribute('for','first-name')
firstNameInput.setAttribute('type','text')
firstNameInput.setAttribute('class', 'form-control')
firstNameInput.setAttribute('required', '')
firstNameInput.setAttribute('id','first-name')
lastNameLabel.setAttribute('class', 'form-label')
lastNameLabel.setAttribute('for','Last-name')
lastNameInput.setAttribute('required', '')
lastNameInput.setAttribute('type','text')
lastNameInput.setAttribute('class', 'form-control')
lastNameInput.setAttribute('id','Last name')
addressLabel.setAttribute('class', 'form-label')
addressLabel.setAttribute('for', 'address')
addressInput.setAttribute('type', 'text')
addressInput.setAttribute('required', '')
addressInput.setAttribute('class', 'form-control')
addressInput.setAttribute('id', 'Address')
cityLabel.setAttribute('class', 'form-label')
cityLabel.setAttribute('for', 'City')
cityInput.setAttribute('type', 'text')
cityInput.setAttribute('required', '')
cityInput.setAttribute('class', 'form-control')
cityInput.setAttribute('id', 'City')
emailLabel.setAttribute('class', 'form-label')
emailLabel.setAttribute('for', 'Email')
emailInput.setAttribute('type', 'email')
emailInput.setAttribute('required', '')
emailInput.setAttribute('class', ' form-control')
emailInput.setAttribute('id', 'Email')
button.setAttribute('class', 'btn btn-primary')
button.setAttribute('type', 'submit')
var myModal = new bootstrap.Modal(document.getElementById('myModal'))
form.addEventListener('submit', function(event){
	event.preventDefault();
	const cartString = localStorage.getItem('cart')
	const cart = JSON.parse(cartString)
	myModal.show()

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


for (let i = 0; i < cart.length; i++) {
	const product = cart[i]
	
	order.products.push(product.id)
}

console.log(order)




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
fBody.appendChild(cityLabel)
fBody.appendChild(cityInput)
fBody.appendChild(emailLabel)
fBody.appendChild(emailInput)
fBody.appendChild(button)

console.log

