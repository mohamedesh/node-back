module.exports = (app,task)=>{
    app.put("/todolist/task/:id",async(req,res)=>{
        try{
            const {name,description,active,amount} = req.body
            const id = req.params.id
            const taskId = await task.findByPk(id)
            const tasks = await taskId.update({
                name,
                description,
                active : true,
                amount
            })
        }catch(err){
            res.status(500).json({
                message : "beh pour l'instant ça ne marche pas"
            })
        }
    })
}