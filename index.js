// pre typed drills

const testGrid = [
  ["A", "B", "C"],
  ["B", "A", "D"],
  ["A", "B", "A"]
]

function printCoordinates(grid) {
    for (let r = 0; r < grid.length; r++) {
        let row = grid[r]
        for (let c = 0; c < row.length; c++) {
            console.log(`(${r}, ${c}): ${row[c]}`)
        }
    }
}

console.log(printCoordinates([
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"]
]))


function diagonalExtraction(grid) {
    let newArray = []
    for (let r = 0; r < grid.length; r++) {
        let row = grid[r]
        for (let c =0; c < row.length; c++) {
            if (r === c) {
                newArray.push(row[c])
            }
        }
    }
    return newArray
}

console.log(diagonalExtraction([
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"]
]))

function countCondition(grid) {
    let count = 0
    for (let r = 0; r < grid.length; r++) {
        const row = grid[r]
        for (let c =0; c < row.length; c++) {
            if (row[c] === "A") {
                count++
            }
        }
    }
    return count
}

console.log("Total A's:", countCondition(testGrid))

function flattenGrid(grid) {
    let newArray = []
    for (let r = 0; r < grid.length; r++) {
        let row = grid[r]
        for (let c = 0; c < row.length; c++) {
            newArray.push(row[c])
        }
    }
    return newArray
}

console.log("Flattened:", flattenGrid(testGrid))

const gridDrill1 = [["A"]];
const copyDrill1 = gridDrill1;
copyDrill1[0][0] = "Z";
console.log("grid:", gridDrill1, "copy:", copyDrill1)
// Explanation: both grid and copy (0, 0) coordinate became "Z" as = operator is an assignment operator, not a duplication. Javascript does not duplicate by default.
// Rewrite:

const gridDrill1B = [["A"]]
const betterCopy = gridDrill1B.map(row => [...row])
betterCopy[0][0] = "Z"
console.log("grid:", gridDrill1B, "copy:", betterCopy)

function shallowVsDeep(grid) {
    let shallow = [...grid]
    let deep = grid.map(r => [...r])
    shallow[0][0] = "B"
    deep[0][0] = "C"

    console.log(grid, shallow, deep)
}

console.log(shallowVsDeep([["A","B"],["C","D"]]))
// Explanation: although the spread operator does duplicate the outer array layer, it's shallow meaning the inner arrays just get assigned the contents of the original grid, and assignment is not duplication.
// while the deep copy uses map. map literally goes over every single element of the array at it's most granual level. and when each element gets spread it gets properly duplicated.


