import React from 'react'
import SunsLine from './suns-line'
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
function RocketsLineChart() {
    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>

                <h5 className="text-white text-2xl">Points Per Season 2015-2021</h5>

            </CardHeader>
            <CardBody>
                <div className="relative h-96 w-24">
                    <SunsLine/>
                </div>
            </CardBody>
        </Card>
    )
}

export default RocketsLineChart
