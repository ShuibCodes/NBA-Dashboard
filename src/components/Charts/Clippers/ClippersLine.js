import React from "react";
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody'
import ClippersLineChart from './ClippersLineChart' 
function ClippersLine() {
  return (
    <div>
      <Card>
        <CardHeader color="orange" contentPosition="left">
          <h6 className="uppercase text-gray-200 text-xs font-medium">
            Overview
          </h6>
          <h2 className="text-white text-2xl">LA Clippers</h2>
        </CardHeader>
        <CardBody>
          <div className="relative h-96 w-24">
                <ClippersLineChart/>
          </div>
        </CardBody>
      </Card>
      
    </div>
  );
}

export default ClippersLine;
