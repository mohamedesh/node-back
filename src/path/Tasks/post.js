module.exports = (app,task)=>{
    app.post("/todolist/task",async(req,res)=>{
        try{
            const {name,description,active,amount} = req.body
            const tasks = await task.create({
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