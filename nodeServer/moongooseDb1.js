const MongoClient = require('mongoose')

const connectDB = async () => {
    try {
        MongoClient.set('strictQuery', false)
        MongoClient.connect('mongodb+srv://rahul:saini2640@cluster0.xcyvy1m.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTechnology: true,
        },
        function (err) {
         if (err) console.log(err);
         console.log(`MONGODB Has Successfully Connected`)
                //let a = db.collection('mongoMy').find();
         //console.log(a); 
       
       //   let a = db.collection("mongoMy").findOne({}, function(err, result) {
       //     if (err) throw err;
       //     console.log("\n mongoDb response ======>>>>",result,"\n");
       //     db.close();
       //   });
       
       })
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}
//module.exports  = connectDB 

const { Schema } = MongoClient;

const makerschema = new Schema({
    msg: { type: String },
    dateStamp: { type: Number }
}, { _id: false });

const ChatModel = MongoClient.model('ChatMsgs',makerschema);
module.exports = ChatModel

// const FoodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//   },
//   calories: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) throw new Error("Negative calories aren't real.");
//     },
//   },
// });

// const Food = mongoose.model("Food", FoodSchema);

// module.exports = Food;