// Drills ts


function findRuns(row: string[]) {
    const runs = []
    let start = 0
    for (let i = 1; i < row.length; i++) {
        if (row[i] !== row[start]) {
            runs.push({ value: row[start], start, end: i - 1})
            start = i
        }
    }
    return runs
}



