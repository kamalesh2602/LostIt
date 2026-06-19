const Item = require("../models/Item");
const crypto = require("crypto");

const getItems = async (req, res) => {
    const items = await Item.find().sort({
        createdAt: -1,
    });

    res.json(items);
};

const createItem = async (req, res) => {
    const ownerToken =
        crypto.randomUUID();

    const item = await Item.create({
        ...req.body,
        title:
            req.body.title?.trim(),
        location:
            req.body.location?.trim(),
        description:
            req.body.description?.trim(),
        contact:
            req.body.contact?.trim(),
        ownerToken,
    });

    res.status(201).json(item);
};

const getTimeAgo = (timestamp) => {
    const seconds = Math.floor(
        (Date.now() -
            new Date(timestamp).getTime()) /
        1000
    );

    if (seconds < 60)
        return `${seconds}s ago`;

    if (seconds < 3600)
        return `${Math.floor(
            seconds / 60
        )}m ago`;

    if (seconds < 86400)
        return `${Math.floor(
            seconds / 3600
        )}h ago`;

    return `${Math.floor(
        seconds / 86400
    )}d ago`;
};

const claimItem = async (req, res) => {
    const { ownerToken } = req.body;

    const item = await Item.findById(
        req.params.id
    );

    if (!item) {
        return res.status(404).json({
            message: "Item not found",
        });
    }

    if (
        item.ownerToken !== ownerToken
    ) {
        return res.status(403).json({
            message: "Unauthorized",
        });
    }

    item.status = "CLAIMED";

    await item.save();

    res.json(item);
};

const deleteItem = async (req, res) => {
    const { ownerToken } = req.body;

    const item = await Item.findById(
        req.params.id
    );

    if (!item) {
        return res.status(404).json({
            message: "Item not found",
        });
    }

    if (
        item.ownerToken !== ownerToken
    ) {
        return res.status(403).json({
            message: "Unauthorized",
        });
    }

    await item.deleteOne();

    res.json({
        message: "Deleted",
    });
};

const getMatches = async (
    req,
    res
) => {
    const item =
        await Item.findById(
            req.params.id
        );

    if (!item) {
        return res.status(404).json({
            message: "Item not found",
        });
    }

    const oppositeType =
        item.type === "LOST"
            ? "FOUND"
            : "LOST";
    const searchTitle =
        item.title.trim();
    const matches =
        await Item.find({
            type: oppositeType,
            category: item.category,
            status: "ACTIVE",
            title: {
                $regex: searchTitle,
                $options: "i",
            },
        }).sort({
            createdAt: -1,
        });

    res.json(matches);
    console.log("Current:", item.title);

    console.log("Opposite:", oppositeType);
    console.log(matches);
};

const getMatchCount = async (req, res) => {
    const item =
        await Item.findById(
            req.params.id
        );

    if (!item) {
        return res.status(404).json({
            message:
                "Item not found",
        });
    }

    const oppositeType =
        item.type === "LOST"
            ? "FOUND"
            : "LOST";

    const searchTitle =
        item.title.trim();

    const count =
        await Item.countDocuments({
            type: oppositeType,
            category:
                item.category,
            status: "ACTIVE",
            title: {
                $regex: searchTitle,
                $options: "i",
            },
        });

    console.log(
        "Match Count:",
        count
    );

    res.json({
        count,
    });
};

module.exports = {
    getItems,
    createItem,
    claimItem,
    deleteItem,
    getMatches,
    getMatchCount
};