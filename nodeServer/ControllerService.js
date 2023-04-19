//const chatMsg = require('./mongodb')
const {userModel, msgModel} = require('./mongodb')
class msgUsername {
    async saveMsg(userData){
        try{
          console.log("======Payload : ",userData)

          await userModel.create({ name : userData.user})

          await  chatMsg.create({
            user:userData.user
          }, function (err){
            console.log("========>> --- ",err);
          });
          console.info("DATA SAVE ")
        }
        catch(err){
          console.info('*******Error====>>',err)
        }
      }

      async getList(){
        return await userModel.find()
      }
}

module.exports = new msgUsername()