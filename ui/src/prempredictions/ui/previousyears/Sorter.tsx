import { Prediction, Result, TeamPosition } from "../../datautil/DataInterfaces"

export enum SortType{
    Diffrence,
    ClosestMatch
}

export const SortTypes: {name: string, sortType: SortType}[] = [{name: "Diffrence", sortType: SortType.Diffrence}, {name: "Closest Match", sortType: SortType.ClosestMatch}] 

export function sortResults(sortType: SortType, predictions: Prediction[], result: TeamPosition[]) {
    const resultsSorted: Result[] = []
  
    for (const prediction of predictions) {
        if (sortType === SortType.Diffrence) {
            const resultSorted: Result = {
                name: prediction.name,
                points: calculatePointsDiffrence(prediction, result)
            }
            resultsSorted.push(resultSorted)
        } else if (sortType === SortType.ClosestMatch) {
            const resultSorted: Result = {
                name: prediction.name,
                points: calculatePointsClosestMatch(prediction, result)
            }
            resultsSorted.push(resultSorted)
        }
  
    }
    
    if (sortType === SortType.Diffrence) {
        const sortedArray: Result[] = resultsSorted.sort((n1,n2) => n1.points - n2.points);
        return sortedArray
    } else {
        const sortedArray: Result[] = resultsSorted.sort((n1,n2) => n2.points - n1.points );
        return sortedArray
    }
  
   
  }
  
  function calculatePointsDiffrence(predictions: Prediction, result: TeamPosition[]): number {
    let diffrence = 0;
  
    for (const prediction of predictions.prediction) {
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
  
  function calculatePointsClosestMatch(predictions: Prediction, result: TeamPosition[]): number {
    let points = 0;
  
    for (const prediction of predictions.prediction) {
        for (const singleresult of result) {
            if (prediction.team === singleresult.team) {
                if (prediction.position === singleresult.position) {
                    points += 2
                }
                else if (prediction.position - singleresult.position === 1 || prediction.position - singleresult.position === -1) {
                    points += 1
                }
            }
        }
    }
  
    return points
  }