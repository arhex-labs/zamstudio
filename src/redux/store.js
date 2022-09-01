import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./dashboard";
import loginReducer from "./login";

export default configureStore({
    reducer: {
        dashboard: dashboardReducer,
        login: loginReducer
    }
})