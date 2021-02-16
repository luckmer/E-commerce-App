const ProductSchema = require("../models/ProductModel");

exports.ViewProduct = async (req, res, next) => {
    try {
        const postList = await ProductSchema.find();
        res.status(201).json(postList);
    } catch (err) {
        res.status(401).json({ title: "not found " });
    }
};

exports.CreateProduct = async (req, res, next) => {
    try {
        const { title, price, description, images, category } = req.body;
        const createPost = new ProductSchema({
            title: title,
            price: price,
            description: description,
            images:images,
            category: category,
            count:1
        });
        await createPost.save();
        res.status(201).json(createPost);
    } catch (err) {
        return res.status(500).json({ title: "data is invalid" });
    }
};

exports.UpdatePropduct = async (req, res, next) => {
    const { id } = req.params;

    const { title, category, description, price, count } = req.body;
    const updatedPost = {
        title,
        category,
        description,
        price,
        _id: id,
        count: 1,
    };
    await ProductSchema.findByIdAndUpdate(id, updatedPost);
    res.json({ title: "update product soon " });
};

exports.DeleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        await ProductSchema.findByIdAndDelete(id);
        res.json({ title: "delete accepted " });
    } catch (err) {
        res.status(401).json({ title: " Can't Delete Files" });
    }
};
