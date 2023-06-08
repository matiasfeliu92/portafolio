import mongoose from "mongoose";

const WorkSchema = new mongoose.Schema({
    name: String,
    description_tech: String,
    description: String,
    image: String,
    link_git: String,
    link_web: String
});

// Verificar si el modelo ya está definido antes de compilarlo
const Work = mongoose.models.Work || mongoose.model("Work", WorkSchema);

export default Work;
