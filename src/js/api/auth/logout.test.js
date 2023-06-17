import { logout } from "./logout";
import localStorageMock from "../../../../localStorage.mock";

jest.mock('../../router', () => ({
    redirect: jest.fn(),
  }));

global.localStorage = localStorageMock;

beforeEach(() => {
    localStorageMock.removeItem.mockClear();
});

describe("logout", () => {
    it("removes the token from localStorage", () => {
        logout();

        expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    })
}) 