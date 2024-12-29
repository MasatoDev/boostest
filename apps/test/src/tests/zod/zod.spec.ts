import { UserResponseSchema, userScheme, User } from "@/ts_types";
import { runSnapshotTest } from "../utils";
import { z } from "zod";
import { boostestZodUserSchemeType } from "./boostest_output/boostestZodUserSchemeType";
import { boostestZodUserType } from "./boostest_output/boostestZodUserType";
// import { boostestZodUserResponseSchemeType } from "./boostest_output/boostestZodUserResponseSchemeType";

type UserResponseSchemaType = z.infer<typeof UserResponseSchema>;
type UserSchemeType = z.infer<typeof userScheme>;

// TODO:
describe("Invest Tests", () => {
  runSnapshotTest("Invest simple zod", boostestZodUserType<User>());
  runSnapshotTest(
    "Invest object zod",
    boostestZodUserSchemeType<UserSchemeType>(),
  );
  // TODO:
  // runSnapshotTest(
  //   "Invest response zod",
  //   boostestZodUserResponseSchemeType<UserResponseSchemaType>(),
  // );
});
