module.exports = (app,TaskLists)=>{
    app.get("/todolist/tasklists",async (req,res)=>{
        const {title,description} = req.body
        const tasklists = await TaskLists.findAll({
            title,
            description
        })
        res.json(tasklists)
    })
}