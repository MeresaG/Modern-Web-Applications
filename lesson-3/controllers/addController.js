module.exports.sum = (req, res) => {
    let numOne = req.params.numOne;
    let numTwo = req.query.numTwo;
    let sum = parseInt(numOne, 10) + parseInt(numTwo, 10);
    console.log(`The sum of ${numOne} and ${numTwo} = ${sum}`);

    return res.status(200).json({sum});
}