import { z } from 'zod';

export const TaskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  position: z.number(),
  columnId: z.string(),
  assigneeId: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Task = z.infer<typeof TaskSchema>;

export const CreateTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  columnId: z.string(),
  assigneeId: z.string().optional(),
});

export type CreateTask = z.infer<typeof CreateTaskSchema>;
