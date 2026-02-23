import { Category } from "../models/category.model";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";

@Injectable({ providedIn: 'root' })

export class ProductService {
    categories: Category[] = [
    {id: 1, name: "Books"},
    {id: 2, name: "Smartphones"},
    {id: 3, name: "Laptops"},
    {id: 4, name: "Cameras"},
];

products: Product[] =[
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
        link: "https://kaspi.kz/shop/p/cal-newport-deep-work---v-rabotu-s-golovoi-114709626/?c=750000000",
        likes: 0,
        categoryId: 1
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
        link: "https://kaspi.kz/shop/p/morgan-housel-the-psychology-of-money-115186606/?c=750000000",
        likes: 0,
        categoryId: 1
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
        link: "https://kaspi.kz/shop/p/brianna-wiest-101-essays-that-will-change-the-way-you-think-115143898/?c=750000000",
        likes: 0,
        categoryId: 1
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
        link: "https://kaspi.kz/shop/p/yuval-noah-harari-sapiens-a-brief-history-of-humankind-138338586/?c=750000000",
        likes: 0,
        categoryId: 1
    },
    {
        id: 5,
        name: "Фицджеральд Ф. С.: he Great Gatsby",
        description:"Двадцатые ещё только начались, а вы уже от них устали? Вернитесь в Ревущие двадцатые с Великим Гэтсби! Фрэнсис Скотт Фицджеральд откроет перед вами время, когда будущее могло быть только прекрасным. Джаз, вечеринки и деньги, льющиеся рекой, - такова повседневность героев книги." ,
        price: 5397,
        rating: 5,
        image: "",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h58/h99/69207479320606.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h47/h8c/69207479844894.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/fitsdzheral-d-f-s-he-great-gatsby-108970887/?c=750000000",
        likes: 0,
        categoryId: 1
    },
    //Smartphones
    {
        id: 6,
        name: "Смартфон Apple iPhone 17 Pro 256Gb оранжевый",
        description:"Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.Этот смартфон идеально подходит для тех, кто ценит передовые технологии и безупречный дизайн. Он станет незаменимым помощником в работе, учебе и развлечениях, а также позволит вам всегда оставаться на связи." ,
        price: 796171,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000",
        likes: 0,
        categoryId: 2
    },
    {
        id: 7,
        name: "Смартфон Apple iPhone 15 128Gb черный",
        description:"Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация." ,
        price: 399837,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
        likes: 0,
        categoryId: 2
    },
    {
        id: 8,
        name: "Смартфон Apple iPhone 13 128Gb белый",
        description:"Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. " ,
        price: 312681,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hc9/h90/64209083007006.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h3b/h93/64209085235230.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h8f/hce/64209121476638.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000",
        likes: 0,
        categoryId: 2
    },
    {
        id: 9,
        name: "ССмартфон Apple iPhone 16 128Gb черный",
        description:"Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании." ,
        price: 465500,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000",
        likes: 0,
        categoryId: 2
    },
    {
        id: 10,
        name: "Смартфон Samsung Galaxy A16 6 ГБ/128 ГБ черный",
        description:"Samsung Galaxy A16 — это стильный и функциональный смартфон, который станет вашим надёжным помощником в повседневной жизни. Наслаждайтесь ярким 6.7-дюймовым Super AMOLED экраном с разрешением FHD+ и мощным 8-ядерным процессором Helio G99 для плавной работы и комфортного использования." ,
        price: 126030,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p7c/p80/10325752.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p99/p80/10325753.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-130609900/?c=750000000",
        likes: 0,
        categoryId: 2
    },

    //Laptops
       {
        id: 11,
        name: "Ноутбук PRYME OfficeBook 15.6 / 8 Гб / SSD 256 Гб / Win 11 / OfficeBook N15",
        description:"PRYME N5095 идеально подойдёт для студентов, офисных сотрудников и всех, кто ценит баланс между производительностью и мобильностью. Он легко справляется с повседневными задачами — будь то работа с документами, интернет-сёрфинг, онлайн-обучение или просмотр фильмов." ,
        price: 126030,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p2c/p4a/75516635.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p10/p4a/75516636.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pf4/p49/75516637.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/pryme-officebook-15-6-8-gb-ssd-256-gb-win-11-officebook-n15-148883799/?c=750000000",
        likes: 0,
        categoryId: 3
    },
       {
        id: 12,
        name: "Ноутбук ThundeRobot 911S Core D 15.6/ 16 Гб / SSD 512 Гб / Без ОС / JT009K00F",
        description:"Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц. Матовое покрытие экрана уменьшает количество бликов, обеспечивая комфортные условия для глаз." ,
        price: 499000,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000",
        likes: 0,
        categoryId: 3
    },
       {
        id: 13,
        name: "Ноутбук Oyan Lite X14 14.1 / 8 Гб / SSD 512 Гб / Win 11 Home / R1526",
        description:"Этот ноутбук создан для стабильной и комфортной работы с офисными приложениями, электронной почтой и веб-серфингом. Оснащен энергоэффективным процессором Intel Celeron-N4000 с базовой частотой 1.1 ГГц и максимальной частотой 2.8 ГГц, а также встроенной графикой Intel UHD Graphics 600, которая идеально подходит для выполнения повседневных задач." ,
        price: 134500 ,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/pfd/p49/48619238.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pe1/p49/48619239.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p75/p47/48619240.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/oyan-lite-x14-14-1-8-gb-ssd-512-gb-win-11-home-r1526-115724796/?c=750000000",
        likes: 0,
        categoryId: 3
    },
       {
        id: 14,
        name: "Ноутбук Biraz EVO N95 15.6/ 16 Гб / SSD 512 Гб / Win 11 / BRZ-EVO-N95",
        description:"Ноутбук Biraz EVO N95 — это мощное и современное решение для повседневных задач, учебы и работы, сочетающее высокую производительность с удобством использования. Он оснащен энергоэффективным четырехъядерным процессором Intel N95 с частотой до 3. 4 ГГц, благодаря которому легко справляется с офисными программами, браузерами, видеосвязью и базовым редактированием фото или видео." ,
        price: 193030,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/p71/pf6/41734529.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/pdd/pf8/41734530.png?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p15/pf9/41734532.png?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/biraz-evo-n95-15-6-16-gb-ssd-512-gb-win-11-brz-evo-n95-139514916/?c=750000000",
        likes: 0,
        categoryId: 3
    },
       {
        id: 15,
        name: "Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123",
        description:"Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.Этот ноутбук идеально подходит для студентов, профессионалов и всех, кто ценит компактность и высокую производительность в одном устройстве. " ,
        price: 524946,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000",
        likes: 0,
        categoryId: 3
    },

