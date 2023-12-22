import React from "react";

const Chart = () => {
  return (
    <div className="ChartTable-wapper">
      <table className="Table-Chart">
        <thead>
          <tr>
            <th>Group</th>
            <th>Click</th>
            <th>Cost</th>
            <th>Conversion</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Male</td>
            <td>348</td>
            <td>USD 12,528</td>
            <td>42</td>
            <td>USD 62,118</td>
          </tr>
          <tr>
            <td>Female</td>
            <td>692</td>
            <td>USD 24,912</td>
            <td>35</td>
            <td>USD 5,172</td>
          </tr>
          <tr>
            <td>Unknow</td>
            <td>105</td>
            <td>USD 3,943</td>
            <td>3</td>
            <td>USD 4,4</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>1,145</td>
            <td>USD 3,943</td>
            <td>80</td>
            <td>USD 71,782</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Chart;
