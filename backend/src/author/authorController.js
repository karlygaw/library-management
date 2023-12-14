// const Author = require('./authorModel');

// const createAuthor = async (req, res) => {
//     try {
//         const { name } = req.body;

//         const existingAuthor = await Author.findOne({ name });

//         if (existingAuthor) {
//             return res.status(400).json({ status: false, message: 'Author with the given name already exists.' });
//         }

//         const newAuthor = new Author({
//             name,
//         });

//         await newAuthor.save();

//         res.status(200).json({ status: true, message: 'Author created successfully.' });
//     } catch (error) {
//         res.status(500).json({ status: false, message: 'Error creating author.', error });
//     }
// };

// module.exports = {
//     createAuthor,
//     // Other methods and middleware...
// };

var authorModel = require('./authorModel');

var createAuthorControllerFn = async (req, res) => {
    try {
        const body = req.body;

        const authorData = new authorModel({
            name: body.name,
            photo: body.photo,
            books: body.books,
        });

        const validationError = authorData.validateSync();
        if (validationError) {
            // Handle validation errors
            res.status(400).send({ "status": false, "message": validationError.message });
            return;
        }

        await authorData.save();

        res.status(200).send({
            "status": true, "message": "Author created successfully"
        });
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    createAuthorControllerFn
};

