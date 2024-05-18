const Apartment = require('../models/apartment.js')

module.exports = {
    index,
    show
}

function index (req, res) {
    const apartments = Apartment.getAll();
    res.json(apartments);
}
function show (req, res) {
    const apartment = Apartment.getOne(req.params.id);
     res.json(apartment  || { message: 'data not found'});
 }
