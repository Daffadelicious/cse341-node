// Function logic is done here and sent to the routes file

const routeTest = (req, res, next)=>{
    res.json('Riley Slik')
}

const anothaOne = (req, res, next)=>{
    res.json('Tawnee is cute')
}

module.exports = { routeTest, anothaOne }