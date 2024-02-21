const express = require('express');
const mongoose = require ('mongoose');

const routess = require('./routes/routess.js'); 
const app = express();
const PORT = process.env.PORT || 1001;


mongoose.connect('mongodb+srv://bellemagoJo:yIpxt4Wkr95OQr29@cluster0.pmvx9ku.mongodb.net/?retryWrites=true&w=majority')
.then (() => {
  console.log('MongoDB: Yo are connected!')
}).catch ((error) => {
  console.log()
})

app.use(express.json()); 

app.use('/api/belle', routess); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
