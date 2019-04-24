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
          Header: "Join Date",
          accessor: "employeeJoinDate"
        }
      ]
    }
  ];

const Tips = () =>
    <div style={{ textAlign: "center" }}>
        <em>Tip: Hold shift when sorting to multi-sort!</em>
    </div>;

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
            return (
            <div style={{ padding: "20px" }}>
                <ReactTable
                
                data={row.original.employee}
                columns={employeeColumns}
                defaultPageSize={3}
                showPagination={false}
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
  

  