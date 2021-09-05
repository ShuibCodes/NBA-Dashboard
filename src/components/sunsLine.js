import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import BookerLine from '../components/Charts/BookerLine'
export default function ChartLine() {
  

    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-2xl">Devin Booker</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96 w-24">
                    <BookerLine/>
                </div>
            </CardBody>
        </Card>
    );
}
