let productSection = document.querySelector('.products');
let allBtn = document.querySelector('.all-btn');
let manBtn = document.querySelector('.man-btn');
let womenBtn = document.querySelector('.women-btn');
let TechBtn = document.querySelector('.tech-btn');
let jewellaryBtn = document.querySelector('.jewellary-btn'); 
let BuyBtns = document.querySelectorAll('.Buy-btn'); 
let Cartvalue = document.querySelector('.cart-value'); 
let type;

const process = async () =>  {
    try{
        const {data} = await axios.get('https://fakestoreapi.com/products?limit=60')
        console.log(data);
        switch(type){
        case "all":{ allProducts(data);  
                        break;  }
        case "Men":{ manproducts(data);  
            break;  }
        case "women":{ womenproducts(data);  
            break;  }
        case "Tech":{ Techproducts(data);  
            break;  }
        case "jewelery":{ jewellaryproducts(data);  
            break;  }
        }
    }catch(e){
        console.log(e)
    }
}


function  allProducts(data){
    console.log(data);
    productSection.innerHTML = "";
    data.map( (val,index) => {
        console.log(val.rating.rate)
        boilerplate(val,index);
    })
}


function manproducts(data){
    console.log(data);
    productSection.innerHTML = "";
    data.map((val,index) => {
        if(val.category.includes('men') && !val.category.includes('women'))
            {
                boilerplate(val,index);
            }
            else {
                return;
            }
                }
    )
}

function womenproducts(data){
    console.log(data);
    productSection.innerHTML = "";
    data.map((val,index) => {
        if(val.category.includes('women'))
            {
                boilerplate(val,index);
            }
            else {
                return;
            }
                }
    )
}

function Techproducts(data){
    console.log(data);
    productSection.innerHTML = "";
    data.map((val,index) => {
        if(val.category.includes('electronics'))
            {
                boilerplate(val,index);
            }
            else {
                return;
            }
                }
    )
}


function jewellaryproducts(data){
    console.log(data);
    productSection.innerHTML = "";
    data.map((val,index) => {
        if(val.category.includes('jewelery'))
            {
                boilerplate(val,index);
            }
            else {
                return;
            }
                }
    )
}

function boilerplate(val,index){
    productSection.innerHTML += `<div class="card">
                        <span class="rating">${val.rating.rate}</span>
                        <img src=${val.image} alt="reload-page">
                        <div class="product-info">
                        <h2 class="title">${val.title}</h2>
                        <h4 class="price">
                        $${val.price}
                        </h4>
                        <button class="Buy-btn" data-set=${index}>Buy now</button>
                        </div>
                        </div>`
}



window.addEventListener('load',function(){
    type="all";
    process();
})
allBtn.addEventListener('click' , function(){
    type="all";
    process();
})
manBtn.addEventListener('click' , function(){
    type="Men";
    process();
})
womenBtn.addEventListener('click' , function(){
    type="women";
    process();
})
TechBtn.addEventListener('click' ,function(){
    type="Tech";
    process();
})
jewellaryBtn.addEventListener('click' , function(){
    type="jewelery";
    process();
})

BuyBtns.forEach( btn => {
    console.log(btn)
    btn.addEventListener('click',function(e){
        alert(e.target.data-set)
    })
})