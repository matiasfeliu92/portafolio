import connectDB from '@/config/db';
import IWorks from '@/interfaces/Works';
import { Work } from '@/models/Works';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWorks[]>
) {
    // connectDB()
    try {
        const works: IWorks[] = await Work.find().exec();
        return res.status(200).json(works)
    } catch (error) {
        console.error('Failed to retrieve works:', error);
    throw error;
    }
}