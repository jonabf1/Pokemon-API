import * as Yup from 'yup';
import Favorites from '../schemas/PokeFavorites';
import api from '../../services/api';

class PokemonController {
  async index(req, res) {
    const listPokemons = await Favorites.find({
      userId: req.userId,
    });

    return res.json(listPokemons);
  }

  async update(req, res) {
    const { name } = req.params;

    const schema = Yup.object().shape({
      height: Yup.string(),
      weight: Yup.string(),
      photo: Yup.string(),
      nickname: Yup.string().min(5),
      type: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name)) {
      return res.status(400).json({ error: 'This is a number' });
    }

    const exist = await Favorites.findOne({
      userId: req.userId,
      name,
    });

    if (!exist) {
      return res
        .status(401)
        .send({ error: 'Pokemon does not exist on your favorites' });
    }

    await exist.updateOne(req.body);
    return res.json(req.body);
  }

  async store(req, res) {
    const { name } = req.params;

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name)) {
      return res.status(400).json({ error: 'This is a number' });
    }

    let pokemons;
    try {
      pokemons = await api.get(`/pokemon/${name}`);
    } catch (err) {
      return res.status(404).json({ error: 'Pokemon does not exist in api' });
    }

    const alredyExist = await Favorites.findOne({
      userId: req.userId,
      name,
    });

    if (alredyExist) {
      return res
        .status(401)
        .send({ error: 'Pokemon alredy exist on your favorites' });
    }

    const { height, id, weight, types, sprites } = pokemons.data;

    const typeString = types.reduce((prevVal, elem, index) => {
      return index === 0 ? elem.type.name : `${prevVal}, ${elem.type.name}`;
    }, '');

    const createFavorite = await Favorites.create({
      userId: req.userId,
      name,
      id,
      height,
      weight,
      photo: sprites.front_default,
      type: typeString,
    });

    return res.json(createFavorite);
  }

  async delete(req, res) {
    const { name } = req.params;

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name)) {
      return res.status(400).json({ error: 'This is a number' });
    }

    const exist = await Favorites.findOne({
      userId: req.userId,
      name,
    });

    if (!exist) {
      return res
        .status(400)
        .json({ error: 'Pokemon does not exist in your favorite' });
    }

    await Favorites.deleteOne({
      userId: req.userId,
      name,
    });

    return res.json({ ok: true });
  }

  async show(req, res) {
    const { name } = req.params;

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(name)) {
      return res.status(400).json({ error: 'This is a number' });
    }

    const exist = await Favorites.findOne({
      userId: req.userId,
      name,
    });

    return res.json(exist);
  }
}

module.exports = new PokemonController();
