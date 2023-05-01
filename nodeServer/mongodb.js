const MongoClient = require('mongoose')
 MongoClient.connect('mongodb://localhost:27017/chatAppDB',
 function (err, db) {
  if (err) throw err
  console.log(`MONGODB Has Successfully Connected`)

})
const { Schema } = MongoClient;

const mesgschema = new Schema({
    msg: { type: String },
    from: { type: String },
    to: { type: String },

    dateStamp: { type: Number }
}, { _id: true });
const msgModel = MongoClient.model('ChatMsgs',mesgschema);

const memberSchema = new Schema({
  name: { type: String },
}, { _id: true });
const userModel = MongoClient.model('MemberList',memberSchema);

// module.exports = ChatModel
module.exports = {userModel, msgModel}
