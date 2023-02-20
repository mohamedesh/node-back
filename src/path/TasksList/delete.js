module.exports = (app,TaskLists)=>{
    app.delete("/todolist/tasklists/:id", async(req,res)=>{
        try{
            const id = req.params.id
            const tasklistId = await TaskLists.findByPk(id)
            const tasklists = await tasklistId.destroy()
            res.json(tasklists)
        }catch(err){
            res.status(500).json({
                message : "je ne veux pas que tu tombe sur cette erreur"
            })
        }
    })
}