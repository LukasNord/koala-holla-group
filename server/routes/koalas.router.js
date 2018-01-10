const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM koala';
    pool.query(queryText)
        .then((result) => {
            console.log('results: ', result.rows);
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('error:', err);
            res.sendStatus(500);
        })
});

module.exports = router;