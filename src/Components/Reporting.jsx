import React from 'react';
import '../Css/Reporting.css'
import { Card, Button, Table } from 'react-bootstrap';
import { FaEye, FaPencilAlt, FaFileDownload, FaCogs } from 'react-icons/fa';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const months = ['July', 'August', 'September', 'October', 'November'];
const income = [25, 15, 20, 25, 30];


const AccountBalanceCard = () => {
  const chartOptions = {
    animationEnabled: true,
    backgroundColor: "#D3FFFF",
    title: {
      text: "MONTHLY EXPENSE - 2023",
      fontColor: "black", // Set your desired color
      fontWeight: "thin",
      fontSize: 20,  
    },
    axisX: {
      valueFormatString: "MMM"
    },
    axisY: {
      title: "Expense (in USD)",
      prefix: "$"
    },
    data: [{
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline" ,
      color:"#a25dd3",
      
      dataPoints: [
        { x: new Date(2023, 0), y: 25060 },
        { x: new Date(2023, 1), y: 27980 },
        { x: new Date(2023, 2), y: 42800 },
        { x: new Date(2023, 3), y: 32400 },
        { x: new Date(2023, 4), y: 35260 },
        { x: new Date(2023, 5), y: 33900 },
        { x: new Date(2023, 6), y: 40000 },
        { x: new Date(2023, 7), y: 52500 },
        { x: new Date(2023, 8), y: 32300 },
        { x: new Date(2023, 9), y: 42000 },
        { x: new Date(2023, 10), y: 360 },
        { x: new Date(2023, 11), y: 38400 }
      ]
    }]
  };

  const expensesData = [
    { category: 'INCOME', value: 8457, color: '#4EE642' },    // Green color
    { category: 'EXPENSES', value: 6193, color: '#FF0000' },  // Red color
    { category: 'LEFTOVER', value: 2264, color: '#84ceeb' },   // Blue color
  ];

  return (
    <>
    <Card className="account-balance-card maindiv" >
      <Card.Header className='myheading'>Reports</Card.Header>

      <div className='chart'>
        <CanvasJSChart  options={chartOptions}/>
      </div>

      <Card.Body className='info'>
        <div className="info-in d-flex justify-content-center align-items-center  flex-column">
          <h5 className="text-center">CURRENT BALANCE</h5>
          <h3 className="text-center">$15,345.00</h3>
          <hr />
        </div>

        <div className="last">
            <div className="lastin">
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
              </tr>
            </thead>

            <tbody>
              {months.map((month, index) => (
                <tr key={month}>
                  <td>{month}</td>
                  <td>{income[index]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        <div className="lastin">
          <Table responsive striped bordered>
            <tbody>
              {expensesData.map((row, index) => (
                <tr key={index} style={{ backgroundColor: row.color }}>
                  <td>{row.category}</td>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
        </div>
      </Card.Body>

      <div className="icons ">
        <div className="button-container">
          <Button className='mbutton' variant="primary" size="sm">
            <FaEye size={20} />
            <div>View Reports</div>
          </Button>
          <Button className='mbutton' variant="secondary" size="sm">
            <FaCogs size={20} />
            <div>Customize Report</div>
          </Button>
          <Button className='mbutton' variant="success" size="sm">
            <FaPencilAlt size={20} />
            <div>Edit Report</div>
          </Button>
          <Button className='mbutton' variant="info" size="sm">
            <FaFileDownload size={20} />
            <div>Export Report</div>
          </Button>
        </div>
      </div>
    </Card>
    </>
  );
};

export default AccountBalanceCard;