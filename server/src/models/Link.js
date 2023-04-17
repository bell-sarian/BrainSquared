import mongoose from "mongoose";

export const Link = mongoose.model('Link', {title: String, website: String})