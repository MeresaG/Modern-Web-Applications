const dbConnection= require("../data/dbConnection");


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
            return res.status(500).json({error : "Couldn't get the datas"})

        }
        console.log("Found games", games);
        console.log("Number of collections", games.length)
        return res.status(200).json(games);
        });
}

module.exports.addOne = (req, res) => {
    return res.status(200).json(req.body);
}

module.exports.getOne = (req, res) => {
    console.log("Get All Controller called");
    return res.status(200).json(gameData[req.params.gameIndex]);
}