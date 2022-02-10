import express from 'express';
import mongoose from 'mongoose';
import postMessage from '../models/postMessage.js';

// import postMessage from '../models/postMessage';

const router = express.Router();


export const getPosts = async(req, res) => {

    try {
        const postMessage = await postMessage.find();
        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const getPost = async(req, res) => {
    const { id } = req.params;

    try {
        const post = await postMessage.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const createPost = async(req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new postMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


export const updatePost = async(req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await postMessage.findByIdAndUpdate(id, updatePost, { new: true });
    res.json(updatedPost);
};


export const deletePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`no post with this id ${id}`);

    await postMessage.findByIdAndRemove(id);

    res.json({ message: "Post Deleted Successfully." });
};


export const likePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).sed(`No post with id: ${id}`);

    const post = await postMessage.findById(id);
    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

    res.json(updatedPost);
};

export default router;