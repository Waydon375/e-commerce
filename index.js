const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

// const product = [
//     {
//         id:1,
//         title:"Air Force",
//         price: R2220,
//         colors:[
//             {
//             code:"black",
//             img: './img/air.png',
//         },
//         {
//             code:"darkblue",
//             img:"./img/air2.png",
//         }
//     ]
//     },

//     {
//         id: 2,
//         title: "Air Jordan",
//         price:2800,
//         colors:[{
//             code: "grey/black/orange",
//             img: "./img/jordan.png",
//         },
//         {
//             code:'grey/black',
//             img: "./img/jordan2.jpeg",
//         }
//     ]
//     },
//     {
//         id:3,
//         title:"Blazer",
//         price:R3500,
//         color: [
//             {
//                 code:'white/black',
//                 img:'./img/blazer.png',
//         },
//         {
//             code:'green/white',
//             img:'./img/blazer2.png',
//         }
//     ]
//     },
//     {
//         id: 4,
//         title:'Crater',
//         price:R2400,
//         colors:[{
//             code:'black/white',
//             img:'./img/crater.png'
//         }]
//     }

// ]

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

    });
});
