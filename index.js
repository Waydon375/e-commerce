const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
    {
        id: 1,
        title: "Air Force",
        price: 2220,
        colors: [
            {
                code: "black",
                img: './img/air.png',
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            }
        ]
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 2800,
        colors: [
            {
                code: 'white',
                img: "./img/jordan.png",
            },
            {
                code: 'grey',
                img: "./img/jordan2.jpeg",
            }
        ]
    },
    {
        id: 3,
        title: "Blazer",
        price: 3500,
        colors: [
            {
                code: 'white',
                img: './img/blazer.png',
            },
            {
                code: 'green',
                img: './img/blazer2.png',
            }
        ]
    },
    {
        id: 4,
        title: 'Hippie',
        price: 1800,
        colors: [
            {
                code: 'darkgrey',
                img: './img/hippie.png',
            },
            {
                code: " grey",
                img: './img/hippie2.png',
            }
        ]
    },
    {
        id: 5,
        title: 'Crater',
        price: 2400,
        colors: [
            {
                code: 'black',
                img: './img/crater.png',
            },
            {
                code: 'white',
                img: './img/crater2.png',
            }
        ]
    }
];

let chosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color"); 
const currentProductSize = document.querySelectorAll(".size"); 

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = product[index];

        
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `R${chosenProduct.price}`;
        currentProductImg.src = chosenProduct.colors[0].img;
        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});
currentProductColors.forEach((color ,index)=>{
    color.addEventListener('click', ()=>{
        currentProductImg.src = chosenProduct.colors[index].img
    })
})