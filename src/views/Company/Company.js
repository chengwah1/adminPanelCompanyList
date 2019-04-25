import React from "react";
import { data } from "./Data";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const columns = [
    {
      Header: "Company",
      columns: [
        {
          Header: "Name",
          accessor: "company"
        }
      ]
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Ticker",
          accessor: "ticker"
        },
        {
          Header: "Sector",
          accessor: "sector"
        },
        {
          Header: "Industry",
          accessor: "industry"
        },
        {
          Header: "Country",
          accessor: "country"
        }
      ]
    },
    {
      Header: "Employee",
      columns: [
        {
          Header: "Total",
          id: "company.length",
          accessor: d => d.employee.length
        }
      ]
    }
  ];
  
const employeeColumns = [
    {
      Header: "Employee",
      columns: [
        {
          Header: "Name",
          accessor: "employeeName"
        }
      ]
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Email",
          accessor: "employeeEmail"
        },
        {
          Header: "Contact",
          accessor: "employeeContact"
        },
        {
          Header: "Salary",
          accessor: "employeeSalary"
        }
      ]
    }
  ];

const Tips = () =>
    <div style={{ textAlign: "center" }}>
        <em>Tip: Hold shift when sorting to multi-sort!</em>
    </div>;

let companyToBeDisplay = {};
let employeeToBeDisplay = {};
const callback = (state, rowInfo, column, instance) => {
  
  return {
    onClick: () => {
      const EEmail = rowInfo.original.employeeEmail;
      data.forEach(company => { 
        company.employee.forEach(employee => {

          if (employee.employeeEmail===EEmail){
            companyToBeDisplay = company;
            employeeToBeDisplay = employee
          }
        });
      });

      const RouteHistory = instance.props.RouteHistory
      RouteHistory.history.push('/dashboard/employee')
    }
  };
};

class CompanyList extends React.Component {
render() {

    return (
    <div>
        <ReactTable
        data={data}
        noDataText="Oh Noes!"
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
        SubComponent={row => {
          console.log(this.props)
            return (
            <div style={{ padding: "20px" }}>
                <ReactTable
                getTdProps={callback}
                data={row.original.employee}
                columns={employeeColumns}
                defaultPageSize={7}
                showPagination={false}
                RouteHistory={this.props}
                />
            </div>
            );
        }}
        />
        <br />
        <Tips />
        <br />
    </div>
    );
}
}

export default CompanyList;
export {companyToBeDisplay, employeeToBeDisplay};
  

  