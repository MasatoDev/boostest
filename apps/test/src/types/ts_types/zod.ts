import { extendApi } from "@anatine/zod-openapi";
import { z } from "zod";

const UserObj = z.object({
  username: z.string(),
});

export type User = z.infer<typeof UserObj>;

export const userScheme = z.object({
  username: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  strings: z.array(z.object({ value: z.string() })),
});

export const UserResponseSchema = extendApi(
  z.array(
    z.object({
      id: extendApi(z.number().min(1), {
        description: "ID",
        example: 123,
        format: "int64",
      }),
      name: extendApi(z.string().max(64).nullable(), {
        description: "Name",
        example: "HeyShohei",
      }),
      URL: extendApi(z.string().nullable(), {
        description: "image Url",
        example: "https://example.com/images/main.jpg",
      }),
    }),
  ),
  {
    description: "UserResponse",
  },
);
