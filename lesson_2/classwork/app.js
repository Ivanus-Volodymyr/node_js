//require;
const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

//config;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

//users array;
const users = [];


app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/users', (req, res) => {
    const {age, city} = req.query;
    let filter = [...users];

    if (age) {
        filter = filter.filter(value => value.age === age);
    }
    if (city) {
        filter = filter.filter(value => value.city.toLowerCase() === city);
    }

    res.render('users', {filter});
});

app.get('/exist', (req, res) => {
    res.render('exist');
});

app.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const user = users[userId - 1];
    res.render('user', {user});
});

app.post('/login', (req, res) => {
    const exist = users.some(value => value.email === req.body.email);

    if (exist) {
        res.redirect('/exist');
        return;
    }

    users.push({...req.body, id: users.length + 1});
    res.redirect('/users');
});

//classwork
app.get('/signIn', (req, res) => {
    res.render('signIn');
});

app.post('/signIn', (req, res) => {
    const user = users.find(value => value.email === req.body.email && value.password === req.body.password);

    if (user) {
        res.render('user', {user});
        return;
    }

    res.render('userNotFound');
});

//delete
app.post('/delete/:userId', (req, res) => {
    const {userId} = req.params;

    users.splice(+userId - 1, 1);
    res.redirect('/users');
});

//if nothing
app.use((req, res) => {
    res.render('notFound');
});

//Sever start;
app.listen(5050, () => {
    console.log('Sever started on port 5050...');
});
