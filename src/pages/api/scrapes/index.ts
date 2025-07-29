// src/pages/api/scrapes/index.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ]);
}
