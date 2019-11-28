import * as Yup from 'yup';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../schemas/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password, name } = req.body;

    const existUser = await User.findOne({ email });

    if (!existUser) {
      return res.status(401).json({ error: 'User not exist' });
    }

    const checkingPassword = await bcrypt.compare(password, existUser.password);
    if (!checkingPassword) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id } = existUser;

    return res.json({
      user: {
        name,
        email,
      },
      token: jwt.sign({ id: _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
