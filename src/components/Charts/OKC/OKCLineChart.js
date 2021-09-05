import React from "react";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import OKCLine from './OKCLine'
function OKCLineChart() {
  return (
    <Card>
      <CardHeader color="orange" contentPosition="left">
        <h6 className="uppercase text-gray-200 text-xs font-medium">
          Overview
        </h6>
        <h2 className="text-white text-2xl">MVP Chart</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-96 w-24">
            <OKCLine/>
        </div>
      </CardBody>
    </Card>
  );
}

export default OKCLineChart;
