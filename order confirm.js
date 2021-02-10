fetch('http://localhost:5000/api/furniture')
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
  

  card.setAttribute('class','card mb3')
  row.setAttribute('class','row no-gutters')
  colImg.setAttribute('class','col-md-4')
  img.src = product.imageUrl
  img.alt = product.name
  img.setAttribute('class', 'card-img')
  col.setAttribute('class', 'col-md-8')
  cardBody.setAttribute('class', 'card-body')
  cardTitle.setAttribute('class', 'card-title')
  cardTitle.textContent = product.name
  cardText.setAttribute('class', 'card-text')
  cardText.textContent = product.description
  button.setAttribute('class', 'button btn btn-primary')
  button.textContent = 'More Details'

  card.appendChild(row)
  row.appendChild(colImg)
  row.appendChild(col)
  colImg.appendChild(img)
  col.appendChild(cardBody)
  cardBody.appendChild(cardTitle)
  cardBody.appendChild(cardText)
  cardBody.appendChild(button)

  return card
}
