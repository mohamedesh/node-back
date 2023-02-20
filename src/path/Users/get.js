

module.exports = (app,Users)=>{
    app.get("/todolist/Users",async(req,res)=>{
        const User = await Users.findAll()
        res.json(User)
    })

}