const Author = require('../src/author/authorModel');
const Book = require('../src/book/bookModel');

const createBookAndLinkToAuthor = async (req, res) => {
    try {
        const { title, authorName, year, photo, info } = req.body;

        // Найти или создать автора по имени
        let author = await Author.findOne({ name: authorName });

        if (!author) {
            author = new Author({
                name: authorName,
            });

            await author.save();
        }

        // Создать книгу и связать ее с автором
        const newBook = new Book({
            title,
            year,
            photo,
            info,
            author: author._id, // Связать книгу с автором
        });

        await newBook.save();

        res.status(200).json({ status: true, message: 'Книга и связанный автор успешно созданы.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Ошибка создания книги и автора', error });
    }
};

module.exports = {
    createBookAndLinkToAuthor,
};

