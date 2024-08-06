import { Prediction, Positions, Result } from "./DataInterfaces";

export default function sortResults(sortType: string, predictions: Prediction[], results: Positions) {
    const resultsSorted: Result[] = []

    for (const prediction of predictions) {
        if (sortType === "Diffrence") {
            const resultSorted: Result = {
                name: prediction.name,
                points: calculatePointsDiffrence(prediction, results)
            }
            resultsSorted.push(resultSorted)
        } else {
            const resultSorted: Result = {
                name: prediction.name,
                points: calculatePointsClosestMatch(prediction, results)
            }
            resultsSorted.push(resultSorted)
        }

    }

    const sortedArray: Result[] = resultsSorted.sort((n1,n2) => n1.points - n2.points);

    return sortedArray
}

function calculatePointsDiffrence(predictions: Prediction, result: Positions): number {
    let diffrence = 0;

    for (const prediction of predictions.prediction) {
        for (const singleresult of result.positions) {
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

function calculatePointsClosestMatch(predictions: Prediction, result: Positions): number {
    let points = 0;

    for (const prediction of predictions.prediction) {
        for (const singleresult of result.positions) {
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