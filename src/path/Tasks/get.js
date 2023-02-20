module.exports = (app,task)=>{
    app.get("/todolist/task",async(req,res)=>{
        try{
            const {name,description,active,amount} = req.body
            const tasks = await task.findAll({
                    name,
                    description,
                    active : true,
                    amount
                }
            )
            res.json(tasks)
        }catch(err){
            res.status(500).json({
                message: "non pas encore"
            })
        }

    })
}