import express from 'express';

const app = express();
const a = () => {
    console.log('login');
};
a();
app.listen('5500', () => {
    console.log('Server has started on port 5500..........');
});
