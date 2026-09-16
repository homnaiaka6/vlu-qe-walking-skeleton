const login = require("./login");

test("login with correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("login with incorrect password", () => {
    expect(login("admin", "1234")).toBe(false);
});

test("login with incorrect username", () => {
    expect(login("user", "123")).toBe(false);
});
