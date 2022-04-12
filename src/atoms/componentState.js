import { atom } from "recoil";
import { Profile } from "../routes/profile";

export const componentState = atom({
    key: "componentState",
    default: <Profile />
});