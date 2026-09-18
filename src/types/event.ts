export type EventCategory =
  | "Концерт"
  | "Лекция"
  | "Выставка"
  | "Спорт"
  | "Мастер-класс"
  | "Кино"
  | "Нетворкинг"
  | "Фестиваль";

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  date: string; // например "12 июн. 2025, 19:00"
  location: string;
  price: string; // "от 1 200 ₽" | "500 ₽" | "Бесплатно"
  seatsLeft: number;
  imageUrl: string;
}
