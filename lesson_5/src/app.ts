// import 'reflect-metadata';
// import express, { Request, Response } from 'express';
// import { createConnection, getManager } from 'typeorm';
//
// import { User } from './entity/user';
// import { Post } from './entity/posts';
// import { Comment } from './entity/comments';
//
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
//
// app.get('/users', async (_req: Request, res: Response) => {
//     // find all users;
//     // const users = await getManager().getRepository(User).find();
//     // console.log(users);
//     // res.json(users);
//     //
//     // findOne is find one user;
//     // const user = await getManager().getRepository(User).findOne({
//     //     where: {
//     //         firstName: 'Mariya',
//     //     },
//     // });
//     // console.log(user);
//     // res.json(user);]
//     // const users = await getManager().getRepository(User)
//     //     .createQueryBuilder('user')
//     //     .where('firstName = "Oleh"')
//     //     .getOne();
//     // res.json(users);
//     const users = await getManager().getRepository(User).find({ relations: ['posts'] });
//     res.json(users);
// });
//
// // get all posts;
// app.get('/posts', async (_req: Request, res: Response) => {
//     const posts = await getManager().getRepository(Post).find({ relations: ['comments'] });
//     res.json(posts);
// });
//
// // get posts by userId;
// app.get('/posts/:userId', async (req, res) => {
//     const postById = await getManager().getRepository(Post)
//         .find({ userId: Number(req.params.userId) });
//     res.json(postById);
// });
//
// // get all comments;
// app.get('/comments', async (_req, res) => {
//     const comments = await getManager().getRepository(Comment).find();
//     res.json(comments);
// });
// // get comments by authorId;
// app.get('/comments/:userId', async (req, res) => {
//     const commentsByAuthorId = await getManager().getRepository(Comment)
//         .createQueryBuilder('comment')
//         .where('comment.authorId = :id', { id: Number(req.params.userId) })
//         .leftJoinAndSelect('comment.post', 'post')
//         .leftJoinAndSelect('comment.user', 'user')
//         .getMany();
//     res.json(commentsByAuthorId);
// });
//
// // create new user;
// app.post('/users', async (req: Request, res: Response) => {
//     const newUser = await getManager().getRepository(User).save(req.body);
//     res.json(newUser);
// });
//
// // update user by id;
// app.patch('/users/:id', async (req, res) => {
//     const { password, email } = req.body;
//     const newUser = await getManager().getRepository(User)
//         .update(
//             { id: Number(req.params.id) },
//             {
//                 email,
//                 password,
//             },
//         );
//
//     res.json(newUser);
// });
//
// // update post text by userId;
// app.patch('/posts/:userId', async (req, res) => {
//     const { text } = req.body;
//     const newText = await getManager().getRepository(Post)
//         .update(
//             { userId: Number(req.params.userId) },
//             {
//                 text,
//             },
//         );
//
//     res.json(newText);
// });
//
// // update comment like or dislike;
// app.patch('/comments/action', async (req, res) => {
//     try {
//         const { action, id } = req.body;
//         const comment = await getManager().getRepository(Comment)
//             .createQueryBuilder('comment')
//             .where(`comment.id=${id}`)
//             .getOne();
//         if (!comment) {
//             throw new Error('have no comments....');
//         }
//         if (action === 'like') {
//             await getManager().getRepository(Comment)
//                 .update({ id }, { like: comment.like + 1 });
//         }
//         if (action === 'dislike') {
//             await getManager().getRepository(Comment)
//                 .update({ id }, { dislike: comment.dislike + 1 });
//         }
//         res.sendStatus(201);
//     } catch (err) {
//         console.log(err);
//     }
// });
//
// // delete user by id;
// app.delete('/users/:id', async (req, res) => {
//     const newUser = await getManager().getRepository(User)
//         .softDelete({ id: Number(req.params.id) });
//     res.json(newUser);
// });
//
// app.listen('5500', async () => {
//     try {
//         const connection = await createConnection();
//         if (connection) {
//             console.log('Database connected....');
//         }
//     } catch (err) {
//         if (err) {
//             console.log(err);
//         }
//     }
//     console.log('Server has started on port 5500..........');
// });
