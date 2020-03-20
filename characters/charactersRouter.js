const router = require('express').Router();
const Chars = require('./charactersModel.js');

router.get('/', (req, res) => {
    Chars.find()
        .then(characters => {
            res.status(200).json(characters)
        })
        .catch(() => {
            res.status(500).json({ message: 'Errors everywhere, go fix them!'})
        })
})


module.exports = router;