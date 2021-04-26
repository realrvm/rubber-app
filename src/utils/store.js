import gps from "../assets/svgs/gps.svg";
import time from "../assets/svgs/time.svg";
import phone from "../assets/svgs/phone.svg";
import product1 from "../assets/products/product1.jpg";
import product2 from "../assets/products/product2.jpg";
import product3 from "../assets/products/product3.jpg";
import product4 from "../assets/products/product4.jpg";

export const menuList = [
  { id: 1, menuItem: "Продукция", link: "/products" },
  { id: 2, menuItem: "Почему стоит заказать", link: "choice" },
  { id: 3, menuItem: "Контакты", link: "contacts" },
];

export const contacts = [
  { id: 1, title: "ул. Транспортная, 3", descr: "Основной офис", img: gps },
  { id: 2, title: "+7(333)555 11 12", descr: "Телефон", img: phone },
  { id: 3, title: "с 10:00 до 20:00", descr: "График работы", img: time },
];

export const products = [
  { id: 1, title: "Сальники", quantity: 50, img: product1 },
  { id: 2, title: "Манжеты", quantity: 50, img: product2 },
  { id: 3, title: "Ремни", quantity: 50, img: product3 },
  { id: 4, title: "Рем.комплекты", quantity: 50, img: product4 },
];
