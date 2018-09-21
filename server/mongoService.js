const {db} = require('./database');

exports.addConnection = (time) => {
    return new Promise((resolve, reject) => {
      db().collection("connections").insertOne(time, (err, res) => {
        
        //Error case
        if (err) {
          console.log('Database Connection Error:', err);
          reject("CONNECTION ERROR");
        }
        
        //Null result
        if (!res) {
          console.log('Database Connection Error: No document returned');
          reject("NULL RESULT ERROR");
        }
        
        //Return id of new element
        resolve({id: res.insertedId});
      });
    });
  }