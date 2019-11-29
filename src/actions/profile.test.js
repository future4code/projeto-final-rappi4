import axios from 'axios';
import { fetchProfileAction } from './profile';

let mockDispatch;

beforeEach(() => {
    mockDispatch = jest.fn();
});

const mockUser =
{
    user: {
        id: "De8UACSFgFySnKdXm5hI",
        name: "Astrodev",
        email: "astrodev@future4.com",
        cpf: "111.111.111-11",
        hasAddress: true,
        address: "R. Afonso Braz, 177 - Vila N. Conceição"
    }
}


describe("Profile Actions", () => {
    it.skip("fetchProfileAction", async () => {
        axios.get = jest.fn(() => ({
            data: mockUser
        }))
        const spy = jest.spyOn(Storage.prototype, 'setItem');
        localStorage.setItem = spy;
        localStorage.setItem("token","test")
        
        const expectedAction = {
            type: "SET_PROFILE",
            payload: {
                user: mockUser.user
            }
        };
        await fetchProfileAction()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith(expectedAction)
    })
})