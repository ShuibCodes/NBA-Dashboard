import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import PageVisitsCard from 'components/PageVisitsCard';
import TrafficCard from 'components/TrafficCard';


import Timer from '../Timer'
export default function Dashboard() {



    return (
        <>  
           <Timer/>
             {/* top half of page  */}
            <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
            {/* both elements on the page (line bar chart) */}
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                {/* for non-mobile screen- 5 cols, mobile = 1 cols */}
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                    {/* line chart = start on col one, end 5 */}
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                              {/* bar chart = start on col 4, end 6 */}
                        <div className="xl:col-start-4 xl:col-end-6 px- mb-14">
                            <ChartBar />
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                      
                     
                    
                    </div>
                </div>
            </div>

            
        </>
    );
}
