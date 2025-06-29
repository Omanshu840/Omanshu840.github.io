import React from "react";
import { ThemeProvider } from "./context/ThemeContext.js";
import SinglePage from "./pages/SinglePage.js";
import "./App.scss";
import Layout from "./components/layout/Layout.js";

const App = () => {
    return (
        <ThemeProvider>
			<Layout>
            	<SinglePage />
			</Layout>
        </ThemeProvider>
    );
};
export default App;
