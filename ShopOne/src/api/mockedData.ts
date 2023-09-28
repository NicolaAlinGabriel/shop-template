import { ProductsInterface } from "@customTypes/other"
import { Categories } from "@customTypes/other/data";

const mockedProducts: ProductsInterface[] = [
    {
        name: 'Machine Gun',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/PEO_M249_Para_ACOG.jpg',
        price: '19665.99 lei',
        rating: Math.random() * 5 + 1,
        category: "Guns",
        reviews: [{
            name: "Marcel Pavel",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "God bless"
        }],
        details: "Good for spreading freedom and shooting schools",
        x: {
            name: "a",
            icon: 'y'
        }

    },
    {
        name: "Icoana Sfintita ",
        icon: 'https://s.cdnmpro.com/874714738/p/m/6/icoana-argint-maica-domnului-din-ierusalim-fecioara-maria-cu-pruncul~6966.jpg',
        price: '665.99 lei',
        rating: Math.random() * 5 + 1,
        category: "Magic",
        reviews: [{
            name: "Stela si Arsinel",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "Buna de te doare inima!"
        }],
        details: "Nu tine locul pastilelor de inima",
        x: {
            name: "x",
            icon: 'y'
        }
    },
    {
        name: "Lumanare Parfumata Tamaie ",
        icon: 'https://cdn.notinoimg.com/detail_thumb_2k/woodwick/663595769655-o/woodwick-trilogy-calming-retreat-lumanare-parfumata-cu-fitil-din-lemn-hearthwick___5.jpg',
        price: "20.99 lei",
        rating: Math.random() * 5 + 1,
        category: "Home",
        reviews: [{
            name: "Papa de la Roma",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "Ma simt ca acasa!"
        }],
        details: "Miroase a tamaie",
        x: {
            name: "a",
            icon: 'y'
        }
    },
    {
        name: "Carpeta rapirea din serai ",
        icon: 'https://frankfurt.apollo.olxcdn.com/v1/files/zifm73p9w84l-RO/image;s=644x461',
        price: "11111120.99 lei",
        rating: Math.random() * 5 + 1,
        category: "Home",
        reviews: [{
            name: "Mamaie",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "Tine de cald la nepoti!"
        }],
        details: "Clasic",
        x: {
            name: "x",
            icon: 'y'
        }
    },
    {
        name: "Fasole cu ciolan",
        icon: 'https://savoriurbane.com/wp-content/uploads/2018/10/Iahnie-de-fasole-cu-ciolan-afumat-re%C8%9Beta-pas-cu-pas-savori-urbane.jpg',
        price: "2 lei",
        rating: Math.random() * 5 + 1,
        category: "Food",
        reviews: [{
            name: "Veronica Micle",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "II faceam din asta si lu Mihaitza"
        },
        {
            name: "Mihaitza",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "Veronica e o zdreanta"
        },
        {
            name: "I.L Caragiale",
            score: Math.floor(Math.random() * 5) + 1,
            comment: "Poate vrei bataie Misule"
        }],
        details: "cu aroma de mazare cu carnati",
        x: {
            name: "x",
            icon: 'y'
        }
    },



];


const mockedCategories: Categories =
{
    Electronice: {
        icon: 'icon'
    },

    Evlavie: {
        icon: 'icon'
    },

    Casa: {
        icon: 'icon'
    },

    Arme: {
        icon: 'icon'
    },

    Altele: {
        icon: 'icon'
    },

    Altele1: {
        icon: 'icon'
    },

    Altele2: {
        icon: 'icon'
    },

    Altele3: {
        icon: 'icon'
    },

    Altele4: {
        icon: 'icon'
    },

    Altele5: {
        icon: 'icon'
    },
};


const mockedAdvertising = [
    {
        name: "Campaign 0",
        icon: 'https://cdn.dribbble.com/userupload/3832857/file/original-7a6113387b549ffbae1595417c915134.png?compress=1&resize=1504x1128'
    },
    {
        name: `Campaign 1`,
        icon: 'https://cdn.dribbble.com/users/190664/screenshots/17460133/media/c18f6a8c24ee1509a4a61fb8cbd7f79b.png?compress=1&resize=1600x1200&vertical=top'
    },
    {
        name: `Campaign 2`,
        icon: 'https://cdn.dribbble.com/userupload/3402607/file/original-e3c2ee9179ea37d8923acdd9b1e5636a.jpeg?compress=1&resize=1504x1203'
    },
    {
        name: `Campaign 3`,
        icon: 'https://cdn.dribbble.com/users/190664/screenshots/15094349/media/cd038347b280973c9f7ddd1f529d7156.png?compress=1&resize=1600x1200&vertical=top'
    },
    {
        name: `Campaign 4`,
        icon: 'https://cdn.dribbble.com/users/190664/screenshots/18578171/media/61e0f316ff593d8913580c398154bdd8.jpeg?compress=1&resize=1600x1200&vertical=top'
    },
    {
        name: `Campaign 5`,
        icon: 'https://cdn.dribbble.com/userupload/3270671/file/original-c44fbb349a23655dd8102790e944e1ef.png?compress=1&resize=1504x1125'
    },
];




export {
    mockedProducts,
    mockedCategories,
    mockedAdvertising
}