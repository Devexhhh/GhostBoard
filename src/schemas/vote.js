import { z } from 'zod';

export const voteSchema = z.object({
    ghostId: z.uuid(),
    value: z.union([z.literal(1), z.literal(-1), z.literal(0)])
})