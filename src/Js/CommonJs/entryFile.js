import { StartFunc as StartFuncForLogout } from "./ForLogout/entryFile.js";
import { StartFunc as StartFuncForUserShow } from "./ForUserShow/entryFie.js";

const StartFunc = () => {
    StartFuncForLogout();
    StartFuncForUserShow();
};

StartFunc();
