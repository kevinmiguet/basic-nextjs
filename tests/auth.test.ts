/**
 * @jest-environment node
 */
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.env.PWD);
import { getManagementToken } from "../services/auth0/get-management-token";

test("should get right filteredPages", async () => {
  const j = await getManagementToken();
  expect(j).toEqual("oui");
});
