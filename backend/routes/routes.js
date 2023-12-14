const express = require('express');
const app = express();
const router = express.Router();
const userController = require('../src/user/userController');
const User = require('../src/user/userModel');
const bookController = require('../src/book/bookController');
const Book = require('../src/book/bookModel');
const authorController = require('../src/author/authorController');
const Author = require('../src/author/authorModel');


/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - year
 *         - photo
 *         - info
 *       properties:
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The author of the book
 *         year:
 *           type: integer
 *           description: The publication year of the book
 *         photo:
 *           type: string
 *           description: The URL or path to the book's cover photo
 *         info:
 *           type: string
 *           description: Additional information about the book
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /book/create:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error

 * /book-list:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'

 * /book/{_id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found

 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened

 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     Author:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the author
 *         photo:
 *           type: string
 *           description: The URL or path to the author's photo
 *         books:
 *           type: string
 *           description: The books written by the author
 */

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: The authors managing API
 * /author/create:
 *   post:
 *     summary: Create a new author
 *     tags: [Authors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       200:
 *         description: The created author.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       500:
 *         description: Some server error
 * /author-list:
 *   get:
 *     summary: Lists all the authors
 *     tags: [Authors]
 *     responses:
 *       200:
 *         description: The list of authors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Author'
 * /author/{_id}:
 *   get:
 *     summary: Get the author by id
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The author id
 *     responses:
 *       200:
 *         description: The author response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: The author was not found
 *   put:
 *     summary: Update the author by id
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The author id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Author'
 *     responses:
 *       200:
 *         description: The author was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Author'
 *       404:
 *         description: The author was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the author by id
 *     tags: [Authors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The author id
 *     responses:
 *       200:
 *         description: The author was deleted
 *       404:
 *         description: The author was not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstname
 *         - lastname
 *         - email
 *         - mobile
 *         - gender
 *         - pwd
 *       properties:
 *         firstname:
 *           type: string
 *           description: The first name of the user
 *         lastname:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the user
 *         mobile:
 *           type: string
 *           description: The mobile number of the user
 *         gender:
 *           type: string
 *           description: The gender of the user
 *         pwd:
 *           type: string
 *           description: The password of the user
 *         rpwd:
 *           type: string
 *           description: The repeated password of the user
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /user/create:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user-list:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * /user/{_id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *   put:
 *     summary: Update the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */



router.route('/user/create').post(userController.createUserControllerFn);
router.route('/book/create').post(bookController.createBookControllerFn);
router.route('/author/create').post(authorController.createAuthorControllerFn);

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Ищем пользователя по имейлу в базе данных
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Пользователь не найден' });
        }

        // Сравниваем введенный пароль с хэшированным паролем из базы данных
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return res.json({ message: 'Вход выполнен успешно' });
        } else {
            return res.status(401).json({ message: 'Неверный пароль' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});
//router.route('/user/register').post(userController.createUserControllerFn);

router.get('/user-list', async (req, res) => {
    try {
        const users = await User.find({}).exec();
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


router.get('/author-list', async (req, res) => {
    try {
        const authors = await Author.find({}).exec();
        res.json(authors);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

router.get('/book-list', async (req, res) => {
    try {
        const books = await Book.find({}).exec();
        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

//Маршрут для получения данных пользователя по id
router.get('/user/:_id', async (req, res) => {
    const _id = req.params._id;
    try {
        // 
        const user = await User.findOne({ _id }).exec();
        res.json(user);
        console.log('Durys')
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});


router.get('/author/:_id', async (req, res) => {
    const _id = req.params._id;
    try {
        // 
        const author = await Author.findOne({ _id }).exec();
        res.json(author);
        console.log('Durys')
    } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

//Маршрут для получения данных пользователя по id
router.get('/book/:_id', async (req, res) => {
    const _id = req.params._id;
    try {
        // 
        const book = await Book.findOne({ _id }).exec();
        res.json(book);
        console.log('Durys')
    } catch (error) {
        console.error('Ошибка при получении данных о книге:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

//Используйте app.put() для настройки маршрута PUT-запроса
router.put('/user/:id', async (req, res) => {
    const { id } = req.params;
    const userData = req.body;

    try {
        const user = await User.findOneAndUpdate({ id }, userData, { new: true });
        res.json(user);
    } catch (error) {
        console.error('Ошибка при обновлении пользователя:', error);
        res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
    }
});

router.put('/book/:id', async (req, res) => {
    const { id } = req.params;
    const bookData = req.body;

    try {
        const book = await Book.findOneAndUpdate({ id }, bookData, { new: true });
        res.json(book);
    } catch (error) {
        console.error('Ошибка при обновлении пользователя:', error);
        res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
    }
});

router.put('/author/:id', async (req, res) => {
    const { id } = req.params;
    const authorData = req.body;

    try {
        const author = await Author.findOneAndUpdate({ id }, authorData, { new: true });
        res.json(author);
    } catch (error) {
        console.error('Ошибка при обновлении пользователя:', error);
        res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
    }
});

router.delete('/user/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOneAndDelete({ _id: id });

        if (user) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Error deleting user' });
    }
});

router.delete('/book/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findOneAndDelete({ _id: id });

        if (book) {
            res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Error deleting book' });
    }
});

router.delete('/author/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const author = await Author.findOneAndDelete({ _id: id });

        if (author) {
            res.status(200).json({ message: 'Author deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting aauthor:', error);
        res.status(500).json({ error: 'Error deleting book' });
    }
});



module.exports = router;



