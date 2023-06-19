import mongoose from "mongoose";

const CvSchema = new mongoose.Schema({
    url: String
}, { collection: 'cv' })

export const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema)