var faker = require("faker");

var appRouter = function(app){
    
    app.get("/", function(req, res, next) {
        res.status(200).send("Welcome to my rest API");
    });

    app.get("/user", function(req, res, next) {
        var data = ({
            firstName:  faker.name.firstName(),
            lastName: faker.name.lastName(),
            userName:  faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(data);
    });

    app.get("/user/:num", function(req, res, next) {
        var users = [];
        var num = req.params.num;

        if (isFinite(num) && num > 0){
            for(i = 0; i <= num-1; i++){
                users.push({
                   firstName: faker.name.firstName(),
                   lastName: faker.name.lastName(),
                   userName: faker.internet.userName(),
                   email: faker.internet.email()
                })
            }
            res.status(200).send(users);
        } else {
            res.status(400).send({message: 'Invalid Number Supplied'})
        }
        
    })

}

module.exports = appRouter;