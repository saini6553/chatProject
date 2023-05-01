//const chatMsg = require('./mongodb')
const { userModel, msgModel } = require("./mongodb");

class msgUsername {
  users = [];
  async saveUsername(userData) {
    try {
      console.log("======POST API Payload : ", userData);
      this.users.push({name : userData.user});
      return this.users;
      //await userModel.create({ name: userData.user });
      console.info("DATA SAVE ");
    } catch (err) {
      console.info("*******saveUsername Error====>>", err);
      return err;
    }
  }

  async saveMsg(userData) {
    try {
      console.log("======Payload : ", userData);
      await userModel.create({ name: userData.user });
      console.info("DATA SAVE ");
    } catch (err) {
      console.info("*******Error====>>", err);
      return err;
    }
  }

  async getMsg(obj) {
    return await userModel.find(obj);
  }
  async getList() {
    await userModel.find();
    return this.users;
  }
}

module.exports = new msgUsername();
