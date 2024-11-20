import { runSnapshotTest } from "../utils";
import {
  boostestFormDataVisitorHelpers,
  boostestResponseType,
  boostestRequest,
  boostestResponse,
  boostestHandler,
  boostestParamHandler,
  // boostestSendGrid,
} from "./outer_packages.spec_test_data";

import { FormDataVisitorHelpers, SerializerVisitor } from "axios";
import type {
  Request,
  Response,
  RequestHandler,
  RequestParamHandler,
} from "express";
import { ClientResponse } from "@sendgrid/mail";

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
