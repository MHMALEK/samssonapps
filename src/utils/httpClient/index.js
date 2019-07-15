import AuthClient from "./AuthHttpClient";
import BuyerClient from "./BuyerHttpClient";
import UserClient from "./UserHttpClient";

const AuthApiCall = new AuthClient();
const BuyerApiCall = new BuyerClient();
const UserApiCall = new UserClient();

export { AuthApiCall, BuyerApiCall, UserApiCall };
