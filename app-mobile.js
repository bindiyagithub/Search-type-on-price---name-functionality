
// const url = 'https://dummyjson.com/products';
let myMobileProducts = [];
let carts = []; // for add to cart mobile image
let myarray = []; // for search item 



// for search the item by choosing from dropdown 

        function searchItems()
        {
            let searchTerm = document.getElementById("searchTerm").value;

            
          let filterProducts =  myarray.filter((value,index)=> {

                let ty = document.getElementById("searchType").value;
                if(ty== "start")
                {
                    return value[document.getElementById("mykey").value].startsWith(searchTerm);

                }
                else if(ty == "end")
                {
                    return value[document.getElementById("mykey").value].endsWith(searchTerm) == true;

                }
                else if(ty == "great")
                {

                    return parseFloat(value[document.getElementById("mykey").value]) > parseFloat(searchTerm);
                }
                else if(ty == "less")
                {

                    return parseFloat(value[document.getElementById("mykey").value]) < parseFloat(searchTerm);
                }
                else if(ty == "eq")
                {

                    return parseFloat(value[document.getElementById("mykey").value]) == parseFloat(searchTerm);
                }
                
                else
                {
                return value[document.getElementById("mykey").value].indexOf(searchTerm)>=0;

                }

            });


            display(filterProducts,searchTerm);

        }

fetch("https://dummyjson.com/products")
.then(y=> y.json())
.then(y=>
{
  
  console.log(y.products);
  myMobileProducts = y.products;
  myarray = [...y.products];
  display(y.products);

}) 



function display(data)
{
     myMobileProducts =  data;
     const mobileProduct = data.map((v , index)=>
     {
                return(`<div class="col-4 mt-5">
                  <div class="card"> 
                <div class="card-header mb-2  mx-2">
                  <img class="card-img-top" src="${v.thumbnail}" alt="Card image" 
                      width="100" height="350">
                </div>
     
               <div class="card-body">
               <h4 class="card-title">${v.title}</h4>
               <h5 class="text-secondary">category :${v.category}</h5>
               <h5>${v.price}</h5>
               <p class="card-text">${v.description}</p>
               </div>
     
                
              </div>
              </div>`)
              
     });
             
     document.getElementById("mobile").innerHTML= mobileProduct.join(" ");
}
display(myMobileProducts);



  
  
