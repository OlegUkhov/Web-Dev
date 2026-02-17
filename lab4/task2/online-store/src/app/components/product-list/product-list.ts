import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from '../product-card/product-card';
import {Product} from '../../models/product.model';

@Component({
  selector: 'product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [
    ProductCardComponent
  ]
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Проектор ELEVE11 P-30PRO',
      description: 'Проектор ELEVE 11 Р30 Р- это компактноеустройство, ' +
        'предназначенное для проецирования изображения на экран или другую поверхность',
      price: 29897,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/p55/68640191.PNG?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/proektor-eleve11-p-30pro-121809221/?c=750000000',
      images: []
    },
    {
      id: 2,
      name: "Аэрогриль Xiaomi Smart Air Fryer MAF15 5.5 л белый",
      description: "Аэрогриль Xiaomi Smart Air Fryer MAF15 — умная готовка с минимумом масла. Объём 5.5 л, 11 автоматических программ, сенсорное управление и поддержка управления через приложение",
      price: 139900,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p79/p34/74345278.png?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/xiaomi-smart-air-fryer-maf15-5-5-l-belyi-120489647/?c=750000000"
    },
    {
      id: 3,
      name: "Диван Morbido Комфорт, 210х80 см, обивка",
      description: "Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус",
      price: 51253,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000"
    },
    {
      id: 4,
      name: "Apple Watch Series 11 M/L 46 мм черный",
      description: "Apple Watch Series 11 — стильные и функциональные умные часы для активной жизни, сочетающие передовые технологии и элегантный дизайн",
      price: 217842,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000"
    },
    {
      id: 5,
      name: "Apple iPhone 17 Pro 256Gb темно-синий",
      description: "Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн",
      price: 734036,
      rating: 4.9,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000"
    },
    {
      id: 6,
      name: "ThundeRobot 911S Core D 15.6 / 16 Гб / SSD 512 Гб",
      description: "Игровой ноутбук Thunderobot 911S Core D JT009K00F — 15.6-дюймовая модель с IPS-матрицей и разрешением 1920х1080 пикселей. Отличается высокой частотой обновления — достигает 144 Гц",
      price: 498989,
      rating: 4.8,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000"
    },
    {
      id: 7,
      name: "Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS",
      description: "Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений",
      price: 520038,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000"
    },
    {
      id: 8,
      name: "Кофемашина Delonghi ECAM220.50.BG бежевый",
      description: "Кофемашина DeLonghi Magnifica Start ECAM 220. 50. BG сочетает в себе множество возможностей для приготовления вкусного кофе а также простоту использования и надежность",
      price: 229990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p6b/pfe/63494146.jpg?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/kofemashina-delonghi-ecam220-50-bg-bezhevyi-145399057/?c=750000000"
    },
    {
      id: 9,
      name: "Logitech G Pro X Superlight 2 черный",
      description: "Представляем Logitech G Pro X Superlight 2 — беспроводную игровую мышь, созданную для профессионалов и любителей, стремящихся к максимальной точности и комфорту в игре",
      price: 71099,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/he9/h06/84049616502814.png?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-chernyi-113548302/?c=750000000"
    },
    {
      id: 10,
      name: "Samsung Jet 95 Complete VS20C9544TB/EV черный",
      description: "Samsung Jet 95 Complete VS20C9544TB/EV — мощный и универсальный вертикальный пылесос, который станет незаменимым помощником в поддержании чистоты вашего дома",
      price: 633000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h1e/h51/85408620478494.jpg?format=preview-large",
      images: [],
      link: "https://kaspi.kz/shop/p/samsung-jet-95-complete-vs20c9544tb-ev-chernyi-117352206/?c=750000000"
    }
  ]
}
