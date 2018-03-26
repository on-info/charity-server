/*eslint-disable */
// you should run the command promt in directory where you have installed the MongoDB
// and copy this file to that directory
// after that you should run the next command
// mongo -u <userName> -p <password> --host <host> --port <port> --authenticationDatabase <DBname> locations.js
// it will create a new collection with list of districts

db = db.getSiblingDB('charity_project');

const regions = [
  {
    district: [
      'Брестский район',
      'Жабинковский район',
      'Каменецкий район',
      'Кобринский район',
      'Малоритский район',
      'Берёзовский район',
      'Дрогичинский район',
      'Пружанский район',
      'Барановичский район',
      'Ганцевичский район',
      'Ивановский район',
      'Ивацевичский район',
      'Лунинецкий район',
      'Ляховичский район',
      'Пинский район',
      'Столинский район',
    ],
    name: 'Бресткая область',
  },
  {
    district: [
      'Браславский район',
      'Бешенковичский район',
      'Верхнедвинский район',
      'Витебский район',
      'Глубокский район',
      'Городокский район',
      'Докшицкий район',
      'Дубровенский район',
      'Лепельский район',
      'Лиозненский район',
      'Миорский район',
      'Оршанский район',
      'Полоцкий район',
      'Поставский район',
      'Россонский район',
      'Сенненский район',
      'Толочинский район',
      'Ушачский район',
      'Чашникский район',
      'Шарковщинский район',
      'Шумилинский район',
    ],
    name: 'Витебская область',
  },
  {
    district: [
      'Брагинский район',
      'Буда-Кошелевский район',
      'Ветковский район',
      'Гомельский район',
      'Добрушский район',
      'Ельский район',
      'Житковичский район',
      'Жлобинский район',
      'Калинковичский район',
      'Кормянский район',
      'Лельчицкий район',
      'Лоевский район',
      'Мозырский район',
      'Наровлянский район',
      'Октябрьский район',
      'Петриковский район',
      'Речицкий район',
      'Рогачевский район',
      'Светлогорский район',
      'Хойникский район',
      'Чечерский район',
    ],
    name: 'Гомельская область',
  },
  {
    district: [
      'Островецкий район',
      'Берестовицкий район',
      'Волковысский район',
      'Вороновский район',
      'Гродненский район',
      'Дятловский район',
      'Зельвенский район',
      'Ивьевский район',
      'Кореличский район',
      'Лидский район',
      'Мостовский район',
      'Новогрудский район',
      'Ошмянский район',
      'Слонимский район',
      'Свислочский район',
      'Сморгонский район',
      'Щучинский район',
    ],
    name: 'Гродненская область',
  },
  {
    district: [
      'Борисовский район',
      'Березинский район',
      'Воложинский район',
      'Вилейский район',
      'Дзержинский район',
      'Клецкий район',
      'Копыльский район',
      'Крупский район',
      'Логойский район',
      'Любанский район',
      'Молодечненский район',
      'Минский район',
      'Мядельский район',
      'Несвижский район',
      'Пуховичский район',
      'Слуцкий район',
      'Солигорский район',
      'Смолевичский район',
      'Стародорожский район',
      'Столбцовский район',
      'Узденский район',
      'Червенский район',
    ],
    name: 'Минская область',
  },
  {
    district: [
      'Осиповичский район',
      'Бобруйский район',
      'Быховский район',
      'Белыничский район',
      'Глусский район',
      'Горецкий район',
      'Дрибинский район',
      'Костюковичский район',
      'Кировский район',
      'Климовичский район',
      'Кличевский район',
      'Краснопольский район',
      'Круглянский район',
      'Кричевский район',
      'Могилёвский район',
      'Мстиславский район',
      'Славгородский район',
      'Хотимский район',
      'Чаусский район',
      'Чериковский район',
      'Шкловский район',
    ],
    name: 'Могилёвская область',
  },
  {
    district: [
      'Центральный район',
      'Советский район ',
      'Первомайский район',
      'Партизанский район',
      'Заводской район',
      'Ленинский район ',
      'Октябрьский район',
      'Московский район',
      'Фрунзенский район',
    ],
    name: 'г. Минск',
  },
];

print(`добавлено ${db.locations.insert(regions).nInserted}`);
