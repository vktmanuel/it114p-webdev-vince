const db = require('../util/database');

module.exports = class Product {
    constructor(id, title, image_url, description, price) {
        this.id = id;
        this.title = title;
        this.image_url = image_url;
        this.description = description;
        this.price = price;
    }

    save() {
        return db.execute(
            'INSERT INTO products (title, price, image_url, description, created_by) VALUES (?, ?, ?, ?, ?)',
            [this.title, this.price, this.image_url, this.description, 'SYSTEM']
        );
    }

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
}