const { users } = require("./index");

describe("users - attribute", () => {
  it("should have monica as first user with complete attribute", async () => {
    let attribute = Object.keys(users[0]);
    
    expect(users[0].name).toBe("Monica");
    expect(attribute.length).toBe(8);
    expect(attribute).toContain("name");
    expect(attribute).toContain("gender");
    expect(attribute).toContain("age");
    expect(attribute).toContain("email");
    expect(attribute).toContain("favoriteColor");
    expect(attribute).toContain("isHavePet");
    expect(attribute).toContain("education")
    expect(attribute).toContain("favoriteRestaurant")
  });
  
  it("should have wendy as second user with complete attribute", async () => {
    let attribute = Object.keys(users[1]);
    
    expect(users[1].name).toBe("Wendy");
    expect(attribute.length).toBe(8);
    expect(attribute).toContain("name");
    expect(attribute).toContain("gender");
    expect(attribute).toContain("age");
    expect(attribute).toContain("email");
    expect(attribute).toContain("favoriteColor");
    expect(attribute).toContain("isHavePet");
    expect(attribute).toContain("education")
    expect(attribute).toContain("favoriteRestaurant")
  });
});

