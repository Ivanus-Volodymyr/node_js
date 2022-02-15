const fs = require('fs');
const path = require("path");

// fs.mkdir(path.join(__dirname, 'lesson_1', 'homework', 'main', 'inPerson'), (e) => {
//     if (e) {
//         console.log(e);
//         throw e;
//     }
// })

// const arr = [{name: "Andrii", age: 22, city: "Lviv"}, {name: "kokos", age: 25, city: "Lviv"}]
// const mas = [
//     {name: "Andrii", age: 22, city: "Lviv"},
//     {name: "asd", age: 22, city: "Lviv"},
//     {name: "qwe", age: 22, city: "Lviv"}
// ]
//
// for (const element of arr) {
//     for (const key in element) {
//         fs.appendFileSync(path.join(__dirname, 'lesson_1', 'homework', 'main', 'inPerson', 'file.txt'),
//             `${key}:${element[key]}\n`,
//             (e) => {
//                 if (e) {
//                     console.log(e)
//                     throw e;
//                 }
//             })
//     }
// }
//
// for (const element of mas) {
//     for (const key in element) {
//         fs.appendFileSync(path.join(__dirname, 'lesson_1', 'homework', 'main', 'online', 'file.txt'),
//             `${key}:${element[key]}\n`,
//             (e) => {
//                 if (e) {
//                     console.log(e)
//                     throw e;
//                 }
//             })
//     }
// }


const reWrite = () => {

    fs.readFile(path.join(__dirname, 'lesson_1', 'homework', 'main', 'online', 'file.txt'), (error, data1) => {
        if (error) {
            console.log(error)
            throw error
        }
        fs.readFile(path.join(__dirname, 'lesson_1', 'homework', 'main', 'inPerson', 'file.txt'), (error, data2) => {
            if (error) {
                console.log(error)
                throw error
            }
            fs.writeFile(path.join(__dirname, 'lesson_1', 'homework', 'main', 'online', 'file.txt'), data2, error => {
                if (error) {
                    console.log(error)
                    throw error
                }
            })
            fs.writeFile(path.join(__dirname, 'lesson_1', 'homework', 'main', 'inPerson', 'file.txt'), data1, error => {
                if (error) {
                    console.log(error)
                    throw error
                }
            })
        })
    })

}
reWrite()
