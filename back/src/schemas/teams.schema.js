import { z } from "zod";

export const teamCreateSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
  id: z.string()
});

export const teamUpdateSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().optional()
})
  .partial()
  .refine(
    ({ name, description }) => (name || description),
    { message: "One of the fields must be defined" }
  );