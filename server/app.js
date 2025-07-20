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
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
        credentials: true,  
    };
app.use(cors(corsOptions)); 


// Configure Database

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
});

//Database already connected
// Mr. Chicken never disappoints! The feed chicken was crispy, juicy and full of flavor. The staff were super friendly and made the whole dining experiance enjoyable. Easily one of my favorite spots in Addis!

//Sun Jul 20 2025 08:48:42 GMT+0300
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


// Multer Instance
const upload = multer({ storage: storage });

// Upload directry
const fs = require('fs');   
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir, { recursive: true });
}
// Serve static files from the "uploads" directory
app.use('/uploads', express.static(uploadDir));

 

//Routing

// Add new dishes to database
  
 app.post('/add-new-dish', upload.single('dish_image'), async (req, res) => {
    try {
        const { dish_name, dish_type, dish_price, dish_description } = req.body;

        // Validate input (very important!)
        if (!dish_name || !dish_type || !dish_price || !dish_description) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded.' });
        }

        // Construct the image path
        const dish_image_path = `/uploads/${req.file.filename}`;

        // SQL query with placeholders (prevents SQL injection)
        const addToDishes = `
            INSERT INTO Dishes (dish_name, dish_type, dish_price, dish_description, dish_image_path)
            VALUES (?, ?, ?, ?, ?)
        `;

        // Execute the query using the pool
        const [results] = await pool.query(addToDishes, [dish_name, dish_type, dish_price, dish_description, dish_image_path]);

        console.log('Dish data inserted successfully');
        res.status(201).json({ message: 'Dish data inserted successfully!', insertId: results.insertId }); // Include the inserted ID
    } catch (error) {
        console.error('Error inserting dish data:', error);
        res.status(500).json({ error: 'Error inserting dish data' });
    }
});

  //Add new feedback to database
 
app.post('/add-new-feed', async (req, res) => {
    console.log(req.body);
    
    try {
        const { feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date } = req.body;

        // Validate input (very important!)
        if (!feed_user_name || !feed_user_email || !feed_text || !feed_rating || !feed_time || !feed_date) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
     
        // SQL query with placeholders (prevents SQL injection)
        const addToFeedbacks = `
            INSERT INTO Feedbacks (feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        // Execute the query using the pool
        const [results] = await pool.query(addToFeedbacks, [feed_user_name, feed_user_email, feed_text, feed_rating, feed_time, feed_date]);

        console.log('Feedback data inserted successfully');
        res.status(201).json({ message: 'Feedback data inserted successfully!', insertId: results.insertId }); // Include the inserted ID
    } catch (error) {
        console.error('Error inserting feedback data:', error);
        res.status(500).json({ error: 'Error inserting feedback data' });
    }
});

  // Add new order to database

app.post('/add-new-order', upload.single('dish_image'), async (req, res) => {
    try {
        const { dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message } = req.body;

        // Validate input (very important!)
        if (!dish_id || !dish_time || !dish_user_name || !dish_user_email || !dish_total_price || !dish_message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // SQL query with placeholders (prevents SQL injection)
        const addToOrders = `
            INSERT INTO Orders (dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        // Execute the query using the pool
        const [results] = await pool.query(addToOrders, [dish_id, dish_time, dish_user_name, dish_user_email, dish_total_price, dish_message]);

        console.log('Order data inserted successfully');
        res.status(201).json({ message: 'Order data inserted successfully!', insertId: results.insertId }); // Include the inserted ID
    } catch (error) {
        console.error('Error inserting order data:', error);
        res.status(500).json({ error: 'Error inserting order data' });
    }
});

  // Retrive Dishes data from Database by Dish Type 
 
app.get('/select_dish', async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM Dishes ORDER BY dish_type");

        // Group the dishes by dish_type
        const groupedDishes = {};
        for (const result of results) {
            const dishType = result.dish_type;
            if (!groupedDishes[dishType]) {
                groupedDishes[dishType] = [];
            }
            groupedDishes[dishType].push(result);
        }

        res.json(groupedDishes);
    } catch (error) {
        console.error("Error selecting dishes:", error);
        res.status(500).json({ error: 'Error selecting dishes' });
    }
});

  // Retrive Dishes data from Database by Dish Id

app.get('/select_dish_normal', async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM Dishes ORDER BY dish_id");
        res.json(results);
    } catch (error) {
        console.error("Error selecting dishes:", error);
        res.status(500).json({ error: 'Error selecting dishes' });
    }
});

 // Retrive Feedbacks from database
 
app.get('/select_feed', async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM Feedbacks ORDER BY feed_id DESC");
        res.json(results);
        console.log(results);
        
    } catch (error) {
        console.error("Error selecting feedbacks:", error);
        res.status(500).json({ error: 'Error selecting feedbacks' });
    }
});

  // Retrive Orders from Database

app.get('/select_order', async (req, res) => {
    try {
        const [results] = await pool.query("SELECT * FROM Orders ORDER BY order_id DESC");
        res.json(results);
    } catch (error) {
        console.error("Error selecting orders:", error);
        res.status(500).json({ error: 'Error selecting orders' });
    }
});
  // Update price of dish in database

app.put('/update_price', async (req, res) => {
    try {
        const { id_edit, price_edit } = req.body;

        // Validate Input (Important!)
        if (!id_edit || !price_edit) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const updatePrice = `
            UPDATE Dishes SET dish_price = ? WHERE dish_id = ?
        `;

        const [results] = await pool.query(updatePrice, [price_edit, id_edit]);

        console.log("Price record updated");
        res.json({ message: "Price updated successfully!" });
    } catch (error) {
        console.error("Error updating price:", error);
        res.status(500).json({ error: "Error updating price" });
    }
});

 // Remove dish from database
app.delete("/remove_dish", async (req, res) => {
    try {
        const { id_delete } = req.body;

        // Validate Input (Important!)
        if (!id_delete) {
            return res.status(400).json({ error: 'Missing dish ID' });
        }

        const removeDish = `
            DELETE FROM Dishes WHERE dish_id = ?
        `;

        const [results] = await pool.query(removeDish, [id_delete]);

        console.log("Dish Deleted");
        res.json({ message: "Dish deleted successfully!" });
    } catch (error) {
        console.error("Error deleting dish:", error);
        res.status(500).json({ error: "Error deleting dish" });
    }
});

// Remove feedback
app.delete("/remove_feed", async (req, res) => {
    try {
        const { id_delete } = req.body;

        // Validate Input (Important!)
        if (!id_delete) {
            return res.status(400).json({ error: 'Missing feed ID' });
        }

        const removeFeed = `
            DELETE FROM Feedbacks WHERE feed_id = ?
        `;

        const [results] = await pool.query(removeFeed, [id_delete]);

        console.log("Feedback Deleted");
        res.json({ message: "Feedback deleted successfully!" });
    } catch (error) {
        console.error("Error deleting Feedback:", error);
        res.status(500).json({ error: "Error Feedback dish" });
    }
});


 
// Listen to port
const PORT = process.env.MYSQLPORT || 3000;

app.listen(PORT, "0.0.0.0", () => console.log(`Server listening on port ${PORT}`));


