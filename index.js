const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const product = [
    {
        id:1,
        title:"Air Force",
        price: R2220,
        colors:[
            {
            code:"black",
            img: './img/air.png',
        },
        {
            code:"darkblue",
            img:"./img/air2.png",
        }
    ]
    },

    {
        id: 2,
        title: Jordan,
        price:2800,
        colors:[{
            code:
        }]
    },
]

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});
