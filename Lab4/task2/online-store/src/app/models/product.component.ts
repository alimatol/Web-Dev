import {Product} from './product.model';
import { CommonModule } from '@angular/common';

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Cal Newport: Deep Work - В работу с головой",
        description:"Deep Work: Rules for Focused Success in a Distracted World by Cal Newport is a compelling exploration of the importance of deep, focused work in an age filled with distractions. Newport argues that the ability to concentrate without distraction on cognitively demanding tasks is becoming increasingly rare and valuable in today's economy." ,
        price: 3090,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h63/hfa/84530036178974.jpg?format=preview-large",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h63/hfa/84530036178974.jpg?format=preview-large",
            "https://resources.cdn-kaspi.kz/img/m/p/h35/h6e/84530036244510.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/cal-newport-deep-work---v-rabotu-s-golovoi-114709626/?c=750000000"
    },
    {
        id: 2,
        name: "Morgan Housel: The Psychology of Money",
        description:"The Psychology of Money by Morgan Housel is a highly acclaimed book that explores the complex relationship people have with money. Published by Harriman House in 2020, this book has sold over four million copies and is recognized for its insightful lessons on wealth, greed, and happiness." ,
        price: 3090,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hf7/hb1/84667254472734.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hf7/hb1/84667254472734.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h2c/hd3/84667254538270.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/morgan-housel-the-psychology-of-money-115186606/?c=750000000"
    },
    {
        id: 3,
        name: "Brianna Wiest: 101 Essays That Will Change The Way You Think",
        description:"101 Essays That Will Change The Way You Think by Brianna Wiest is a thought-provoking collection of essays that delve into various aspects of life, personal growth, and self-reflection. Published by Thought Catalog Books in 2018, this book is designed to inspire readers to rethink their perspectives and challenge their beliefs" ,
        price: 3090,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h04/h15/84654278443038.png?format=preview-large",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h04/h15/84654278443038.png?format=preview-large",
            "https://resources.cdn-kaspi.kz/img/m/p/h95/ha1/84654278508574.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h02/h7f/84654278574110.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/brianna-wiest-101-essays-that-will-change-the-way-you-think-115143898/?c=750000000"
    },
    {
        id: 4,
        name: "Yuval Noah Harari: Sapiens: A Brief History of Humankind",
        description:"Harari's main argument is that H. sapiens came to dominate the world because they are the only animal that can cooperate flexibly in large numbers. He argues that prehistoric H. sapiens were a key cause of the extinction of other human species such as the Neanderthals and numerous other megafauna. He further argues that the ability of H. sapiens to cooperate in large numbers arises from its unique capacity to believe in things existing purely in the imagination, such as gods, nations, money and human rights. " ,
        price: 4960,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/pfa/p7f/37480705.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/pfa/p7f/37480705.jpg?format=gallery-medium",
        ],
        link: "https://kaspi.kz/shop/p/yuval-noah-harari-sapiens-a-brief-history-of-humankind-138338586/?c=750000000"
    },
    {
        id: 5,
        name: "Фицджеральд Ф. С.: he Great Gatsby",
        description:"Двадцатые ещё только начались, а вы уже от них устали? Вернитесь в Ревущие двадцатые с Великим Гэтсби! Фрэнсис Скотт Фицджеральд откроет перед вами время, когда будущее могло быть только прекрасным. Джаз, вечеринки и деньги, льющиеся рекой, - такова повседневность героев книги." ,
        price: 5397,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h58/h99/69207479320606.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h58/h99/69207479320606.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h47/h8c/69207479844894.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/fitsdzheral-d-f-s-he-great-gatsby-108970887/?c=750000000"
    },
    {
        id: 6,
        name: "Hector Garcia and Francesc Miralles: Ikigai: The Japanese",
        description:" Ikigai (pronounced ee-key-guy) translates to 'a reason to live' or 'a reason to jump out of bed in the morning.' It embodies the intersection of four essential elements: what you love, what you are good at, what the world needs, and what you can be paid for. This balance is believed to lead to a meaningful and joyful life." ,
        price: 8900,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p70/pe9/62053914.jpeg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p70/pe9/62053914.jpeg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pda/pec/62053915.jpeg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p43/pf0/62053916.jpeg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pad/pf3/62053917.jpeg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/hector-garcia-and-francesc-miralles-ikigai-the-japanese-secret-to-a-long-and-happy-life-119617931/?c=750000000"
    },
    {
        id: 7,
        name: "Cal Newport: Deep Work - В работу с головой",
        description:"Deep Work: Rules for Focused Success in a Distracted World by Cal Newport is a compelling exploration of the importance of deep, focused work in an age filled with distractions. Newport argues that the ability to concentrate without distraction on cognitively demanding tasks is becoming increasingly rare and valuable in today's economy." ,
        price: 3090,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h63/hfa/84530036178974.jpg?format=preview-large",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h63/hfa/84530036178974.jpg?format=preview-large",
            "https://resources.cdn-kaspi.kz/img/m/p/h35/h6e/84530036244510.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/cal-newport-deep-work---v-rabotu-s-golovoi-114709626/?c=750000000"
    },{
        id: 8,
        name: "Дойл А. К.: The Adventures of Sherlock Holmes. Приключения",
        description:"«Приключения Шерлока Холмса» – первый из сборников рассказов про Шерлока Холмса. В них доктор Ватсон, недавно поселившийся вместе с таинственным детективом Холмсом, помогает ему раскрывать таинственные происшествия, которые не по силам констеблям. Артур Конан Дойл не был первопроходцем жанра детектива, но именно его герои запомнились читателям лучше всего. В чем тому причина? В новаторском использовании улик, которые дразнили и запутывали? В обаянии героев? В блестящем стиле автора?" ,
        price: 7013,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h8c/hea/84627710050334.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h8c/hea/84627710050334.jpg?format=gallery-medium",
        ],
        link: "https://kaspi.kz/shop/p/doil-a-k-the-adventures-of-sherlock-holmes-prikljuchenija-sherloka-holmsa-115035220/?c=750000000"
    },
    {
        id: 9,
        name: "Гёте И. В.: Фауст. Трагедия Faust. Eine Tragödie",
        description:"Средневековый алхимик и чернокнижник доктор Фауст продал душу дьяволу в погоне за знаниями и удовольствиями таков сюжет немецкой легенды, которую Гёте положил в основу трагедии Фауст." ,
        price: 11834,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h3f/h97/67569712529438.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h3f/h97/67569712529438.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hec/h4c/67569713217566.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/gjote-i-v-faust-tragedija-faust-eine-trag-die-108317930/?c=750000000"
    },
    {
        id: 10,
        name: "Penguin Books: The Little Prince",
        description:"Penguin Books: The Little Prince" ,
        price: 9400,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p2a/p6e/3444509.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p2a/p6e/3444509.jpg?format=gallery-medium",
        ],
        link: "https://kaspi.kz/shop/p/penguin-books-the-little-prince-128602750/?c=750000000"
    },
]

