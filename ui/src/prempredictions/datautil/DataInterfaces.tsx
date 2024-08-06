interface TeamPosition {
    position: number,
    team: string,
}


export interface Prediction {
    name: string,
    prediction: TeamPosition[],
}

export interface Positions {
    year: string,
    positions: TeamPosition[],
}

export interface Result {
    name: string,
    points: number,
}

export const FakeResultData: Positions[] = [
    {
        year: "2023/2024", positions: [{
            position: 1, team: "Man City",
        }, {
            position: 2, team: "Arsenal",
        }, {
            position: 3, team: "Liverpool",
        }, {
            position: 4, team: "Aston Villa",
        }, {
            position: 5, team: "Tottenham",
        }, {
            position: 6, team: "Chelsea",
        }, {
            position: 7, team: "Newcastle",
        }, {
            position: 8, team: "Man United",
        }, {
            position: 9, team: "West Ham",
        }, {
            position: 10, team: "Crystal Palace",
        }, {
            position: 11, team: "Brighton",
        }, {
            position: 12, team: "Bournemouth",
        }, {
            position: 13, team: "Fulham",
        }, {
            position: 14, team: "Wolves",
        }, {
            position: 15, team: "Everton",
        }, {
            position: 16, team: "Brentford",
        }, {
            position: 17, team: "Nottenham Forest",
        }, {
            position: 18, team: "Luton Town",
        }, {
            position: 19, team: "Burnley",
        }, {
            position: 20, team: "Sheffield United",
        }
        ]
    }
]

