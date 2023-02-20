module.exports = (app,TaskLists)=>{
    app.post("/todolist/tasklists", async(req,res)=>{
        try{
            const {title,description} = req.body
            const tasklists = await TaskLists.create({
                title,
                description
                }

            )
            res.json(tasklists)
        }catch(err){
            res.status(500).json({
                message:"erreur de ouf là "
            })
        }
    })
}