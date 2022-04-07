const express = require('express');
const router = express.Router();
//Routes
router.get('/', (req, res) => {
    res.render('index', { title: 'Professional Portfolio' });
});


router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

router.get('/projects', (req, res) => {
    res.render('contact', { title: 'Projects Page' });
});

module.exports = router;