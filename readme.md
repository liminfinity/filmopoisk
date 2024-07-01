# Фильмопоиск

## Запуск
1. Склонировать ветку *master*
2. Создать *.env* файл и установить переменные, как в *.env.example*
3. ```npm i```
4. ```npm dev```

### Стэк
1. React + React-router-dom
2. React redux + RTK Query
3. TypeScript
4. Axios
5. Eslint + Prettier
6. SCSS modules
7. FSD архитектура
8. Storybook

### Страницы
1. / - основная страница со всеми фильмами
2. /movies/:id - конкретный фильм


### Дополнительное описание
Для просмотра реализованных компонентов необходимо использовать команду ```npm run sb```. В результате на 6006 порту откроется Storybook. Все компоненты и логика закочены, однако не успел их объединить из-за позднего начала проекта(

### Самооценка по критериям

1. Базовые требования:

    - ✅ Создан github-репозиторий, в нём есть README, gitignore, установлены все необходимые зависимости;

    - ✅ Проект запускается;

    - ✅ Вёрстка соответствует дизайн-макетам (допускаются минимальные отхождения, адаптив не требуется).

2. Шапка:

    - ✅ Позиционируется липко (стики).

3. Авторизация:

    - ✅ Для реализации модального окна используется портал;

    - ✅ После успешной авторизации кнопка «Войти» меняется на заглушку иконки пользователя и кнопку «Выйти»:

        - ✅ Сохраняем авторизационный токен из ответа ручки бэка /login (например, в localStorage);

        - ✅ В идеале, работать с токеном через thunk (где-то в мидлваре);

        - ✅ По клику на кнопку «Выйти» удаляем токен и снимает авторизацию;

        - ✅ При инициализации приложения проверяем авторизационный токен.

4. Реализована страница списка фильмов
    - Поиск:

        - ✅ Поиск происходит во время ввода пользователем символов. Дёргаем ручку /search.

    - Фильтры:

        - ✅ Реализованы фильтры с dropdown;

        - ❌ Фильтры сохраняются в query-params.  

    - ⚠️ Реализован список фильмов с пагинацией - не доработан.

5. Страница фильма
    - Работа с получением данных:

        - ✅ Дёргаем ручку /movie:id;

        - ❌ Соответствующие данные отрисованы.

    - Возможность поставить оценку:

        - ✅ Есть запрос за получением оценки для фильма;

        - ✅ Если пользователь авторизован, даём возможность поставить оценку — запрос мутации;

        - ✅ После выставления оценки обновляем кеш запроса /movie.

6. Общий функционал

    - ❌ Реализовать единообразную обработку ошибок для запросов;

    - ✅ Реализован лоадер;

    - ✅ Используем debounce для поиска фильма и выставления оценки.

7. Стор

    - ✅ Используется rtk и rtk-query;

    - ⚠️ Данные корректно разбиты на модули (пример — авторизация, searchParams из фильтров) - не успел поработать с searchParams, однако логика авторизации и работы с фильмами разбита на модули;

    - ✅ Селекторы написаны оптимально (нет переизбытка дублирования).

8. Миграция на Next:

    - ❌ Реализована миграция с использованием SSR;

    - ❌ Для картинок используется Image некста. Скрины фильма, которые вне вьюпорта грузятся лениво;

    - ❌ Страница фильма реализована с помощью Dynamic Routes.

