import { login } from "./login";
import localStorageMock from "../../../../localStorage.mock";
import { fetchWrapper } from "../utilities/fetchWrapper";
import { API_AUTH_LOGIN } from "../../constants";

jest.mock("../utilities/fetchWrapper.js");

global.fetch = jest.fn();
global.localStorage = localStorageMock;

beforeEach(() => {
    localStorageMock.setItem.mockClear();
    fetchWrapper.mockClear();
});

describe('login', () => {
    it('fetches and stores a token in browser storage', async () => {
        const testEmail = 'test@stud.noroff.no';
        const testPassword = 'testPassword';
        const testToken = 'testToken';
        const testProfile = { id: '1', name: 'TestUser' };

        fetchWrapper.mockResolvedValue({
            accessToken: testToken,
            ...testProfile
        });

        await login(testEmail, testPassword);

        expect(fetchWrapper).toHaveBeenCalledWith(API_AUTH_LOGIN, "POST", {}, { email: testEmail, password: testPassword });

        expect(localStorage.setItem).toHaveBeenCalledWith("token", testToken);
    });
});


