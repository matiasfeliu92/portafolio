import mongoose from "mongoose";

const formContactSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    apellido: String,
    correo: String,
    telefono: String,
    mensaje: String,
})

export const FormContact = mongoose.models.FormContact || mongoose.model("FormContact", formContactSchema)