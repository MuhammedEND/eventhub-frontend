import { type EventItem } from "../types/event";
import  concert  from "../assets/concert.png";
import  vst  from "../assets/vst.png"
import  fes  from "../assets/fes.png"
import  film  from "../assets/film.png"
import  leks  from "../assets/leks.png"
import  network  from "../assets/network.png"
import  sport  from "../assets/sport.png"
import  master  from "../assets/master.png"


export const mockEvents: EventItem[] = [
  {
    id: "1",
    title: "Летний джаз в Саду «Эрмитаж»",
    category: "Концерт",
    date: "12 июн. 2025, 19:00",
    location: "Москва, ул. Каретный Ряд, 3",
    price: "от 1 200 ₽",
    seatsLeft: 48,
    imageUrl: concert,
  },
  {
    id: "2",
    title: "Как развивать креативное мышление",
    category: "Лекция",
    date: "14 июн. 2025, 16:00",
    location: "Москва, ул. Покровка, 47",
    price: "500 ₽",
    seatsLeft: 23,
    imageUrl: leks,
  },
  {
    id: "3",
    title: "Современное искусство: новые имена",
    category: "Выставка",
    date: "15 июн. 2025, 11:00",
    location: "Москва, ул. Крымский Вал, 10",
    price: "700 ₽",
    seatsLeft: 67,
    imageUrl: vst,
  },
  {
    id: "4",
    title: "Зеленый забег 5 км",
    category: "Спорт",
    date: "16 июн. 2025, 09:00",
    location: "Москва, Парк Горького",
    price: "1 000 ₽",
    seatsLeft: 120,
    imageUrl: sport,
  },
  {
    id: "5",
    title: "Керамика для начинающих",
    category: "Мастер-класс",
    date: "17 июн. 2025, 18:30",
    location: "Москва, ул. Большая Никитская, 22",
    price: "2 000 ₽",
    seatsLeft: 12,
    imageUrl: master,
  },
  {
    id: "6",
    title: "Показ фильма «Субстанция»",
    category: "Кино",
    date: "18 июн. 2025, 20:00",
    location: "Москва, ул. Сретенка, 12",
    price: "400 ₽",
    seatsLeft: 36,
    imageUrl: film,
  },
  {
    id: "7",
    title: "IT Meetup: люди, идеи, возможности",
    category: "Нетворкинг",
    date: "20 июн. 2025, 19:00",
    location: "Москва, ул. Тверская, 7",
    price: "Бесплатно",
    seatsLeft: 80,
    imageUrl: network,
  },
  {
    id: "8",
    title: "Гастрономический фестиваль «Вкус лета»",
    category: "Фестиваль",
    date: "21 июн. 2025, 12:00",
    location: "Москва, ВДНХ",
    price: "300 ₽",
    seatsLeft: 200,
    imageUrl: fes,
  },
];
