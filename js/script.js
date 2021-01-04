

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var ProductCategoryInput = document.getElementById("ProductCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var mainBtn = document.getElementById("mainBtn");
mainBtn.value = "add";

var indx ;

var productContainer;
if (localStorage.getItem("myProduct") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("myProduct")); 
    desplay();
}





function addProduct() {
  
  if (mainBtn.value == "update")
  {
    updateProduct();
    document.getElementById("mainBtn").innerHTML = "add prodact";
    mainBtn.value = "add";
    console.log(mainBtn.value)
  }

else if (mainBtn.value == "add")
{
    var product = {

        name: productNameInput.value,
        price: productPriceInput.value,
        category: ProductCategoryInput.value,
        desc: productDescInput.value,
    };

    productContainer.push(product);
    localStorage.setItem("myProduct", JSON.stringify(productContainer));

   clearForm();
    desplay();
    console.log(productContainer);
}


}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    ProductCategoryInput.value = "";
    productDescInput.value = "";
}




function desplay() {

    var cartona = ``;

    for (var i = 0; i < productContainer.length; i++) {

        cartona += `<tr>
        <td>` + i + `</td>
        <td>` + productContainer[i].name + `</td>
        <td>` + productContainer[i].price + `</td>
        <td>` + productContainer[i].category + `</td>
        <td>` + productContainer[i].desc + `</td>
        <td> <button onclick="setInputForProduct(`+i+`)" class="btn btn-outline-warning">update</button> </td>
        <td> <button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button> </td>

    </tr> `;

        
    }

document.getElementById("tableBody").innerHTML = cartona;
}



function deleteProduct(productIndex) {
    productContainer.splice(productIndex , 1);
    localStorage.setItem("myProduct", JSON.stringify(productContainer));
    desplay();
}




















function searchProduct(searchTerm) {
    
    var cartona = ``;
    for (var i = 0; i < productContainer.length; i++) {

        if(productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {

              cartona += `<tr>
                    <td>` + i + `</td>
                    <td>` + productContainer[i].name + `</td>
                    <td>` + productContainer[i].price + `</td>
                    <td>` + productContainer[i].category + `</td>
                    <td>` + productContainer[i].desc + `</td>
                    <td> <button class="btn btn-outline-warning">update</button> </td>
                    <td> <button onclick="deleteProduct(` + i + `)" class="btn btn-outline-danger">delete</button> </td>
            
                </tr> `;
        }
        else
        {
          console.log("");
        }
        
    }
    
    document.getElementById("tableBody").innerHTML  = cartona ;
}







function setInputForProduct(productIndex)
{
   indx = productIndex;
  productNameInput.value = productContainer[productIndex].name;
  productPriceInput.value = productContainer[productIndex].price;
  ProductCategoryInput.value = productContainer[productIndex].category;
  productDescInput.value = productContainer[productIndex].desc;
  
  document.getElementById("mainBtn").innerHTML = "update";
  mainBtn.value = "update";
  console.log(mainBtn.value)
 console.log(indx);
 
  deleteProduct(indx);
}



function updateProduct()
{
  var newProductUpdated = {

    name: productNameInput.value,
    price: productPriceInput.value,
    category: ProductCategoryInput.value,
    desc: productDescInput.value,
  };
  
  productContainer.splice(indx , 0 , newProductUpdated);
    localStorage.setItem("myProduct", JSON.stringify(productContainer));
    desplay();
    clearForm();
    return
  

}







