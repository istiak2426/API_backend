

module.exports.publicPost = async (req, res) => {
 
    return res.status(200).send("This is a public post");
}


module.exports.privatePost = async (req, res) => {
 
    return res.status(200).send("This is a private post");
}