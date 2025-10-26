import { z } from 'zod';

export const TeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type Team = z.infer<typeof TeamSchema>;

export const CreateTeamSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});

export type CreateTeam = z.infer<typeof CreateTeamSchema>;
