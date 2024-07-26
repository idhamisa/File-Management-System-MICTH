const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const sql = require('msnodesqlv8');

app.use(morgan('combine'))


const connectionString = "server=LAPTOP-0CRS004B;Database=File_data;Trusted_Connection=Yes;Driver={ODBC Driver 17 for SQL Server}";
app.use(bodyParser.json())
app.use(cors())

app.get('/status',(req,res) => {
    res.send({
        message:'hello world!'
    })

})

app.get("/", (req, res) => {
    const query = "SELECT * FROM [vw_sites-23.Jul.2024-2.19pm]";

    sql.query(connectionString, query, (err, rows) => {
        if (err) {
            console.error("Error executing query for /:", err);
            return res.status(500).send("Server error");
        }

        // Log the query results to the console
        console.log("Query Results for /:", rows);

        // Send the query results as a response
        res.json(rows); // Changed to json for proper formatting
    });
});

app.listen(process.env.PORT || 8081)