const houses = [
    {
        id: 0,
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        hasPorch: false,
        hasGarage: false,
        hasPool: false,
    },
    {
        id: 1,        
        numberOfBedrooms: 2,
        numberOfBathrooms: 1,
        hasPorch: true,
        hasGarage: false,
        hasPool: false,
    },
    {
        id: 2,
        numberOfBedrooms: 3,
        numberOfBathrooms: 1,
        hasPorch: false,
        hasGarage: false,
        hasPool: true,
    },
    {
        
        id: 3,
        numberOfBedrooms: 4,
        numberOfBathrooms: 2,
        hasPorch: false,
        hasGarage: true,
        hasPool: false,
    },
    {
        id: 4,
        numberOfBedrooms: 3,
        numberOfBathrooms: 2,
        hasPorch: true,
        hasGarage: true,
        hasPool: false,
    },
]
module.exports = {
    getAll: function(){
        return houses;
    },

    getOne: function(id) {
        return houses.find((house) => house.id === parseInt(id) );
    }
}
