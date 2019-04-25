import React from "react";
import {companyToBeDisplay, employeeToBeDisplay} from '../Company/Company'
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, Button,
  CardTitle, CardSubtitle } from 'reactstrap';

function DisplayEmployee() {
    if(!Object.keys(companyToBeDisplay).length){
        return <Link to="/dashboard/company">
        <Button color="primary" className="mt-3" active tabIndex={-1}>Select An Employee</Button>
      </Link>
    } else {
    return (
      <div>
        <Card style={{width:"50%", height:"60%"}}>
          <CardBody>
            <CardTitle>{employeeToBeDisplay.employeeName}</CardTitle>
            <CardSubtitle>Email: {employeeToBeDisplay.employeeEmail}</CardSubtitle>
            <CardSubtitle>Contact: {employeeToBeDisplay.employeeContact}</CardSubtitle>
            <CardSubtitle>Salary: {employeeToBeDisplay.employeeSalary}</CardSubtitle>
            <CardSubtitle>Gender: {employeeToBeDisplay.employeeGender}</CardSubtitle>
            <CardSubtitle>Relationship Status: {employeeToBeDisplay.employeeRelationship}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>Works at : {companyToBeDisplay.company}</CardText>
            <CardText>Works in : {companyToBeDisplay.sector} sector and {companyToBeDisplay.industry} industry in {companyToBeDisplay.country}</CardText>
          </CardBody>
        </Card>
      </div>
    
    );}
}

export default DisplayEmployee;