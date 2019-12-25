const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '20mb' }));
app.use('*', cors({
    'allowedHeaders': ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS',
    'preflightContinue': false
  }));

  const registeredUsers = ['Ravi', 'Arun', 'Amit', 'TestUser']

  app.get("/userexists/:username", (req, res)=>{
    let username = req.params.username
    console.log(username);
    let index = registeredcourses.indexOf(username)
    if(index<0){
        res.json({exists: false})
    }
    else{
        res.json({exists: true})
    }
    
})

  const todos = [
    {"text" : "Buy Milk from Server !!", done: true},
    {"text" : "Watch Fifa, CR vs Brazil!!"},
    {"text" : "Book weekend tickets"}
]

app.get('/todos', (req, res)=>{
    res.json(todos);
})

app.post('/todo', (req, res)=>{
    var todo = req.body
    console.log(todo)
    todos.push(todo);
    res.json(todos);
})

app.delete('/todos/:index', (req, res)=>{
    var index = req.params.index
    console.log(index)
    todos.splice(index, 1);
    res.json(todos);
})
  const courses = [
    {
        title: 'Angular!!',
        summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
      },
      {
        title: 'ReactJS',
        summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
      },
      {
        title: 'Ember',
        summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
      },
      {
        title: 'EmberJS',
        summary: 'ds klgsa jkgsdkl jkdgdks gjklsdk gdskd sksdksk'
      }
]

app.get("/courses", (req, res)=>{
    res.json({success: true, data: courses});
})

app.post("/course", (req, res)=>{
    courses.push(req.body.course);
    res.json({success: true});
})
app.delete("/courses/:index", (req, res)=>{
    let numberOfElementsToRemove = 1;
    courses.splice(req.params.index, numberOfElementsToRemove);
    res.json({success: true});
})
app.put("/courses/:index", (req, res)=>{
    users[req.params.index] = req.body.user;
    res.json({success: true});
})

app.set('port', (process.env.PORT || 7000));
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
  