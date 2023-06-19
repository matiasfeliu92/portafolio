import { IForm } from "@/interfaces/form";
import { FormContact } from "@/models/formContact";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        const {nombre, apellido, correo, telefono, mensaje}: IForm = req.body
        try {
            const message = new FormContact({nombre, apellido, correo, telefono, mensaje})
            await message.save()
            res.status(201).json({ message: 'Message send successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to send message' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}