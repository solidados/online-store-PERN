import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { v4 } from 'uuid';
import { Product } from '../models/models.js';
import ApiError from '../errors/ApiError.js';

class ProductController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = v4() + '.jpg';
      img.mv(resolve(dirname(fileURLToPath(import.meta.url)), '..', 'static', fileName));

      const product = await Product.create({ name, price, brandId, typeId, img: fileName });

      return res.json(product);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { brandId, typeId, limit, page } = req.query;

    page = page || 1;
    limit = limit || 9;

    let offset = page * limit - limit

    let products;
    if (!brandId && !typeId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
      products = await Product.findAndCountAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      products = await Product.findAndCountAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      products = await Product.findAndCountAll({ where: { brandId, typeId }, limit, offset });
    }

    return res.json(products)
  }

  async getOne(req, res) {

  }
}

export default new ProductController();