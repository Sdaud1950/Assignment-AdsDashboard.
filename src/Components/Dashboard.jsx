import React, { useState } from "react";
import DonutChart from "react-donut-chart";
import Switch from '@mui/material/Switch';
import Chart from "./Chart";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dashboard = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [toggle,setToggle]= useState(false)

    const ToggleChart=()=>{
        setToggle(!toggle)
        
    }
    function createData(name, Cosmetics, Serums, Facewash, Shampoos,Conditioners,Facewash2,Total){
      return { name, Cosmetics, Serums, Facewash, Shampoos,Conditioners,Facewash2,Total };
    }
    
    const rows = [
      createData('Cosmetics', " 274", "USD 4,272", 8, 'USD 16568'),
      createData('Serums', 3961, "USD 27,331", 115, 'USD 362,526'),
      createData('Facewash', 9462, "USD 76,831", 123, 'USD 266,800'),
      createData('Shampoos', 439, 'USD 2,151', 5, ' USD 11029'),
      createData('Conditioners', 1680, 'USD 3,864', 49, 'USD 175,245'),
      createData('Facewash2', 4978, "USD 29,370", 189, 'USD 623,106'),
      createData('Total', 26510, 'USD 1,43,819', 489, 'USD 15,73,563'),

    ];
  return (
    <div className="Dashboard-wrapper">
           <div className="MU-WAPPER">

           <TableContainer component={Paper} >
            <h3>Add Insight</h3>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Compaings</TableCell>
            <TableCell align="right">Clicks</TableCell>
            <TableCell align="right">Cost&nbsp;</TableCell>
            <TableCell align="right">Conversions&nbsp;</TableCell>
            <TableCell align="right">Revenue&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Cosmetics}</TableCell>
              <TableCell align="right">{row.Serums}</TableCell>
              <TableCell align="right">{row.Facewash}</TableCell>
              <TableCell align="right">{row.Shampoos}</TableCell>
              <TableCell align="right">{row.Conditioners}</TableCell>
              <TableCell align="right">{row.Facewash2}</TableCell>
              <TableCell align="right">{row.Total}</TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

      <div className="Graph-wrapper">
        <div className="Graph-header">
          <h2>Ad Insights</h2>
          <div className="Graph-Dropdown ">
            <select>
              <option value="">Click</option>
            </select>
          </div>
        </div>
        <div className="Chart-wrapper">
            
            {
                toggle?(<DonutChart
                    data={[
                      {
                        label: "Male",
                        value: 40,
                      },
                      {
                        label: "Female",
                        value: 35,
                      },
                      {
                        label: "Unknown",
                        value: 25,
                      },
                    ]}
                  />): <Chart/>
            }
        {/* <DonutChart
          data={[
            {
              label: "Male",
              value: 40,
            },
            {
              label: "Female",
              value: 35,
            },
            {
              label: "Unknown",
              value: 25,
            },
          ]}
        /> */}
        <div className="Toogle-buttom">
        <Switch onClick={ToggleChart}{...label} defaultChecked />

        </div>
       


        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
