import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    name: String,
    description_tech: String,
    description: String,
    image: String,
    link_git: String,
    link_web: String
})

export const Work = mongoose.models.WorkSchema || mongoose.model("Work", WorkSchema)