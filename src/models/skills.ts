import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    name: String,
    imageUrl: String
})

export const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema)