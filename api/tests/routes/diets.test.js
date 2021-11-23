const session = require("supertest-session");
const app = require("../../src/app.js");

const agent = session(app);

describe("GET /diets/types", () => {
  test("should response with a 200 status code", async () => {
    try {
      await agent
        .get("/diets/types")
        .expect(200)
        .expect("Content-Type", /json/);
    } catch (error) {
      console.error(error);
    }
  });
});
