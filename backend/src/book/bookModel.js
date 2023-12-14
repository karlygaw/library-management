const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger, // Validate that the year is an integer
            message: 'Year must be an integer',
        },
    },
    photo: {
        type: String, // You can add additional validation for the photo field if needed
    },
    info: {
        type: String, // Теперь тип String
        required: true,
    },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;


// const mongoose = require('mongoose');
// const Author = require('../author/authorModel');

// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Author', // Убедитесь, что это совпадает с названием вашей модели автора
//     },
//     year: {
//         type: Number,
//         required: true,
//         validate: {
//             validator: Number.isInteger,
//             message: 'Year must be an integer',
//         },
//     },
//     photo: {
//         type: String,
//     },
//     info: {
//         type: String,
//         required: true,
//     },
// });

// // ...

// bookSchema.pre('save', async function (next) {
//     try {
//         const author = await Author.findById(this.author);

//         if (!author) {
//             const newAuthor = new Author({
//                 name: this.author.name, // You might need to adjust this based on what you receive in this.author
//             });

//             await newAuthor.save();
//             this.author = newAuthor;
//         } else {
//             this.author = author._id;
//         }

//         next();
//     } catch (error) {
//         next(error);
//     }
// });


// const Book = mongoose.model('Book', bookSchema);

// module.exports = Book;



// const createBookAndLinkToAuthor = async (req, res) => {
//     try {
//         const { title, authorName, year, photo, info } = req.body;

//         // Найти или создать автора по имени
//         let author = await Author.findOne({ name: authorName });

//         if (!author) {
//             author = new Author({
//                 name: authorName,
//             });

//             await author.save();
//         }

//         // Создать книгу и связать ее с автором
//         const newBook = new Book({
//             title,
//             year,
//             photo,
//             info,
//             author: author._id, // Связать книгу с автором
//         });

//         await newBook.save();

//         // Добавить книгу к списку книг у автора
//         author.books.push(newBook._id);
//         await author.save();

//         res.status(200).json({ status: true, message: 'Книга и связанный автор успешно созданы.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ status: false, message: 'Ошибка создания книги и автора', error });
//     }
// };
