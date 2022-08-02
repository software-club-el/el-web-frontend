import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import MemberList from './components/menber/MemberList';
import MemberWrite from './components/menber/MemberWrite';
import MemberView from './components/menber/MemberView';


function App(props) {

  return (
    <Layout>
      <Container style={{ minHeight: "80vh" }}>
        <MemberList />
        {/* <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<MemberList />}></Route>
            <Route exact path='/memberWrite' element={<MemberWrite />}></Route>
            <Route exact path='/memberView/:id' element={<MemberView />}></Route>
          </Routes>
        </BrowserRouter> */}
      </Container>
    </Layout>
  );
}

export default App;
