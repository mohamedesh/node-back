const bcrypt = require('bcrypt')

module.exports = (app,Users)=>{
    app.post("/addUser", (req,res) => {
        try{
            const password = 'bgdu33'
            const mail = 'toto@gmail.com'
            bcrypt.hash(password,10)
                .then(hash => {
                    console.log(Users)
                    Users.create({
                        pseudo:'toto',
                        mail : mail,
                        age:22,
                        password : hash
                    })
                }).then(element =>{
                console.log(element)
                res.json(element)
            })


            // Users.create(
            //      {
            //          pseudo:'toto',
            //          mail:'toto@gmail.com',
            //          password: 'bgdu33',
            //          age: 11
            //      }
            //  )
        }catch(err){
            res.status(500).json({
                message:'dmg pr toi'
            })
        }


    })
}