const { Pool } = require('pg');
const db_url = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: db_url });

class Queryset {
    firstElement = 0;
    data = [];
    constructor(model, res) {
        this.model = model;
        this.res = res;
    }

    first() {
        return this.data[this.firstElement];
    }

    collectData(filter, row) {
        console.log(filter)
        const complement = `${Object.keys(filter)[0]} = '${filter[Object.keys(filter)[0]]}'`;
        const query = `SELECT * FROM ${this.model} WHERE ${complement}`;

        console.log(query);
        pool.query(query, (err, result) => {
            const records = null;
            if (err) {
                console.error(err);
                return {
                    'error': 'cant get data'
                };
            } else {
                this.data = result.rows;
                if (row) 
                    this.res.send(this.data);
                else 
                    this.res.send(this.first());
                this.res.end();
            }
        });
    }

    get(filter) {
        this.collectData(filter, false);
    }

    filter(filter) {
        this.collectData(filter, true);
    }
}
module.exports = Queryset;