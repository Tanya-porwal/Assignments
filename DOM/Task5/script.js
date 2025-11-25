const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "SmartPhone", category: "Electronics" },
  { name: "Headphones", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Jacket", category: "Clothing" },
  { name: "Book-Javascript Guide", category: "Books" },
  { name: "Book-HTML Guide", category: "Books"},
  { name: "Sweater", category: "Clothing" },
  { name: "Keyboard", category: "Electronics" },
];

function displayProducts(list){
    const ul=document.getElementById("productList");
    ul.innerHTML="";

    list.forEach(product=> {
        const li=document.createElement("li");
        li.textContent=`${product.name} `;
        ul.appendChild(li);
    });
}

displayProducts(products);

document.querySelectorAll(".btn").forEach(btn=> {
    btn.addEventListener("click",() =>{
        const category=btn.getAttribute("data-filter");

        if(category==="All"){
            displayProducts(products);
        }else{
            const filtered=products.filter(p => p.category===category);
            displayProducts(filtered);
        }
    });
});