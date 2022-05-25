const { users } = require("./index");

describe("users - array", () => {
  it("should be an array", async () => {
    expect(Array.isArray(users)).toBe(true);
  });

  it("should have two user", async () => {
    expect(users.length).toBe(2);
  });
});

