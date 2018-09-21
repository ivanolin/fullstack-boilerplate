const {MongoClient} = require('mongodb');

/**
 * DB Configuration Options
 */
const url = "mongodb://localhost:27017/";
const dbName = "testDB";

/**
 * Holds the database connection
 */
const state = {
  db: null
}

/*** 
 * Wrapper for mongo database connection
 * @param {Function} done callback after db connects
 */
exports.connect = (done) => {
  if (state.db) return done();

  MongoClient.connect(url, { useNewUrlParser: true} ,function (err, db) {
    if (err) throw err;
    state.db = db;
    done();
  });
}

exports.disconnect = () => {
  if(state.db)
  {
    state.db.close();
  }
}

/**
 * Get database instance from state
 */
const db = () => {
  return state.db.db(dbName);
}
exports.db = db;
