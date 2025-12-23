export interface ServicesType {
    id: string;
    title: string;
    description?: string;
    price: number;
}

const servicesData: ServicesType[] = [
    {
        id: "extra_baggage",
        title: "Дополнительный багаж",
        description: "Не рассчитали с багажом при оформлении билета? Ну ладно.",
        price: 10000,
    },
    {
        id: "select_place",
        title: "Выбор места в салоне",
        description: "Хотите сидеть у окошка? 0% осуждения, 100% понимания",
        price: 2500,
    },
    {
        id: "onboard_meal",
        title: "Питание на борту",
        description: "У нас есть зачерствевшие сендвичи, вчерашний чай и задохнувшийся банан в пакете",
        price: 1000,
    },
    {
        id: "onboard_wifi",
        title: "Wi-Fi на борту",
        description: "В смысле нестабильный? Скажи спасибо, что работает.",
        price: 500,
    },
    {
        id: "pet_transport",
        title: "Перевозка питомца",
        description: "Люкс место для вашего котофея.",
        price: 1500,
    },
    {
        id: "flight_insurance",
        title: "Страховка перелета",
        description: "Страховка вида: Отче наш... Аминь.",
        price: 10000,
    },
    {
        id: "something",
        title: "Очень важная услуга",
        description: "Серьезно, как вы без нее жили? Пожалуй, это будет ваша лучшая оплата за воздух",
        price: 99999999,
    }
]

export default servicesData;