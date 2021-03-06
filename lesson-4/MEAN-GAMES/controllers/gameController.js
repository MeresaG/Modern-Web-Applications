const dbConnection= require("../data/dbConnection");
const ObjectId= require("mongodb").ObjectId;

module.exports.getAll = (req, res) => {
    console.log("Get All Controller called");
    const db= dbConnection.get();
    console.log("db", db);
    const gameCollection= db.collection("games");
    let offset = 0;
    let count = 3;
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
        count = count > 10 ? 10 : count;
    }
    gameCollection.find().skip(offset).limit(count).toArray(function(err, games) {
        if(err) {
            return res.status(500).json({error : err})

        }
        console.log("Found games", games);
        console.log("Number of collections", games.length)
        return res.status(200).json(games);
        });
}

module.exports.addOne = (req, res) => {
    console.log("Add One Controller called");
    const db= dbConnection.get();
    console.log("db", db);
    const gameCollection= db.collection("games");
    let newGame = {};
    if(req.body && req.body.title&& req.body.price && req.body.players && req.body.age ) {
        
        if(parseInt(req.body.players) >= 1 && parseInt(req.body.players) <= 11 && parseInt(req.body.age) >= 6 && parseInt(req.body.age) <= 99) {

            newGame.title = req.body.title;
            newGame.price = parseFloat(req.body.price);
            newGame.playes = parseInt(req.body.players, 10);
            newGame.age = parseInt(req.body.age, 10);

            gameCollection.insertOne(newGame, function(err, response) {
                if (err) {
                res.status(500).json({error: err});
                } else {
                console.log(response);
                res.status(201).json(response);
                }

            });
        }
        else {
            return res.status(500).json({error : "Age must be between 6 and 99 or players must be between 1 to 11"});
        }
    }
    else {
        return res.status(404).json({error : "No body Submited"});
    }
    
}

module.exports.getOne = (req, res) => {
    console.log("Get One Controller called");
    const db= dbConnection.get();
    console.log("db", db);
    const gameCollection= db.collection("games");
    const gameId= req.params.gameId;
    gameCollection.findOne({_id : ObjectId(gameId)},function(err, games) {
        if(err) {
            return res.status(500).json({error : err})

        }
        console.log("Found game", games);
        console.log("Number of collections", games.length)
        return res.status(200).json(games);
        });
}

module.exports.deleteOne = (req, res) => {
    console.log("Get One Controller called");
    const db= dbConnection.get();
    console.log("db", db);
    const gameCollection= db.collection("games");
    const gameId= req.params.gameId;
    gameCollection.deleteOne({_id : ObjectId(gameId)},function(err, response) {
        if(err) {
            return res.status(500).json({error : err})

        }
        console.log("Deleted game", gameId);
        return res.status(200).json(response);
        });
}