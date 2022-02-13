import React from "react";
import LAChartLine from "./LACharLine";
import LebronBar from './LebronBar'
import CardBody from '@material-tailwind/react/CardBody';
import Card from "@material-tailwind/react/Card";
import CardHeader from '@material-tailwind/react/CardHeader';
function Lakers() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5">
    {/* line chart = start on col one, end 5 */}
        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
        <LAChartLine />
        </div>
              {/* bar chart = start on col 4, end 6 */}
        <div className="xl:col-start-4 xl:col-end-6 px- mb-14">
        <Card>
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h3 className="text-white text-2xl">Stats Per Season 2015-2021</h3>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <LebronBar/>
                </div>
            </CardBody>
        </Card>
      
        </div>
    </div>
  );
}

export default Lakers;
