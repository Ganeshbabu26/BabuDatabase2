const express = require("express")
const cors = require("cors")
const db = require("./db")

const app = express();
app.use(cors())
app.use(express.json())

app.post("/submit", (req, res) => 
{
    const { Name, Password, Email, Department, City } = req.body;

    console.log("Received data:", req.body); // 👈 NEW
    const sql = "INSERT INTO StudentDetails(Name, Password, Email, Department, City) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [Name, Password, Email, Department, City], (err, result) => {
        if (err) {
            console.error("Insert error:", err); // 👈 NEW
            return res.status(500).json({ error: err.message });
        }
        console.log("Insert success:", result); // 👈 NEW
        res.json({ message: 'Data inserted successfully!' });
    });
});


const PORT = 5000;
app.listen(PORT,()=>
{
    console.log(`server running on port: http://localhost:${PORT}`);
})