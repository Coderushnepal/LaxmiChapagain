//  In models folder we write code associated directly to database or file i.e data dine ra data line code
// Model folder is the last layer connected to database
// For example: diskdb bata  direct data read and write garne code matra use hunxa


import diskDb from 'diskdb';

class Car {
    constructor() { //  Class ko object instance banauda(new keyword use hunxa) co nstructor call hunxa
        this.filename = 'cars';
        this.db = diskDb.connect('src/db', [this.filename]);
    }

    getAll() {
        return this.db[this.filename].find(); // this.db.cars is equivalent to this.db['cars'], cars.json ko sabai data dinxa
    }

    getById(id) {
        return this.db[this.filename].findOne({ _id: id });
    }

    findByParams(params) {
        return this.db[this.filename].findOne(params);
    }

    save(data) {
        return this.db[this.filename].save(data);
    }

    updateById(id, data) {
        return this.db[this.filename].update({ _id: id }, data);
    }

    removeById(id) {
        return this.db[this.filename].remove({ _id: id });
    }
}

export default Car; // because car object has everyfunction so we are using default