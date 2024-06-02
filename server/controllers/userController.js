import ApiError from '../errors/ApiError.js';

class UserController {
  async registration(req, res) {
    
  }
  
  async login(req, res) {

  }
  
  async auth(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest('Specify user ID..'));
    }
    res.json(id)
  }
}

export default new UserController();