var bookModel = require('./bookModel');
const bookMiddleware = require('../../middleware/bookMiddleware');


var createBookControllerFn = async (req, res) => {
    try {
        const body = req.body;

        const bookData = new bookModel({
            title: body.title,
            author: body.author,
            year: body.year,
            photo: body.photo,
            info: body.info,
        });

        const validationError = bookData.validateSync();
        if (validationError) {
            // Handle validation errors
            res.status(400).send({ "status": false, "message": validationError.message });
            return;
        }

        await bookData.save();

        res.status(200).send({
            "status": true, "message": "Book created successfully"
        });
    } catch (error) {
        res.status(400).send(error);
    }
};


// Ваш bookController.js

// ...

// Получение списка книг по критериям
const getBooksByCriteria = async (req, res) => {
    try {
      const { title, author } = req.query;
      
      let query = {};
      if (title) {
        query.title = { $regex: title, $options: 'i' }; // Поиск по названию (регистронезависимый)
      }
      if (author) {
        query.author = { $regex: author, $options: 'i' }; // Поиск по автору (регистронезависимый)
      }
  
      const books = await Book.find(query);
      res.status(200).json(books);
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, message: 'Ошибка при поиске книг', error });
    }
  };
  

module.exports = {
    createBookControllerFn,
    getBooksByCriteria,
};


