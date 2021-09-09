import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatus from '@material-tailwind/react/CardStatus';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';

export default function StatusCard({
    color,
    icon,
    title,
    amount,
    percentage,
    percentageColor,
    percentageIcon,
    date,
}) {


    const lebron  = [
        {
            "id": 774815,
            "ast": 11,
            "blk": 3,
            "dreb": 10,
            "fg3_pct": 0.2,
            "fg3a": 5,
            "fg3m": 1,
            "fg_pct": 0.375,
            "fga": 24,
            "fgm": 9,
            "ft_pct": 0.8,
            "fta": 10,
            "ftm": 8,
            "game": {
                "id": 33921,
                "date": "2016-06-19T00:00:00.000Z",
                "home_team_id": 10,
                "home_team_score": 89,
                "period": 4,
                "postseason": true,
                "season": 2015,
                "status": "Final",
                "time": " ",
                "visitor_team_id": 6,
                "visitor_team_score": 93
            },
            "min": "46:49",
            "oreb": 1,
            "pf": 1,
            "player": {
                "id": 237,
                "first_name": "LeBron",
                "height_feet": 6,
                "height_inches": 8,
                "last_name": "James",
                "position": "F",
                "team_id": 14,
                "weight_pounds": 250
            },
            "pts": 25,
            "reb": 11,
            "stl": 2,
            "team": {
                "id": 6,
                "abbreviation": "CLE",
                "city": "Cleveland",
                "conference": "East",
                "division": "Central",
                "full_name": "Cleveland Cavaliers",
                "name": "Cavaliers"
            },
            "turnover": 5
        }
    ]

    return (
        <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color={color} iconOnly className="mb-0">
                        <Icon name={icon} size="3xl" color="white" />
                    </CardHeader>
                         {/* player name and stat  */}
                    <CardStatus title="Lebron James" amount={lebron[0].pts} />
                </CardRow>
            {/* up or down from last season */}
                <CardStatusFooter
                    amount="2.5"
                    color={percentageColor}
                    date="Last season"
                >
                    <Icon color={percentageColor} name={percentageIcon} />
                </CardStatusFooter>
            </Card>
        </div>
    );
}
