import lamp from "../img/img-main/lamp.svg";
import darts from "../img/img-main/darts.svg";
import laptop from "../img/img-main/laptop.svg";
import uniqid from "uniqid";

const rateData = [
  {
    id: uniqid(),
    bgColor: "orange",
    titleColor: "fontBlack",
    title: "Beginner",
    description: "Для небольшого исследования",
    icon: lamp,
    alt: "лампочка",
    regularPrice: "1200 ₽",
    promoPrice: "799 ₽",
    priceOption: "или 150 ₽/мес. при рассрочке на 24 мес.",
    compound: "В тариф входит:",
    list: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
  },
  {
    id: uniqid(),
    bgColor: "aqua",
    titleColor: "fontBlack",
    title: "Pro",
    description: "Для HR и фрилансеров",
    icon: darts,
    alt: "дартс",
    regularPrice: "2600 ₽",
    promoPrice: "1299 ₽",
    priceOption: "или 279 ₽/мес. при рассрочке на 24 мес.",
    compound: "В тариф входит:",
    list: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам",
    ],
  },
  {
    id: uniqid(),
    bgColor: "black",
    titleColor: "fontWhite",
    title: "Business",
    description: "Для корпоративных клиентов",
    icon: laptop,
    alt: "ноутбук",
    regularPrice: "3700 ₽",
    promoPrice: "2379 ₽",
    priceOption: "",
    compound: "В тариф входит:",
    list: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
  },
];

export default rateData;
