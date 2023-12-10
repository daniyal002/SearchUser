README для SearchUser

**Название проекта:**
Одностраничное приложение для проверки данных на сервере

**Описание**
Проект состоит из фронтенда на React без типизации и бекенда на Node.js с использованием Express и TypeScript. Приложение представляет собой форму с двумя полями для ввода электронной почты (обязательное) и номера телефона. Пользователь может отправить запрос на сервер для проверки данных. Ответ отображается под формой.

**Установка и запуск**
Фронтенд (React):

1. Перейдите в папку с фронтендом:
   ```console
   cd SearchUser_frontend
   cd finduser
   ```
2. Установите зависимости:
   ```console
   npm install
   ```
3. Запустите приложение:
   ```console
   npm run dev
   ```
4. Откройте http://127.0.0.1:5173/ в вашем браузере.

**Бекенд (Node.js + Express + TypeScript):**

1.  Перейдите в папку с бекендом:
    ```console
    cd SearchUser_backend
    ```
2.  Установите зависимости:
    ```console
    npm install
    ```
3.  Запустите приложение:
    `console
    npm run dev
    `
    **Используемые библиотеки:**

        Фронтенд (React):
            @tanstack/react-query: Управление состоянием и запросами.
            axios: HTTP-клиент для выполнения запросов к серверу.
            react: Библиотека для создания пользовательских интерфейсов.
            react-dom: Библиотека для взаимодействия с DOM в React.
            react-hook-form: Удобные хуки для работы с формами в React.
            react-input-mask: Библиотека для создания масок ввода в полях ввода.

        Бекенд (Node.js + Express + TypeScript):
            cors: Обеспечивает поддержку Cross-Origin Resource Sharing (CORS).
            express: Веб-фреймворк для Node.js.
            nodemon: Инструмент для автоматического перезапуска сервера при изменениях файлов.

**Инструкция по использованию:**
Запустите фронтенд и бекенд, следуя инструкциям выше.
Откройте http://127.0.0.1:5173/ в вашем браузере.
Заполните форму, введя электронную почту и номер телефона.
Нажмите кнопку "Проверить".
Дождитесь ответа от сервера. Результат отобразится под формой.

**Дополнительные условия:**
Ответ от сервера поступает только после 5 секунд ожидания.
Повторные запросы не отменяют предыдущие.
Поле для ввода номера телефона имеет маску "99-99-99".
