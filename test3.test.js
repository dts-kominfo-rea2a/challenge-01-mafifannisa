const { users } = require("./index");

describe("users - color & restaurant", () => {
  it("should have unique favorite color attribute", async () => {    
    expect(users[0].favoriteColor.length).toBe(4);
    expect(users[1].favoriteColor.length).toBe(3);
  });
  
  it("should have unique favorite restaurant attribute", async () => {    
    expect(users[0].favoriteRestaurant.length).toBe(7);
    expect(users[1].favoriteRestaurant.length).toBe(8);
  });
});

