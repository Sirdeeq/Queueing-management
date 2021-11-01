import React from "react";
import Card from "./Card";
import list from "./list";
import {  Row, Col } from 'reactstrap';
export default function App() {
  return (

      <Row className="m-0">
        <Col md={6}><Card title="Laboratory" list={list} /></Col>
        <Col md={6} ><Card title="CT-Scan" list={list} /></Col>

        <Col md={6}> <Card title="Ultrasound" list={list} /></Col>
        <Col md={6}> <Card title="X-Ray" list={list} /></Col>

      </Row>
  )
}




