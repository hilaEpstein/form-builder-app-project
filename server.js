const express = require('express');
const bodyParser = require('body-parser');
const formModule = require('./formModule');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//get document from DB2 by index
app.post('/api/customers/getnewDB', (req, res) => {
  formModule.getFromDB2(req.body.index).then((data) => {
    res.send(data);
  });
});

//gets document from DB by name
app.post('/api/customers/getForm', (req, res) => {
  formModule.getFromDBbyName(req.body.name).then((data) => {
    res.send(data);
  });
});

//add new form to DB - addFormToDB
app.post('/api/customers/add', (req, res) => {
  formModule.addFormToDB(req.body).then(() => {
    res.send('');
  });
});

//update counter in DB after submitting -updatingCounterInDB
app.post('/api/customers/update', (req, res) => {
    formModule.updatingCounterInDB(req.body.name, req.body.counter).then(() =>{
      res.send('');
    });
  });

//insert new document to DB2 -  addFormToDB2
app.post('/api/customers/newDB', (req, res) => {
  formModule.addFormToDB2(req.body).then(() =>{
    res.send('');
  });
});

//return All data in DB
app.get('/api/customers/get', (req, res) => {
  formModule.getFromDB().then((data) => {
    res.send(data);
  });
});

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);

