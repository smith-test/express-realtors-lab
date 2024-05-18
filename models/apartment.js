//Define Array for our dummy database
const apartments = [
    {
        id: 0,
        sqFt: 1000,
        price: 1200,
        address: '1300 Main rd, apt 12',
        isPetFriendly: false,
        floorLevel: 3
    },
    {
        id: 1,
        sqFt: 1000,
        price: 1200,
        address: '1300 Main rd, apt 14',
        isPetFriendly: false,
        floorLevel: 4
    },
    {
        
        id: 2,
        sqFt: 1000,
        price: 1200,
        address: '1300 Main rd, apt 10',
        isPetFriendly: false,
        floorLevel: 2
    },
       {
        id: 3,
        sqFt: 1000,
        price: 1200,
        address: '1300 Main rd, apt 7',
        isPetFriendly: true,
        floorLevel: 1
    },
]
module.exports = {
    getAll: function(){
        return apartments;
    },

    getOne: function(id) {
        return apartments.find((apartment) => apartment.id === parseInt(id));
    },
}


