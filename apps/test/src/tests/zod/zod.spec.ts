import { UserResponseSchema, userScheme, User } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { z } from "zod";

type UserResponseSchemaType = z.infer<typeof UserResponseSchema>;
type UserSchemeType = z.infer<typeof userScheme>;

// TODO:
describe("Invest Tests", () => {
  runSnapshotTest("Invest zod", boostestZodUserResponseSchemeType<User>());
});
