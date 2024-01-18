import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProviders } from "./api";
import './App.css';

import BrowseProviders from "./pages/Provider/Browse";
import ProviderProfile from "./pages/Provider/Profile";

import { Col, Layout, Row, theme } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [providers, setProviders] = useState([]);

  fetchProviders().then((providers) => {
    setProviders(providers);
  });

  return (
    <>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: 'center',
          }}
        >
          Front End Dev Challenge
        </Header>
        <Content
        >
          <Row style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            <Col span={12} offset={6}>
              {/*col-12 col-offset-6*/}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<BrowseProviders providers={providers} />} />
                  <Route path="/provider/:providerId" element={<ProviderProfile />} />
                </Routes>
              </BrowserRouter>
            </Col>
          </Row>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Front End Dev Challenge ©{new Date().getFullYear()} Ant + Rodrigo
        </Footer>
      </Layout >

    </>
  )
}

export default App;
