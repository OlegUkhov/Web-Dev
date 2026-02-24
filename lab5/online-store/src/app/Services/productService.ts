import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Category} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Sony WH-1000XM4',
      description: 'Премиальные беспроводные наушники с лучшим шумоподавлением в классе, до 30 часов работы и поддержкой Hi-Res Audio',
      price: 89990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 2,
      name: 'Apple AirPods Max 2 черно-синий',
      description: 'Наушники Apple с активным шумоподавлением, пространственным звуком и до 20 часов автономной работы',
      price: 219990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 3,
      name: 'Bose QuietComfort Ultra',
      description: 'Флагманские наушники Bose с иммерсивным звуком, адаптивным шумоподавлением и до 24 часов работы',
      price: 179990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc4/p3b/99652627.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-ultra-chernyi-115025647/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 4,
      name: 'Bowers & Wilkins Px7 S3 голубой',
      description: 'Беспроводные наушники с премиальным звуком, гибридным шумоподавлением и до 30 часов воспроизведения',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0d/pae/81000403.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-bowers-wilkins-px7-s3-goluboi-150433049/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 5,
      name: 'Apple AirPods Max черный',
      description: 'Оригинальные AirPods Max с алюминиевыми амбушюрами, активным шумоподавлением и кристально чистым звуком',
      price: 199990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/hcc/64145010163742.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-chernyi-100950846/?c=750000000',
      categoryId: 1,
      likes: 0
    },
    {
      id: 6,
      name: 'JBL Go 4 черный',
      description: 'Компактная портативная колонка с IP67 защитой от воды и пыли, мощным звуком и до 7 часов работы',
      price: 14990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/h6c/87088702521374.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-go-4-chernyi-117967868/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 7,
      name: 'Яндекс Станция Мини с часами',
      description: 'Умная колонка с голосовым помощником Алиса, встроенными часами и высококачественным звуком',
      price: 24990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h6a/86495017107486.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 8,
      name: 'JBL Flip 7 черный',
      description: 'Портативная колонка с мощным стереозвуком, защитой IP67 и до 12 часов автономной работы',
      price: 49990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p52/pff/37767804.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-jbl-flip-7-chernyi-138416257/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 9,
      name: 'Яндекс Станция Миди красный',
      description: 'Умная колонка среднего размера с Алисой, мощным звуком 24 Вт и поддержкой Zigbee для умного дома',
      price: 39990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hbe/85191570128926.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-krasnyi-116682830/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 10,
      name: 'Верный Saturn бежевый',
      description: 'Стильная портативная колонка с тёплым звуком, компактным корпусом и длительным временем работы',
      price: 9990,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h08/83972599742494.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/vernyi-saturn-bezhevyi-113426595/?c=750000000',
      categoryId: 2,
      likes: 0
    },
    {
      id: 11,
      name: 'Nintendo Switch OLED белый',
      description: 'Игровая консоль с ярким OLED-экраном 7 дюймов, улучшенной подставкой и проводным LAN-портом',
      price: 139990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 12,
      name: 'Sony PlayStation 5 Slim',
      description: 'Новая компактная версия PS5 с поддержкой 4K, трассировкой лучей и сверхбыстрым SSD накопителем',
      price: 299990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 13,
      name: 'Valve Steam Deck OLED 512 Гб',
      description: 'Портативная игровая консоль с OLED-экраном, доступом ко всей библиотеке Steam и мощным APU AMD',
      price: 249990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p16/15844428.png?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 14,
      name: 'Sony PlayStation 4 Pro 1TB + GTA V + MK11',
      description: 'Мощная консоль с поддержкой 4K HDR и набором популярных игр: GTA V, Mortal Kombat 11, Call of Duty, UFC 4',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h83/64407282417694.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-pro-1tb-chernyi-gta-v-mk-11-call-of-duty-ufc-4-geimpad-103627528/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 15,
      name: 'Nintendo Switch 2 + Mario Kart World',
      description: 'Новейшая консоль Nintendo с улучшенными характеристиками и легендарной игрой Mario Kart World в комплекте',
      price: 189990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p15/pcf/47018947.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-2-mario-kart-world-140920404/?c=750000000',
      categoryId: 3,
      likes: 0
    },
    {
      id: 16,
      name: 'Sony ZV-E10 Kit 16-50mm черный',
      description: 'Беззеркальная камера для влогинга с поворотным экраном, направленным микрофоном и отличным автофокусом',
      price: 189990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-zv-e10-kit-16-50mm-chjornyi-102510202/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 17,
      name: 'Canon PowerShot SX740 HS черный',
      description: 'Компактная камера с 40x оптическим зумом, 4K видео и встроенным Wi-Fi для мгновенной передачи фото',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h48/h9b/63774686248990.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/canon-powershot-sx740-hs-chernyi-2240140/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 18,
      name: 'Canon EOS 2000D Kit EF-S 18-55 III',
      description: 'Зеркальная камера начального уровня с 24.1 МП сенсором, Full HD видео и удобным управлением для новичков',
      price: 129990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h41/63783551434782.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/canon-eos-2000d-kit-ef-s-18-55-iii-2240125/?c=750000000',
      categoryId: 4,
      likes: 0
    },
    {
      id: 19,
      name: 'DJI Osmo 360 Adventure Combo',
      description: 'Экшн-камера с круговым обзором 360°, стабилизацией изображения и защитой от воды для экстремальных съёмок',
      price: 219990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p38/pbb/11569232.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/ekshn-kamera-dji-osmo-360-adventure-combo-143670912/?c=750000000',
      categoryId: 4,
      likes: 0

    },
    {
      id: 20,
      name: 'Sony Alpha A7 III Kit 28-70mm',
      description: 'Полнокадровая беззеркальная камера с 24.2 МП сенсором, 5-осевой стабилизацией и профессиональным автофокусом',
      price: 549990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h4f/64368651501598.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/sony-alpha-a7-iii-kit-28-70mm-103256988/?c=750000000',
      categoryId: 4,
      likes: 0
    }
  ];
  categories: Category[] = [
    {
      id: 1,
      name: "Наушники"
    },
    {
      id: 2,
      name: "Аудиотехника"
    },
    {
      id: 3,
      name: "Игровые приставки"
    },
    {
      id: 4,
      name: "Фотокамеры"
    }
  ];
}
