require('dotenv').config()
const express = require("express");
const multer = require("multer");
const cors = require('cors');
const mysql = require("mysql2/promise");
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const app = express();

// Middlewares

app.use(express.json());
// app.use(cors());
const corsOptions = {
    origin: 'https://mrchickenet.netlify.app',  
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
     credentials: true,  
    };
 app.use(cors(corsOptions));  
// Configure Database

const connection = mysql.createConnection({
  port: process.env.MYSQLPORT,
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  ssl: {
    rejectUnauthorized: true  
  },
});

//Connect Database

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return; 
  }
  console.log("Connected to MySQL as id " + connection.threadId);
});


app.listen(process.env.MYSQLPORT, () => console.log(`listening on port ${process.env.MYSQLPORT}`));
 
// Multer Configuration
const storage = multer.diskStorage({   
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    cb(null, uploadDir);   
  },
  filename: function (req, file, cb) {
    const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  }
});

// Multer Instanse

const upload = multer({ storage: storage });  

const fs = require('fs');   
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));  



//Routing

// Add new dishes to database

app.post('/add-new-dish', upload.single('dish_image'), async (req, res) => {
   
    let { dish_name, dish_type, dish_price, dish_description } = req.body

    // Make sure a file was uploaded
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    let dish_image_path = `/uploads/${req.file.filename}`;  
     
    let addToDishes = `INSERT INTO Dishes (dish_name, dish_type, dish_price, dish_description, dish_image_path) VALUES (?, ?, ?, ?, ?)`


    connection.query(addToDishes, [dish_name, dish_type, dish_price, dish_description, dish_image_path], (err, results) =>{
        if (err) {
            console.error("Error inserting dish data: " + err.message);
            return res.status(500).send("Error inserting dish data");
         }
            
        console.log("Dish data inserted"); 
           
    res.json('Dish data inserted successfully!');
    console.log("Dish data inserted successfully!");
})

  })

  //Add new feedback to database

app.post('/add-new-feed',   async (req, res) => {

  
  let { feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date } = req.body
  
    let addToFeedbacks = `INSERT INTO Feedbacks (feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date) VALUES (?, ?, ?, ?, ?, ?)`

    connection.query(addToFeedbacks, [feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date], (err, results) =>{
        if (err) {
            console.error("Error inserting feedback data: " + err.message);
            return res.status(500).send("Error inserting feedback data");
         }
            
        console.log("Feedback data inserted"); 
           
    res.json('Feedback data inserted successfully!');
    console.log("Feedback data inserted successfully!");
})

  })

  // Add new order to database

app.post('/add-new-order',  upload.single('dish_image'), async (req, res) => {
    
    let { dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message } = req.body
 
    let addToOrders = `INSERT INTO Orders (dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message) VALUES (?, ?, ?, ?, ?, ?)`


    connection.query(addToOrders, [dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message], (err, results) =>{
        if (err) {
            console.error("Error inserting dish data: " + err.message);
            return res.status(500).send("Error inserting dish data");
         }
            
        console.log("Dish data inserted"); 
           
    res.json('Dish data inserted successfully!');
    console.log("Dish data inserted successfully!");
 })

})

  // Retrive Dishes data from Database by Dish Type 

app.get('/select_dish', (req, res) =>{

    let selectFromDishTable = "SELECT * FROM Dishes ORDER BY dish_type "
    
    connection.query(selectFromDishTable, (err, results, feilds) => {
            if(err) console.log(err); 
            console.table(results) 
            
            const  groupedDishes = {}
            for (const result of results ) {
                const dishType = result.dish_type;
                if (!groupedDishes[dishType]) {
                    groupedDishes[dishType] = [];
                }
                groupedDishes[dishType].push(result); 
            }
            res.send(groupedDishes) 
            return groupedDishes;
        }
    )      
})

  // Retrive Dishes data from Database by Dish Id

app.get('/select_dish_normal', (req, res) =>{

    let selectDishTable = "SELECT * FROM Dishes ORDER BY dish_id "
    
    connection.query(selectDishTable, (err, results, feilds) => {
            if(err) console.log(err); 
            res.send(results) 
        })      
})

  // Retrive Feedbacks from database

app.get('/select_feed', (req, res) =>{

    let selectFromFeedTable = "SELECT * FROM Feedbacks ORDER BY feed_id DESC"
    
    connection.query(selectFromFeedTable, (err, results, feilds) => {
            if(err) console.log(err); 
            res.send(results) 
        }
    )      
})

  // Retrive Orders from Database

app.get('/select_order', (req, res) =>{

    let selectFromFeedTable = "SELECT * FROM Orders ORDER BY order_id DESC"
    
    connection.query(selectFromFeedTable, (err, results, feilds) => {
            if(err) console.log(err); 
            res.send(results) 
        }
    )      
})

  // Update price of dish in database

app.put('/update_price', (req, res) => {
  console.log(req.body);
  
 	const { id_edit, price_edit } = req.body;

	let updatePrice = `UPDATE Dishes SET dish_price = ? WHERE dish_id = ?`;

	connection.query(updatePrice, [price_edit, id_edit], (err, results, fields) => {
		if (err) console.log(err);
         
		console.log("Price record updated");
     res.json({message: "Price updated successfully!"});
		 
	});

});

  // Remove dish from database

app.delete("/remove_dish", (req, res) => {
    const { id_delete } = req.body;  
	
	let removeDish = `DELETE FROM Dishes WHERE dish_id = ?`;
 
	connection.query(removeDish, [id_delete], (err, results) => {
		if (err) console.log(err);    
		    console.log( "Dish Deleted");
	});
});


