import React from "react";
import GSWLineChart from './GSWLineChart'
import GSWBar from './GSWBar'
import CardBody from '@material-tailwind/react/CardBody';
import Card from "@material-tailwind/react/Card";
import CardHeader from '@material-tailwind/react/CardHeader';
function GSW() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5">
    {/* line chart = start on col one, end 5 */}
        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
        <GSWLineChart/>
        </div>
              {/* bar chart = start on col 4, end 6 */}
        <div className="xl:col-start-4 xl:col-end-6 px- mb-14">
        <Card>
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">MVP Bar Chart</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <GSWBar/>
                </div>
            </CardBody>
        </Card>
      
        </div>
    </div>
  );
}

export default GSW;
