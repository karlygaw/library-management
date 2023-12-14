const express = require('express');
const app = express();
var mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');
app.use(express.json());
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

var routes = require('./routes/routes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Настройка CORS
app.use(cors(
  {
    origin: "http://localhost:4200"
  }
));

mongoose
  .connect('mongodb://127.0.0.1:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connected!');
    app.listen(8086, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Port Connected!');
      }
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
app.use(routes);

