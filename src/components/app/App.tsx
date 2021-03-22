import Navbar from "../navigation/Navbar";
import Header from "../header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { Layout } from "antd";
import Footer from "../footer/Footer";
import Content from "../content/Content";

function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Navbar />
        <Layout>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
