import { Prediction, Result, TeamPosition } from "../../datautil/DataInterfaces"

export const SortTypes: {[sortType: string]: {description: string, calculatePoints: (predictionPosition: TeamPosition[], resultPosition: TeamPosition[]) => number}} = 
{
    ["Diffrence"]: {description: "For each position you are off by you gain 1 point. (Lower points are better)", calculatePoints: calculatePointsDiffrence},
    ["Closest Match"]: {description: "You get 2 points for an exact position match and 1 point if you are within, 1 place of the correct position. (Higher score is better)", calculatePoints: calculatePointsClosestMatch}
} 

export function sortResults(sortType: string, predictions: Prediction, result: TeamPosition[]) {
    const resultsSorted: Result[] = []
  
    for (const name in predictions) {
        const resultSorted: Result = {
            name: name,
            points: SortTypes[sortType].calculatePoints(predictions[name], result)
        }
        resultsSorted.push(resultSorted)
    }
        
    if (sortType === "Diffrence") {
        const sortedArray: Result[] = resultsSorted.sort((n1,n2) => n1.points - n2.points);
        return sortedArray
    } else {
        const sortedArray: Result[] = resultsSorted.sort((n1,n2) => n2.points - n1.points );
        return sortedArray
    }
  }
  
  function calculatePointsDiffrence(predictions: TeamPosition[], result: TeamPosition[]): number {
    let diffrence = 0;
    for (const prediction of predictions) {
        for (const singleresult of result) {
            if (prediction.team === singleresult.team) {
                if (prediction.position > singleresult.position) {
                    diffrence += prediction.position - singleresult.position
                } else {
                    diffrence += singleresult.position - prediction.position
                }
            }
        }
    }
  
    return diffrence
  }
  
function calculatePointsClosestMatch(predictions: TeamPosition[], result: TeamPosition[]): number {
    let points = 0;
    for (const prediction of predictions) {
        for (const singleresult of result) {
            if (prediction.team === singleresult.team) {
                if (prediction.position === singleresult.position) {
                    points += 2
                } else if (prediction.position - singleresult.position === 1 || prediction.position - singleresult.position === -1) {
                    points += 1
                }
            }
        }
    }
  
    return points
}
