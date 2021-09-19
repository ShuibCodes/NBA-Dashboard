import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
function Tweets() {
	return (
		<div>
			<div >
				<h1 style={{marginTop:"20px", marginBottom:"25px", padding:"5px", textAlign:"left", fontSize:"22px", whiteSpace:"nowrap"}} >Catch Up On The Latest Trades</h1>
			</div>
            <div>
			<TwitterTimelineEmbed sourceType="profile" screenName="wojespn" options={{ height: 400, width: 300 }} />
            </div>

		</div>
	);
}

export default Tweets;
