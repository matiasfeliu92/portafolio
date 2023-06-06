import connectDB from '@/config/db';
import ISkills from '@/interfaces/Skills'
import { Skill } from '@/models/skills'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISkills[]>
) {
    // connectDB()
    try {
        const skills: ISkills[] = await Skill.find().exec();
        return res.status(200).json(skills)
    } catch (error) {
        console.error('Failed to retrieve skills:', error);
    throw error;
    }
}
