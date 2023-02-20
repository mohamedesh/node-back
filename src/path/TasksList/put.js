module.exports = (app,TaskLists)=>{
    app.put("/todolist/tasklists/:id",async (req,res)=>{
        try{
                const {title,description} = req.body
                const id = req.params.id
                const tasklistId = await TaskLists.findByPk(id)
                const tasklists = await tasklistId.update(
                    {
                        title,
                        description
                    })
            res.json(tasklists)
        }catch(err){
            res.status(500).json({message: "allo la terre"})
        }
    })

}