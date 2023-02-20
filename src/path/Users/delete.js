module.exports = (app,Users)=>{
    app.delete("/todolist/Users/:id",async (req,res)=>{
    try{
            const idElt = req.params.id
            const {id,pseudo,mail,age} = req.body
            const UserId =await Users.findByPk(idElt)
            const User =await UserId.destroy()
            res.json(User)


    }catch(err){
        res.status(500).json({
            message : "alors tu l'as destroy"
        })
    }
})}