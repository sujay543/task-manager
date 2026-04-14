const dotenv = require('dotenv');
dotenv.config({path: './variable.env'});
const mongoose = require('mongoose');
const app = require('./index.js');

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("databse connected successfully");
}).catch((err)=> {
    console.log(err);
})

const port = process.env.PORT|| 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});