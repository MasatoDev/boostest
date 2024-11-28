import { runSnapshotTest } from "../utils";

import { FormDataVisitorHelpers, SerializerVisitor } from "axios";
import type {
  Request,
  Response,
  RequestHandler,
  RequestParamHandler,
} from "express";
import { ClientResponse } from "@sendgrid/mail";
import { boostestRequest } from "./boostest_output/boostestRequest";
import { boostestResponse } from "./boostest_output/boostestResponse";
import { boostestHandler } from "./boostest_output/boostestHandler";
import { boostestParamHandler } from "./boostest_output/boostestParamHandler";
import { boostestResponseType } from "./boostest_output/boostestResponseType";
import { boostestFormDataVisitorHelpers } from "./boostest_output/boostestFormDataVisitorHelpers";

describe("Outer package Tests", () => {
  runSnapshotTest(
    "FormDataVisitorHelpers",
    boostestFormDataVisitorHelpers<FormDataVisitorHelpers>(),
  );
  runSnapshotTest(
    "SerializerVisitor",
    boostestResponseType<SerializerVisitor>(),
  );

  runSnapshotTest("Request", boostestRequest<Request>());
  runSnapshotTest("Response", boostestResponse<Response>());
  runSnapshotTest("RequestHandler", boostestHandler<RequestHandler>());
  runSnapshotTest(
    "RequestParamHandler",
    boostestParamHandler<RequestParamHandler>(),
  );

  // runSnapshotTest("ClientResponse", boostestSendGrid<ClientResponse>());
});
