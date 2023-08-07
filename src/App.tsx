import React from "react";
import Layout from "./components/Layout";
import Terminal from "./components/Terminal";
import { saveToStorage } from "./utils/storage";
import themes from "./config/themes.json";

const App = () => {
  saveToStorage("all-themes", themes);
  return (
    <Layout>
      <Terminal />
    </Layout>
  );
};

export default App;
