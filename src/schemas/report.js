import { z } from "zod";

export const reportSchema = z.object({
    ghostId: z.uuid()
});