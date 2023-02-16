
let serial = 0;

document.getElementById('first-card').addEventListener('click', function(){
    // console.log('First Button has been clicked');

    // --------------------------Get The Data--------------------
     serial = serial + 1;
    const firstProductName = document.getElementById('first-name').innerText;
    const firstPrice = document.getElementById('first-price').innerText;
    const firstQuantity = document.getElementById('first-quantity').innerText;
    // console.log(firstProductName,firstPrice,firstQuantity);


    const priceTotal = parseFloat(firstPrice) * parseFloat(firstQuantity);
    // console.log(priceTotal);


    // --------------------------Show The Data---------------------

    // const container = document.getElementById('table-container');

    // const tr = document.createElement('tr');
    // tr.innerHTML = ` 
    // <td>${1}</td>
    // <td>${firstProductName}</td>
    // <td>${firstPrice}</td>
    // <td>${firstQuantity}</td>
    // <td>${priceTotal}</td>
    
    // `;
    // container.appendChild(tr);

    // Just Call displayData Function
    displayData(firstProductName, firstPrice, firstQuantity, priceTotal);
    disableButton('first-card');
    
    
})

document.getElementById('second-card').addEventListener('click', function(e){
    //  console.log(e.target.parentNode.parentNode.children[0].innerText);
  
    serial = serial + 1;
    const sProductName = e.target.parentNode.parentNode.children[0].innerText;
    const sProductPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const sQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    

    const secondSumTotal = parseFloat(sProductPrice) - parseFloat(sQuantity);
    
  

    displayData(sProductName, sProductPrice, sQuantity, secondSumTotal);
    disableButton('second-card');

})

document.getElementById('third-card').addEventListener('click', function(){
    // console.log('First Button has been clicked');

    // --------------------------Get The Data--------------------
     serial = serial + 1;
    const thirdProductName = document.getElementById('third-title').innerText;
    const thirdPrice = document.getElementById('third-price').innerText;
    const thirdQuantity = document.getElementById('third-quantity').innerText;
    // console.log(firstProductName,firstPrice,firstQuantity);


    const thirdPriceTotal = parseFloat(thirdPrice) * parseFloat(thirdQuantity);
    // console.log(priceTotal);


   
    displayData(thirdProductName, thirdPrice, thirdQuantity, thirdPriceTotal);
    disableButton('third-card');
    
    
})
document.getElementById('forth-card').addEventListener('click', function(){
    // console.log('First Button has been clicked');

    // --------------------------Get The Data--------------------
     serial = serial + 1;
    const thirdProductName = document.getElementById('forth-title').innerText;
    const thirdPrice = document.getElementById('forth-price').innerText;
    const thirdQuantity = document.getElementById('forth-quantity').innerText;
    // console.log(firstProductName,firstPrice,firstQuantity);


    const thirdPriceTotal = parseFloat(thirdPrice) * parseFloat(thirdQuantity);
    // console.log(priceTotal);


   
    displayData(thirdProductName, thirdPrice, thirdQuantity, thirdPriceTotal);
    disableButton('forth-card')
    
    
})


// ---------------------Last Card ----------------------
  document.getElementById('last-card').addEventListener('click', function(){

    serial = serial + 1;
    const productName = document.getElementById('last-title').innerText;
    const productPrice = document.getElementById('first-input').value;
    const productQuantity = document.getElementById('second-input').value;
    console.log(productName,productPrice,productQuantity);

  const total = parseFloat(productPrice) / parseFloat(productQuantity);
  console.log(total);

  displayData(productName, productPrice, productQuantity, total);
  disableButton('last-card')

  })

//   Disable Button 
function disableButton(id){
    document.getElementById(id).setAttribute('disabled', true);
}

  


















//    --------------------- Common Function for Display  /Show Data in Function-------------

function displayData(ProductName, Price, Quantity, priceTotal){
    const container = document.getElementById('table-container');

    const tr = document.createElement('tr');
    tr.innerHTML = ` 
    <td>${serial}</td>
    <td>${ProductName}</td>
    <td>${Price}</td>
    <td>${Quantity}</td>
    <td>${priceTotal}</td>
    
    `;
    container.appendChild(tr);
    
}