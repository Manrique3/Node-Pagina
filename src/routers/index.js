const express = require ('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('index.html', {title: 'My Website Node.js'});
});

router.get('/contact', (req, res)=>{
    res.render('contact.html', {title: 'My contact'});
});


module.exports = router;

