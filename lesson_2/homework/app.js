// //require;
// const express = require('express');
// const path = require('path');
// const {engine} = require('express-handlebars');
//
// //config;
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({extends: true}));
//
// app.use(express.static(path.join(__dirname, 'static')));
// app.set('view engine', '.hbs');
// app.engine('.hbs', engine({defaultLayout: false}));
// app.set('views', path.join(__dirname, 'static'));
//
// //users array;
// const users = [
//     {
//         firsName: 'Kokos',
//         lastName: 'asd',
//         email: 'asd@gmail.com',
//         password: 'password',
//         age: 10,
//         city: 'Lviv'
//     },
//     {
//         firsName: 'qwerty',
//         lastName: 'qwe',
//         email: 'email',
//         password: 'password',
//         age: 30,
//         city: 'Kyiv'
//     },
//     {
//         firsName: 'Andriy',
//         lastName: 'qwe',
//         email: 'email',
//         password: 'password',
//         age: 30,
//         city: 'Kyiv'
//     },
//     {
//         firsName: 'vasya',
//         lastName: 'zxc',
//         email: 'email',
//         password: 'password',
//         age: 10,
//         city: 'Lviv'
//     },
//     {
//         firsName: 'vasya',
//         lastName: 'zxc',
//         email: 'email',
//         password: 'password',
//         age: 10,
//         city: 'Kyiv'
//     },
// ];
//
//
// app.get('/login', (reg, res) => {
//     res.render('login');
// });
//
// app.get('/users', (reg, res) => {
//     const {age, city} = reg.query;
//     let filter = [...users];
//     if (age) {
//         filter = filter.filter(value => value.age === +age);
//     }
//     if (city) {
//         filter = filter.filter(value => value.city.toLowerCase() === city);
//     }
//     res.render('users', {filter});
// });
//
// app.get('/exist', (reg, res) => {
//     res.render('exist');
// });
//
// app.get('/users/:userId', (reg, res) => {
//     const {userId} = reg.params;
//     const user = users[userId - 1];
//     res.render('user', {user});
// });
//
// app.post('/login', (reg, res) => {
//     const exist = users.some(value => value.email === reg.body.email);
//     if (exist) {
//         res.redirect('/exist');
//         return;
//     }
//     users.push(reg.body);
//     res.redirect('/users');
// });
//
// //if nothing
// app.use((reg, res) => {
//     res.render('notFound');
// });
//
// //Sever start;
// app.listen(5050, () => {
//     console.log('Sever started on port 5050...');
// });
