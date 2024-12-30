import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
const mongoUrl = "mongodb+srv://kamran:kamran@cluster0.97y4r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// User schema and model for Authentication
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// Employee schema and model
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salary: { type: Number, required: true },
    joiningDate: { type: Date, default: Date.now },
    timings: { type: String, required: true }, // e.g., "9 AM to 5 PM"
});
const Employee = mongoose.model('Employee', employeeSchema);

// User Signup Route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "Email already registered" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        return res.json({ success: true, message: "Signup successful" });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.json({ success: false, message: "Signup failed" });
    }
});

// User Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.json({ success: false, message: "Invalid email or password" });
        }

        return res.json({ success: true, message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.json({ success: false, message: "Login failed" });
    }
});

// Employee Management Routes

// Add New Employee
app.post('/employees', async (req, res) => {
    const { name, email, salary, timings } = req.body;
    try {
        const newEmployee = new Employee({ name, email, salary, timings });
        await newEmployee.save();
        return res.json({ success: true, message: 'Employee added successfully', employee: newEmployee });
    } catch (error) {
        console.error("Error adding employee:", error);
        return res.json({ success: false, message: 'Failed to add employee' });
    }
});

// Get All Employees
app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        return res.json(employees);
    } catch (error) {
        console.error("Error fetching employees:", error);
        return res.json({ success: false, message: 'Error fetching employees' });
    }
});

// Get Employee by ID
app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.json({ success: false, message: 'Employee not found' });
        }
        return res.json(employee);
    } catch (error) {
        console.error("Error fetching employee by ID:", error);
        return res.json({ success: false, message: 'Error fetching employee' });
    }
});

// Update Employee
app.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.json({ success: false, message: 'Employee not found' });
        }
        return res.json({ success: true, message: 'Employee updated successfully', employee: updatedEmployee });
    } catch (error) {
        console.error("Error updating employee:", error);
        return res.json({ success: false, message: 'Failed to update employee' });
    }
});

// Delete Employee
app.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.json({ success: false, message: 'Employee not found' });
        }
        return res.json({ success: true, message: 'Employee deleted successfully' });
    } catch (error) {
        console.error("Error deleting employee:", error);
        return res.json({ success: false, message: 'Failed to delete employee' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
