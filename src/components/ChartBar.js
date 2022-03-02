import { useEffect } from 'react';
import Chart from 'chart.js';
import AdminNavbar from "./AdminNavbar";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import BarChart from  '../components/Charts/BarChart'
export default function ChartBar(props) {
   


    return (
        <Card>
        
            <CardHeader color="pink" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">MVP Bar Chart</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <BarChart/>
                </div>
            </CardBody>
        </Card>
    );
}
