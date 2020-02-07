import { setProfileAction, setOrderHistory } from '../actions/profile';
import { profile } from './profile';

const mockProfile = {
    id: "De8UACSFgFySnKdXm5hI",
    name: "Astrodev",
    email: "astrodev@future4.com",
    cpf: "111.111.111-11",
    hasAddress: true,
    address: "R. Afonso Braz, 177 - Vila N. Conceição"
}
const mockOrders = [
    {
        "totalPrice": 20,
        "restaurantName": "Habibs",
        "createdAt": 1574659218053,
        "expiresAt": 1574662818053
    }
]

describe("Profile Reducer", () => {
    test("SET_PROFILE action", () => {
        const testAction = setProfileAction(mockProfile);
        const result = profile(null, testAction);
        expect(result).toMatchObject(mockProfile)
    });
    test("SET_ORDER_HISTORY action", () => {
        const testAction = setOrderHistory(mockOrders);
        const result = profile(null, testAction);
        expect(result.orders).toHaveLength(1);
        expect(result.orders).toMatchObject(mockOrders);
    });
});