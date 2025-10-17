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


// make a function that fixes a window size then tests whether all cells inside it meet a condition

function hasConsecutive(row: string[], needed: number): number {
    // start the loop, utilize both args
    for (let start = 0; start <= row.length - needed; start++) {
        // define your moving window with slice(start, start + window size)
        const window = row.slice(start, start + needed)
        // validate if window matches the condition
        if (window.every(x => x === "A")) return start
    }
    return -1
}


function countIslands(grid: string[][]) {
    
    for (let r = 0; r < grid.length; r++) {
        let row = grid[r]
        for (let c = 0; c < row.length; c++) {
            
        }
    }
}

export function findFirstRun(row: string[], needed: number): number {
  let start = 0
  for (let i = 1; i <= row.length; i++) {
    if (row[i] !== row[start]) {
      const len = i - start
      if (row[start] === "A" && len >= needed) return start
      start = i
    }
  }
  return -1
}


export function findFirstRunOf(row: string[], target: string, needed: number): number {
  let start = 0
  for (let i = 1; i <= row.length; i++) {
    if (row[i] !== row[start]) {
      const len = i - start
      if (row[start] === target && len >= needed) return start
      start = i
    }
  }
  return -1
}

// spec: given a grid of "A"/"B", count connected regions of "A" cells (4-directional adjacency: up/down/left/right).

// thinking (state machine)
// 	•	treat each cell as a node; edges connect orthogonal neighbors.
// 	•	loop all cells:
// 	•	if you see an "A" you haven’t visited, that’s a new island → increment count and flood fill from there (DFS/BFS) to mark the entire island visited.
// 	•	correctness hinges on: a cell is counted exactly once (visited) and only if it belongs to some island.

type Seat = "A" | "B"
type Grid = Seat[][]

export function countAIslands(grid: Grid): number {
  const rows = grid.length
  if (rows === 0) return 0
  const cols = grid[0].length
  const seen: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false))
  const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  let islands = 0
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] !== "A" || seen[r][c]) continue

      islands++

      const stack: [number, number][] = [[r, c]]
      seen[r][c] = true

      while (stack.length) {
        const [cr, cc] = stack.pop()!
        for (const [dr, dc] of dirs) {
          const nr = cr + dr, nc = cc + dc
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue
          if (seen[nr][nc]) continue
          if (grid[nr][nc] !== "A") continue
          seen[nr][nc] = true;
          stack.push([nr, nc]);
        }
      }
    }
  }
  return islands
}

function findRunAgain(row: string[]) {
    let runs = []
    let start = 0
    for (let i = 1; i < row.length; i++) {
        if (row[i] !== row[start]) {
            runs.push({ value: row[start], start, end: i - 1 })
            start = i
        }
    }
    return runs
}

function returnIndex(row: string[], needed: number): number {
    for (let start = 0; start <= row.length - needed; start++) {
        const slidingWindow = row.slice(start, start + needed)
        if (slidingWindow.every(x => x === "A")) return start
    }
    return -1
}

/*
how do directions work? coordinate system:
[1, 0] down
[-1, 0] up
[0, 1] right
[0, -1] left

notice how it's inverted to graph coordinates:
(0, 1) up
(0, -1) down
(1, 0) right
(-1, 0) left

this makes it confusing and needs getting used to, axis are inverted, moving direction is inverted both horizontally and vertically
*/

function findAllRuns(row: string[]) {
    let runs = []
    let start = 0
    for (let i = 1; i <= row.length; i++) {
        if (row[i] !== row[start]) {
            runs.push({ value: row[start], start, end: i - 1 })
            start = i
        }

    }
    return runs
}

console.log(findAllRuns(["A","A","B","A","A","A"]))

function enumerateRuns(row: string[]) {
    let output = []
    let start = 0
    for (let i = 1; i <= row.length; i++) {
        if (row[i] !== row[start]) {
            output.push({value: row[start], start, end: i - 1})
            start = i
        }
    }
    return output
}

console.log(enumerateRuns(["A","A","B","A","A","A"]))

function firstARun(row: string[], needed: number) {
    for (let start = 0; start <= row.length - needed; start++) {
        const window = row.slice(start, start + needed)
        if (window.every(x => x === "A")) return start
    }
}

console.log(firstARun(["A","A","B","A","A","A"], 2))

