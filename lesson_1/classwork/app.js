const fs = require('fs');
const path = require('path');

// fs.writeFile(path.join(__dirname, 'file.txt'), 'Volodya', error => {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     fs.readFile(path.join(__dirname, 'file.txt'), (error, data) => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//         fs.writeFile(path.join(__dirname, 'fileNext.txt'), data, error => {
//             if (error) {
//                 console.log(error);
//                 throw error;
//             }
//         })
//     })
// })

// fs.readFile(path.join(__dirname, 'file.txt'), (error, data) => {
//     if (error) {
//         console.log(error);
//         throw error;
//     }
//     fs.mkdir(path.join(__dirname, 'task_2'), error => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//         fs.writeFile(path.join(__dirname, 'task_2', 'task.txt'), data, error => {
//             if (error) {
//                 console.log(error);
//                 throw error;
//             }
//             fs.unlink(path.join(__dirname, 'file.txt'), err => {
//                 if (error) {
//                     console.log(error);
//                     throw error;
//                 }
//             })
//         })
//     })
// })

// // const createElements = () => {
// //     fs.mkdir(path.join(__dirname, 'task_3', 'task_3.1'), error => {
// //         if (error) {
// //             console.log(error);
// //             throw error;
// //         }
// //     })
// //     fs.writeFile(path.join(__dirname, 'task_3', 'task_3.txt'), 'Some Data', error => {
// //         if (error) {
// //             console.log(error);
// //             throw error;
// //         }
// //     })
// //
// // }
// // createElements();
//
// const reading = () => {
//     fs.readdir(path.join(__dirname, 'task_3'), (error, files) => {
//         if (error) {
//             console.log(error);
//             throw error;
//         }
//         for (const file of files) {
//             fs.stat(path.join(__dirname, 'task_3', file), (err, stats) => {
//                 if (error) {
//                     console.log(error);
//                     throw error;
//                 }
//                 if (stats.isDirectory()) {
//                     fs.rename(path.join(__dirname, 'task_3', file), path.join(__dirname, 'task_3', `${file}_new`), error => {
//                         if (error) {
//                             console.log(error);
//                             throw error;
//                         }
//                     })
//                     return;
//                 }
//                 fs.truncate(path.join(__dirname, 'task_3', file), error => {
//                     if (error) {
//                         console.log(error);
//                         throw error;
//                     }
//                 })
//
//             })
//         }
//     })
// }
// reading()
