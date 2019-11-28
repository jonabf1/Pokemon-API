import * as Yup from 'yup';
import * as bcrypt from 'bcryptjs';
import User from '../schemas/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      name: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, name, password } = req.body;

    const AlredyExists = await User.findOne({ email });

    if (AlredyExists) {
      return res.status(400).json({ error: 'Email alredy used' });
    }

    const user = await User.create({
      email,
      name,
      password,
      provider: false,
    });

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email(),
      name: Yup.string(),
      password: Yup.string().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (process.env.NODE_ENV === 'test') {
      req.userId = req.body.idTest;
    }

    const existUser = await User.findById(req.userId);

    if (!existUser) {
      return res.status(400).json({ error: 'User not exist' });
    }

    const { password, email } = req.body;
    if (password) {
      const comparePass = await bcrypt.compare(password, existUser.password);
      if (!comparePass) {
        return res.status(401).json({ error: 'Password incorrect' });
      }
    }

    if (email) {
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({ error: 'Email alredy used' });
      }
    }

    await User.updateOne(req.body);
    return res.json(req.body);
  }
}

module.exports = new UserController();
