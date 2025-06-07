let products = {
  data:[{
    productName: 'Shirt White',
    category: 'Topwear',
    price: '1700',
    image: 'images/Topwear/70c61d829f558494811a37b4fbff83f4.jpg'
  },
  {
    productName: 'Shirt Black',
    category: 'Topwear',
    price: '2000',
    image: 'images/Topwear/191915c8aab1dcf71bb41312c1ba9c53.jpg'
  },
  {
    productName: 'Shirt Yellow',
    category: 'Topwear',
    price: '2500',
    image: 'images/Topwear/89472724846ef25fd3679c9258b433b1.jpg'
  },
  {
    productName: 'Jeans',
    category: 'Bottomwear',
    price: '8000',
    image: 'images/Bottomwear/a47d627abb73802071d3ebaef32bc61d.jpg'
  }
  ,{
    productName: 'Necklace',
    category: 'Accessories',
    price: '700',
    image: 'images/Accessories/990d0dff85746cdca0bbe82c7981439a.jpg'
  }
  ,{
    productName: 'Watch',
    category: 'Accessories',
    price: '10000',
    image: 'images/Accessories/Watch0.jpg'
  }
  ,{
    productName: 'Watch Golden',
    category: 'Accessories',
    price: '99000',
    image: 'images/Accessories/Watch1.jpg'
  }
  ,{
    productName: 'Sunglasses',
    category: 'Accessories',
    price: '1111',
    image: 'images/Accessories/65d674596cece2e11cae49c5c31a26c3.jpg'
  }
  ,{
    productName: 'Shoes Black',
    category: 'Shoes',
    price: '14000',
    image: 'images/Shoes/471f3ead011551c8c6d85681c17d6b53.jpg'
  }
  ]
}

for (let i of products.data) {
  let card = document.createElement('div');
  card.classList.add('card',i.category,'hide');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');

  let image = document.createElement('img');
  image.setAttribute('src', i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement('div');
  container.classList.add('container');

  let name = document.createElement('h5');
  name.classList.add('product-name');
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  
  let price = document.createElement('h6');
  price.innerText = i.price + '₸';
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById('products')
  .appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(
    ".button-value");
    buttons.forEach(button => {
    if (value.toUpperCase() === button.innerText.
    toUpperCase()){
      button.classList.add('active');
    }
    else {
      button.classList.remove('active');
    }
  });

  let elements = document.querySelectorAll('.card');

  elements.forEach(element => {
    if (value.toUpperCase() === 'ALL') {
      element.classList.remove('hide');
    }
    else{
      if(element.classList.contains(value)){
        element.classList.remove('hide');
      }
      else{
        element.classList.add('hide');
      }
    }
  })
}

document.getElementById('search').addEventListener
('click', () => {
  let searchInput = document.getElementById
  ("search-input").value;
  let elements = document.querySelectorAll
  ('.product-name');
  let cards = document.querySelectorAll('.card');
  
  elements.forEach((element, index) => {
    if(element.innerText.includes
    (searchInput.toUpperCase())) {
      cards[index].classList.remove('hide');
    } else {
      cards[index].classList.add('hide');
    }
  })
})

window.onload = () => {
  filterProduct('all');
}