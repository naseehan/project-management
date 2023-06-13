const express = require('express')
//Object Data Modeling library for Node.js and MongoDB
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express()
const dotenv = require('dotenv');
dotenv.config();

//  Cross-Origin Resource Sharing - to make cross-origin HTTP requests securely
const cors = require('cors');
app.use(cors());
// connect to mongodb
mongoose.connect(process.env.MONGO_URL , {
    // tells Mongoose to use the new MongoDB connection string parser
    useNewUrlParser: true,
    // enables the new unified topology engine for monitoring server connections.
    useUnifiedTopology: true,
});

// define task schema
const taskSchema = new mongoose.Schema({
    name:  String,
    description:  String,
    date:  String,
    member: String,
});

// define project schema
const projectSchema = new mongoose.Schema({
    name: String,
    members: Number,
    date: Date,
})

// define user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        minlength : 8,
    },
})

                            // Middlewares

// allows  application to handle JSON data sent in the request body
// Express.js will automatically parse the JSON data and make it available in req.body
app.use(express.json())
// allows application to handle form data submitted via HTML forms.
app.use(express.urlencoded({ extended: false}))

// use schema to create mongoose model
const Task = mongoose.model('Task', taskSchema)
const Project = mongoose.model('Project', projectSchema)
const User = mongoose.model('User', userSchema)
// app.use(express.json())

// API endpoint for saving a task
app.post('/task', async (req, res) => {
    try {
        const { name, description, date, member } = req.body
        const task = new Task ({ name, description, date, member })
        await task.save()
        res.status(201).json({ message: 'Task saved successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

// API endpoint for saving a project
app.post('/projects', async (req, res) => {
    try {
// extracts the values from the request body
        const {name, members, date } = req.body
//creates a new instance of the 'Project' model with the extracted values
        const project = new Project ({ name, members, date })
        await project.save()
        res.status(201).json({ message: 'Project saved successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error '})
    }
})

// API endpoint for saving users
app.post('/register' , async (req, res) => {
    try {
        const {name, email, password} = req.body
        
        const findUser = await User.findOne({ name })
        // if the username already exits send this message
        if(findUser) {
          return res.status(300).json({message :"User name already exists"}) 
           
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User ({ name, email, password: hashedPassword })
        await user.save()
        res.status(201).json({ message: 'User  created successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error '})
    }
})

// API endpoint for logging in
app.post("/login", async (req, res) => {
    const { name, password, email } = req.body;
  
    if (name && password) {
      // Logging in with email and password
      const user = await User.findOne({ name });
  
      if (!user) {
        return res.status(400).json({ message: "User doesn't exist" });
      }
  
      const isPasswordTrue = await bcrypt.compare(password, user.password);
  
      if (!isPasswordTrue) {
        return res.status(300).json({ message: "Email or Username is Incorrect" });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ token, userID: user._id, name: user.name, email: user.email });
    } else {
      // Logging in with Google account
    //   password is not present
      try {
          const user = new User({ name, email });
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
          res.status(201).json({ message: 'User created successfully', token, userID: user._id, name: user.name, email: user.email });
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  });
  



// API endpoint for deleting a project
app.delete('/projects/:projectId', async (req, res) => {
    try{
            const{ projectId } = req.params
            await Project.findByIdAndDelete(projectId);
            res.status(200).json({ message: "project deleted successfully"})
    } catch (err) {
        res.status(500).json({ message: 'Internal sever error'})
    }
})




// API endpoint for requesting a task
app.get("/task", async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks); // Send the data as a JSON response
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to retrieve tasks" });
    }
  });

  app.get("/projects", async(req, res) => {
    try{
        const projects = await Project.find()
        res.json(projects)
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve projects"})
    }
  })


// start server
app.listen(process.env.PORT || 3001, () => {
    console.log('Server started in port 3001');
})