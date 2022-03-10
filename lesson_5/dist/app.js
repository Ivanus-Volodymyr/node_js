"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const posts_1 = require("./entity/posts");
const comments_1 = require("./entity/comments");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/users', async (_req, res) => {
    // find all users;
    // const users = await getManager().getRepository(User).find();
    // console.log(users);
    // res.json(users);
    //
    // findOne is find one user;
    // const user = await getManager().getRepository(User).findOne({
    //     where: {
    //         firstName: 'Mariya',
    //     },
    // });
    // console.log(user);
    // res.json(user);]
    // const users = await getManager().getRepository(User)
    //     .createQueryBuilder('user')
    //     .where('firstName = "Oleh"')
    //     .getOne();
    // res.json(users);
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find({ relations: ['posts'] });
    res.json(users);
});
// get all posts;
app.get('/posts', async (_req, res) => {
    const posts = await (0, typeorm_1.getManager)().getRepository(posts_1.Post).find({ relations: ['comments'] });
    res.json(posts);
});
// get posts by userId;
app.get('/posts/:userId', async (req, res) => {
    const postById = await (0, typeorm_1.getManager)().getRepository(posts_1.Post)
        .find({ userId: Number(req.params.userId) });
    res.json(postById);
});
// get all comments;
app.get('/comments', async (_req, res) => {
    const comments = await (0, typeorm_1.getManager)().getRepository(comments_1.Comment).find();
    res.json(comments);
});
// get comments by authorId;
app.get('/comments/:userId', async (req, res) => {
    const commentsByAuthorId = await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
        .createQueryBuilder('comment')
        .where('comment.authorId = :id', { id: Number(req.params.userId) })
        .leftJoinAndSelect('comment.post', 'post')
        .leftJoinAndSelect('comment.user', 'user')
        .getMany();
    res.json(commentsByAuthorId);
});
// create new user;
app.post('/users', async (req, res) => {
    const newUser = await (0, typeorm_1.getManager)().getRepository(user_1.User).save(req.body);
    res.json(newUser);
});
// update user by id;
app.patch('/users/:id', async (req, res) => {
    const { password, email } = req.body;
    const newUser = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .update({ id: Number(req.params.id) }, {
        email,
        password,
    });
    res.json(newUser);
});
// update post text by userId;
app.patch('/posts/:userId', async (req, res) => {
    const { text } = req.body;
    const newText = await (0, typeorm_1.getManager)().getRepository(posts_1.Post)
        .update({ userId: Number(req.params.userId) }, {
        text,
    });
    res.json(newText);
});
// update comment like or dislike;
app.patch('/comments/action', async (req, res) => {
    try {
        const { action, id } = req.body;
        const comment = await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
            .createQueryBuilder('comment')
            .where(`comment.id=${id}`)
            .getOne();
        if (!comment) {
            throw new Error('have no comments....');
        }
        if (action === 'like') {
            await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
                .update({ id }, { like: comment.like + 1 });
        }
        if (action === 'dislike') {
            await (0, typeorm_1.getManager)().getRepository(comments_1.Comment)
                .update({ id }, { dislike: comment.dislike + 1 });
        }
        res.sendStatus(201);
    }
    catch (err) {
        console.log(err);
    }
});
// delete user by id;
app.delete('/users/:id', async (req, res) => {
    const newUser = await (0, typeorm_1.getManager)().getRepository(user_1.User)
        .softDelete({ id: Number(req.params.id) });
    res.json(newUser);
});
app.listen('5500', async () => {
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected....');
        }
    }
    catch (err) {
        if (err) {
            console.log(err);
        }
    }
    console.log('Server has started on port 5500..........');
});
//# sourceMappingURL=app.js.map