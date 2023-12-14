const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Ulbosyn API Documentation',
            version: '1.0.0',
            description:
                "Menin API documentim",
            contact: {
                name: "Ulbosyn Qarabay",
                url: "ulbosyn.com",
                email: "ulbosyn@narxoz.kz",
            },
        },
        servers: [
            {
                url: "http://localhost:8086/",
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;