export const PredictionData: Prediction[] = [{
    name: "Ben",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 3, team: "Arsenal",
    }, {
        position: 4, team: "Liverpool",
    }, {
        position: 8, team: "Aston Villa",
    }, {
        position: 7, team: "Tottenham",
    }, {
        position: 6, team: "Chelsea",
    }, {
        position: 5, team: "Newcastle",
    }, {
        position: 2, team: "Man United",
    }, {
        position: 10, team: "West Ham",
    }, {
        position: 17, team: "Crystal Palace",
    }, {
        position: 9, team: "Brighton",
    }, {
        position: 15, team: "Bournemouth",
    }, {
        position: 14, team: "Fulham",
    }, {
        position: 20, team: "Wolves",
    }, {
        position: 13, team: "Everton",
    }, {
        position: 11, team: "Brentford",
    }, {
        position: 16, team: "Nottenham Forest",
    }, {
        position: 18, team: "Luton Town",
    }, {
        position: 12, team: "Burnley",
    }, {
        position: 19, team: "Sheffield United",
    }],
}, {
    name: "Luca",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 2, team: "Arsenal",
    }, {
        position: 6, team: "Liverpool",
    }, {
        position: 9, team: "Aston Villa",
    }, {
        position: 4, team: "Tottenham",
    }, {
        position: 8, team: "Chelsea",
    }, {
        position: 5, team: "Newcastle",
    }, {
        position: 3, team: "Man United",
    }, {
        position: 7, team: "West Ham",
    }, {
        position: 14, team: "Crystal Palace",
    }, {
        position: 11, team: "Brighton",
    }, {
        position: 12, team: "Bournemouth",
    }, {
        position: 18, team: "Fulham",
    }, {
        position: 19, team: "Wolves",
    }, {
        position: 10, team: "Everton",
    }, {
        position: 17, team: "Brentford",
    }, {
        position: 15, team: "Nottenham Forest",
    }, {
        position: 20, team: "Luton Town",
    }, {
        position: 13, team: "Burnley",
    }, {
        position: 16, team: "Sheffield United",
    }, ]
} , {
    name: "Ash",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 3, team: "Arsenal",
    }, {
        position: 2, team: "Liverpool",
    }, {
        position: 7, team: "Aston Villa",
    }, {
        position: 8, team: "Tottenham",
    }, {
        position: 6, team: "Chelsea",
    }, {
        position: 5, team: "Newcastle",
    }, {
        position: 4, team: "Man United",
    }, {
        position: 13, team: "West Ham",
    }, {
        position: 12, team: "Crystal Palace",
    }, {
        position: 9, team: "Brighton",
    }, {
        position: 14, team: "Bournemouth",
    }, {
        position: 17, team: "Fulham",
    }, {
        position: 18, team: "Wolves",
    }, {
        position: 16, team: "Everton",
    }, {
        position: 11, team: "Brentford",
    }, {
        position: 10, team: "Nottenham Forest",
    }, {
        position: 20, team: "Luton Town",
    }, {
        position: 15, team: "Burnley",
    }, {
        position: 19, team: "Sheffield United",
    }, ]
} , {
    name: "Joe",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 2, team: "Arsenal",
    }, {
        position: 5, team: "Liverpool",
    }, {
        position: 6, team: "Aston Villa",
    }, {
        position: 7, team: "Tottenham",
    }, {
        position: 8, team: "Chelsea",
    }, {
        position: 4, team: "Newcastle",
    }, {
        position: 3, team: "Man United",
    }, {
        position: 11, team: "West Ham",
    }, {
        position: 14, team: "Crystal Palace",
    }, {
        position: 9, team: "Brighton",
    }, {
        position: 13, team: "Bournemouth",
    }, {
        position: 20, team: "Fulham",
    }, {
        position: 17, team: "Wolves",
    }, {
        position: 12, team: "Everton",
    }, {
        position: 10, team: "Brentford",
    }, {
        position: 16, team: "Nottenham Forest",
    }, {
        position: 18, team: "Luton Town",
    }, {
        position: 15, team: "Burnley",
    }, {
        position: 19, team: "Sheffield United",
    }, ]
} , {
    name: "Lee",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 4, team: "Arsenal",
    }, {
        position: 6, team: "Liverpool",
    }, {
        position: 7, team: "Aston Villa",
    }, {
        position: 3, team: "Tottenham",
    }, {
        position: 5, team: "Chelsea",
    }, {
        position: 8, team: "Newcastle",
    }, {
        position: 2, team: "Man United",
    }, {
        position: 10, team: "West Ham",
    }, {
        position: 9, team: "Crystal Palace",
    }, {
        position: 11, team: "Brighton",
    }, {
        position: 20, team: "Bournemouth",
    }, {
        position: 15, team: "Fulham",
    }, {
        position: 19, team: "Wolves",
    }, {
        position: 13, team: "Everton",
    }, {
        position: 12, team: "Brentford",
    }, {
        position: 16, team: "Nottenham Forest",
    }, {
        position: 17, team: "Luton Town",
    }, {
        position: 14, team: "Burnley",
    }, {
        position: 18, team: "Sheffield United",
    }, ]
} , {
    name: "Nath",
    prediction: [{
        position: 1, team: "Man City",
    }, {
        position: 5, team: "Arsenal",
    }, {
        position: 2, team: "Liverpool",
    }, {
        position: 6, team: "Aston Villa",
    }, {
        position: 9, team: "Tottenham",
    }, {
        position: 7, team: "Chelsea",
    }, {
        position: 4, team: "Newcastle",
    }, {
        position: 3, team: "Man United",
    }, {
        position: 12, team: "West Ham",
    }, {
        position: 15, team: "Crystal Palace",
    }, {
        position: 8, team: "Brighton",
    }, {
        position: 17, team: "Bournemouth",
    }, {
        position: 10, team: "Fulham",
    }, {
        position: 14, team: "Wolves",
    }, {
        position: 13, team: "Everton",
    }, {
        position: 11, team: "Brentford",
    }, {
        position: 16, team: "Nottenham Forest",
    }, {
        position: 20, team: "Luton Town",
    }, {
        position: 18, team: "Burnley",
    }, {
        position: 19, team: "Sheffield United",
    }, ]
} , {
    name: "Other Ben",
    prediction: [{
        position: 2, team: "Man City",
    }, {
        position: 1, team: "Arsenal",
    }, {
        position: 4, team: "Liverpool",
    }, {
        position: 8, team: "Aston Villa",
    }, {
        position: 5, team: "Tottenham",
    }, {
        position: 6, team: "Chelsea",
    }, {
        position: 7, team: "Newcastle",
    }, {
        position: 3, team: "Man United",
    }, {
        position: 13, team: "West Ham",
    }, {
        position: 10, team: "Crystal Palace",
    }, {
        position: 9, team: "Brighton",
    }, {
        position: 14, team: "Bournemouth",
    }, {
        position: 15, team: "Fulham",
    }, {
        position: 16, team: "Wolves",
    }, {
        position: 18, team: "Everton",
    }, {
        position: 11, team: "Brentford",
    }, {
        position: 12, team: "Nottenham Forest",
    }, {
        position: 19, team: "Luton Town",
    }, {
        position: 17, team: "Burnley",
    }, {
        position: 20, team: "Sheffield United",
    }, ]
}]