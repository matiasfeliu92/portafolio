import mongoose from "mongoose";

const CvSchema = new mongoose.Schema({
    url: String
})

export const Cv = mongoose.models.Cv || mongoose.model("Cv", CvSchema)