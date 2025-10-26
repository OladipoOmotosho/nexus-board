import { z } from 'zod';

export const BoardSchema = z.object({
  id: z.string(),
  name: z.string(),
  teamId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Board = z.infer<typeof BoardSchema>;

export const CreateBoardSchema = z.object({
  name: z.string().min(1),
  teamId: z.string(),
});

export type CreateBoard = z.infer<typeof CreateBoardSchema>;
