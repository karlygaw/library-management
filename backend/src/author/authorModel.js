const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String, // You can add additional validation for the photo field if needed
    },
    books: {
        type: String, // You can add additional validation for the photo field if needed
    },
    // books: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Book',
    //     },
    // ],
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;


// const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true, // Убедитесь, что имя автора уникально
//     },
//     books: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Book',
//         },
//     ],
// });

// const Author = mongoose.model('Author', authorSchema);

// module.exports = Author;




