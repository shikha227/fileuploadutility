const express=require("express");
const router= express.Router();
const multer = require('multer');
const dataForge = require('data-forge');
require('data-forge-fs');


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads') //Destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //File name after saving
  }
})

var upload = multer({ storage: storage })


router.post('/upload', upload.single('statement'), (req, res) => {
    console.log(`new upload = ${req.file.filename}\n`);

    const dealersData = dataForge.readFileSync("./uploads/listings.csv").parseCSV().parseInts("price");   


    const summarized = dealersData
    .groupBy(row => row.seller_type)
    .select(group => ({
        seller_type: group.first().seller_type,
        amount: group.deflate(row => row.price).average(), // Sum sales per client.
    }))
    .inflate() ;// Series -> dataframe.
    // Convert to regular JS array.
  
                                           
    var asJSArray = summarized.toArray();
    console.log(asJSArray);

    res.json({ response: asJSArray });

});

function sum(a, b) {
  return a + b;
}

 
exports.sum = sum;

module.exports=router;