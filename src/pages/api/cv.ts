import connectDB from "@/config/db";
import ICv from "@/interfaces/Cv";
import { Cv } from "@/models/cv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (req: NextApiRequest, res: NextApiResponse<ICv[]>) {
    connectDB()
    try {
        const cvUrl: ICv[] = await Cv.find().exec()
        return res.status(200).json(cvUrl)
    } catch (error) {
        throw error
    }
}