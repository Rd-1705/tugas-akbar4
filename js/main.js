const products = [{
    id: 1,
    name: "Beat",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-beat-3-03062024-050824.png",
    price: "Rp.18.000.000,00",
    desc: [
        "Warna : Blue",
        "Tipe Mesin : 4-Langkah, SOHC, eSP",
        "Volume Langkah	: 109,5cc",
    ],

},
{
    id: 2,
    name: "Beat Streat",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-product-beat-street-03062024-044327.png",
    price: "Rp.19.000.000,00",
    desc: [
        "Warna : Beown",
        "Tipe Mesin : 	4-Langkah, SOHC, eSP",
        "Volume Langkah	: 109,5cc",
    ],
},
{
    id: 3,
    name: "Scoopy",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/ahm-chic-2023-variant-web-stylish-green-reverse-2-26102023-030159.png",
    price: "Rp.22.500.000,00",
    desc: [
        "Warna : Green",
        "Tipe Mesin : 4-Langkah, SOHC dengan Pendingin Udara, eSP",
        "Volume Langkah	: 109,5cc",
    ],
},
{
    id: 4,
    name: "Vario 125",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-vario-125-04062024-094941.png",
    price: "Rp.23.300.000,00",
    desc: [
        "Warna : Red",
        "Tipe Mesin : 4-Langkah, SOHC, eSP, Pendinginan Cairan",
        "Volume Langkah	: 124,8 cc",
    ],
},
{
    id: 5,
    name: "ADV 160",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/ahm-explore-side-view-tough-mattebrown-03112023-074815.png",
    price: "Rp.36.000.000,00",
    desc: [
        "Warna : Matte Brown",
        "Tipe Mesin : 4-Langkah, 4-Katup, eSP+",
        "Volume Langkah	: 156,9 cc",
    ],
}, {
    id: 6,
    name: "Sonic 150R",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/sonic-150r-2-27052021-092049.png",
    price: "Rp.27.000.000,00",
    desc: [
        "Warna : Matte Black",
        "Tipe Mesin : 4 Langkah, DOHC - 4 Katup",
        "Volume Langkah	: 149.16 cc",
    ],
}, {
    id: 7,
    name: "CB150R Streetfire",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/cb1504-27052021-092449.png",
    price: "Rp.31.700.000,00",
    desc: [
        "Warna : Matte Red",
        "Tipe Mesin : 4 Langkah, DOHC 4 Katup",
        "Volume Langkah	: 149.16 cc",
    ],
}, {
    id: 8,
    name: "CBR150R",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-50845-24112022-071000.png",
    price: "Rp.38.500.000,00",
    desc: [
        "Warna : Red Black",
        "Tipe Mesin : 	4-Langkah, DOHC",
        "Volume Langkah	: 149.16 cc",
    ],
},
{
    id: 9,
    name: "Supra X 125 FI",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
    price: "Rp.20.000.000,00",
    desc: [
        "Warna : Golden Matte Black",
        "Tipe Mesin : 4-Langkah, SOHC, Silinder Tunggal",
        "Volume Langkah	: 124,89 cc",
    ],
},
{
    id: 10,
    name: "GTR 150",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
    price: "Rp.26.000.000,00",
    desc: [
        "Warna : Sporty Spartan Red",
        "Tipe Mesin : 4-Langkah, DOHC, 4 Katup",
        "Volume Langkah	: 149.16 cc",
    ],
}, {
    id: 11,
    name: "Honda Rebel 500",
    image: "https://www.astra-honda.com/hondabigbike/photos/20230510145942_honda-rebel.png  ",
    price: "Rp.8.000.000,00",
    desc: [
        "Warna : PEARL SMOKY GRAY",
        "Tipe Mesin : 4-Stroke, DOHC Parallel Twin Cylinder",
        "Volume Langkah	: 471,03 cc",
    ],
}, {
    id: 12,
    name: "Supercub C125",
    image: "https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/400x300-pxl-03052024-061642-1-10052024-062406.png",
    price: "Rp.77.600.000,00",
    desc: [
        "Warna : Matte Axis Gray Metallic",
        "Tipe Mesin : 4-stroke SOHC 2-Valve",
        "Volume Langkah	: 124 cc",
    ],
},
]


function card(produc) {
    let content = document.querySelector('.content');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let img = document.createElement('img');
    img.src = produc.image;
    let h1 = document.createElement('h2');
    h1.textContent = produc.name;
    let h2 = document.createElement('h3');
    h2.textContent = produc.price;
    let ul = document.createElement("ul");
    produc.desc.map((d) => {
        let li = document.createElement('li');
        li.textContent = d;
        ul.appendChild(li);
    })
    let buy = document.createElement('button');
    buy.textContent = 'Beli Sekarang';
    buy.addEventListener('click', () => {
        let bu = confirm('Apakah anda yakin membeli produk ini?')
        if(bu == true){
            alert('Terimakasih Sudah Membeli Produk Kami');
        }
        else{
            alert('Terimakasih, Silahkan Berikan Tangkapan Anda')
        }
    });
    let like = document.createElement('button');
    like.textContent = 'like';
    like.addEventListener('click', () => alert('Anda menyukai product ini'));

    let com = document.createElement('button');
    com.textContent = 'Komentar';
    com.addEventListener('click', () => prompt('Tambahkan Komentar'));

    figcaption.appendChild(h1);
    figcaption.appendChild(ul);
    figcaption.appendChild(h2);
    figcaption.appendChild(like);
    figcaption.appendChild(buy);
    figcaption.appendChild(com);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    content.appendChild(figure);

    buy.style.backgroundColor='mintcream';
    like.style.backgroundColor='mintcream';
    com.style.backgroundColor='mintcream';
}
products.map((produc) => {
    card(produc);
})

let start = 0;
otomatis();

function otomatis(){
    const slider = document.querySelectorAll('.slide');
    // console.log(slider);

    for (let i = 0; i < slider.length; i++){
        slider[i].style.display='none';
    }
    if(start >= slider.length){
        start = 0;
    }
    slider[start].style.display='block';
    start++;
    setTimeout(otomatis, 2000);
}