    //Photo Cameras
    {
        id: 16,
        name: "Фотокамера Canon EOS 2000D Kit EF-S 18-55 III",
        description:"Легко создавайте высококлассные фотографии с высокой детализацией и видео Full HD кинематографического качества даже в условиях слабого освещения с помощью 24,1-мегапиксельной камеры EOS 2000D. Дистанционно управляйте камерой и моментально делитесь снимками с помощью Wi-Fi*, NFC* и приложения Canon Camera Connect." ,
        price: 191046,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hee/h41/63783551434782.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hee/h41/63783551434782.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc4/hdc/63783551893534.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hc0/h20/63783552417822.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/canon-eos-2000d-kit-ef-s-18-55-iii-2240125/?c=750000000",
        likes: 0,
        categoryId: 4
    },
    {
        id: 17,
        name: "Фотокамера Sony ZV-E10 II Kit 16-50 mm",
        description:"Sony ZV-E10 II с улучшенными функциями, которые расширяют возможности его предшественника, ориентированного на создание контента, оснащена 26-мегапиксельным датчиком APS-C для более высокой производительности и высококачественных изображений в компактном форм-факторе, разработанном для видеоблогеров." ,
        price: 569469 ,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/86635299897374.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/86635299897374.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hd6/h70/86635299962910.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h39/h8d/86635300028446.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/sony-zv-e10-ii-kit-16-50-mm-121871825/?c=750000000",
        likes: 0,
        categoryId: 4
    },{
        id: 18,
        name: "Фотокамера Canon EOS 250D Kit EF-s 18-55mm f/3.5-5.6 III черный",
        description:"Canon EOS 250D Kit EF-s 18-55mm f/3.5-5.6 III — ваш идеальный спутник для создания ярких и качественных фотографий и видео. Этот зеркальный фотоаппарат сочетает в себе высокую производительность" ,
        price:319303,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h30/h21/63792039526430.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h30/h21/63792039526430.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h1a/h1e/63792039919646.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h19/hfd/63792040378398.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/canon-eos-250d-kit-ef-s-18-55mm-f-3-5-5-6-iii-chernyi-100086398/?c=750000000",
        likes: 0,
        categoryId: 4
    },{
        id: 19,
        name: "Фотокамера Canon PowerShot G7X Mark II черный",
        description:"Представляем Canon PowerShot G7X Mark II — компактный цифровой фотоаппарат, который станет вашим незаменимым помощником в создании ярких и качественных снимков. С высоким разрешением 20.1 МП и оптическим зумом 4.2x вы сможете запечатлеть каждую деталь, будь то пейзаж или портрет." ,
        price: 590990,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/h09/hd9/63758980644894.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/h5a/h76/63758981627934.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/hdb/h97/63758982152222.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000",
        likes: 0,
        categoryId: 4
        


    },{
        id: 20,
        name: "Фотокамера Sony Alpha A7 III черный",
        description:"Представляем вам Sony Alpha A7 III — беззеркальную камеру, которая сочетает в себе высокое качество изображения, мощные функции видеозаписи и компактный дизайн. Идеальный выбор для профессионалов и любителей, стремящихся к совершенству в каждой детали" ,
        price: 659757 ,
        rating: 5,
        image: "https://resources.cdn-kaspi.kz/img/m/p/hdb/h74/64084143407134.jpg?format=gallery-medium",
        images: [
            "https://resources.cdn-kaspi.kz/img/m/p/hdb/h74/64084143407134.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/he1/h3b/64084146028574.jpg?format=gallery-medium",
            "https://resources.cdn-kaspi.kz/img/m/p/he1/h3b/64084146028574.jpg?format=gallery-medium"
        ],
        link: "https://kaspi.kz/shop/p/sony-alpha-a7-iii-chernyi-102454243/?c=750000000",
        likes: 0,
        categoryId: 4
    },

]
    getCategory(){
        return this.categories;
    }
    getProductsByCategoryId(id: number){
        return this.products.filter(p => p.categoryId === id);
    }
}
