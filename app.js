const express = require('express');
const app = express();

const usermodle = require('./user.modle.js');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

// aise he about
app.get('/about', (req, res) => {
  res.send('About Us Page');
});
//create
app.get('/create', async (req, res) => {
  let createduser = await usermodle.create(
    {name: 'Pushpesh Kumar', 
    email: 'link@gmail,com',
    password: 'password123'
  });
    res.send(createduser);
});
//update
app.get('/update', async (req, res) => {
  let updateduser = await usermodle.findOneAndUpdate(
    {name: 'John Doe'},
    {name: 'Jane Doe'},
    {new: true}
  );
  res.send(updateduser);

})

//read
app.get('/read', async (req, res) => {
  let allusers = await usermodle.find({});
  res.send(allusers);
});
//delete
app.get('/delete', async (req, res) => {
  let deleteduser = await usermodle.findOneAndDelete(
    {name: 'John Doe'},
    
  );
  res.send(deleteduser);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
module.exports = app;