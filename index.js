const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const place = require("./data/place.json")
const hotel = require("./data/hotel.json")
let cors = require('cors');
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/place",(req,res)=>{
    res.send(place)
})
app.get("/place/:id",(req,res)=>{
    const id = req.params.id;
    const selectedPlace = hotel.filter(place=>place.category_id == id);
    res.send(selectedPlace);
})
app.get("/hotel/:id",(req,res)=>{
    const id = req.params.id;
    const selectedHotel = hotel.find(hotel=>hotel._id == id);
    res.send(selectedHotel);
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})