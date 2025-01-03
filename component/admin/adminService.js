const UserModel = require('../../model/userModel');

class AdminService {
  async getFirst5Users() {
    try {
      const users = await UserModel.find()
        .limit(5)
        .exec();
      return users;
    } catch (error) {
      throw new Error('Error fetching users: ' + error.message);
    }
  }
}

module.exports = new AdminService();