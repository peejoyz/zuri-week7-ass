const Task = require('../model/task');

//get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        let tasks = await Task.find();
        if(tasks.length === 0) {
            res.status(404).json({
                success: false,
                message: "No Task Found"
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Tasks found",
                tasks,
                count: tasks.length
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

//Adding a task to a todo collection
exports.addTask = async (req, res) => {
    try {
        let task = await req.body
        let newTask = await Task.create(task);
        if(!newTask) return res.status(400).json({
            success: false,
            message: 'Task creation failed'
        })
        return res.status(201).json({
            success: true,
            message:'Task created successfully',
            task: newTask
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        }) 
    }
}

//get a single task
exports.getSingleTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let task = await Task.findOne(id);
        if(!task) return res.status(404).json({
            success: false,
            message: "Task not found"
        })
        res.status(200).json({
            success: true,
            message: "Task found",
            task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }

}

//Updating a particular todo task
exports.updateTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let task = await req.body
        let updateTask = await Task.findByIdAndUpdate(id, task, {new: true});
        
        if(!updateTask) return res.status(400).json({
            success: false,
            message: "Task not Updated"
        });

        res.status(200).json({
            success: true,
            message: "Task updated successfully.",
            task: updateTask
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
       })
    }
}

//delete todo task
exports.deleteTask = async (req, res) => {
    try {
        let id = {_id: req.params.id};
        let deleteTask = await Task.findByIdAndDelete(id);

        if(!deleteTask) return res.status(400).json({
            success: false,
            message: "Task not deleted"
        });

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully.",
            task: deleteTask
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
       }) 
    }

}