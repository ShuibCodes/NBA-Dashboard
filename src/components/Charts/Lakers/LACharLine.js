import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import LebronLine from './LebronLine'
export default function ChartLine() {
  

    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
               
                <h3 className="text-white text-2xl">Points Per Season 2016-2021</h3>
            </CardHeader>
            <CardBody>
                <div className="relative h-96 w-24">
                    <LebronLine/>
                </div>
            </CardBody>
        </Card>
    );
}
