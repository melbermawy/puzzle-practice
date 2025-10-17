/**
 * Movie Theater Seating System
 *
 * You are implementing a movie theater seating system. The theater has rows of seats,
 * and customers can request to reserve seats. You need to process reservation requests
 * and determine the final seating arrangement.
 *
 * The theater is represented as a grid where each seat can be "available", "reserved",
 * or "blocked" (unusable). Customers request seats by specifying their preferred row
 * and the number of consecutive seats they need.
 *
 * Rules:
 * - Seats must be consecutive in the same row
 * - Choose the leftmost available group of seats in the requested row
 * - If the requested row doesn't have enough consecutive seats, deny the request
 * - Blocked seats cannot be reserved and break consecutiveness
 *
 * Input: Theater layout (2D array) and list of reservation requests
 * Theater: "A" = available, "R" = reserved, "B" = blocked
 * Requests: { customerId: string, row: number, seatsNeeded: number }
 *
 * Return: Object with successful reservations and final theater state
 *
 * Example:
 * Initial theater: [["A", "A", "B", "A", "A"], ["A", "A", "A", "A", "A"]]
 * Request: { customerId: "customer1", row: 0, seatsNeeded: 2 }
 * Result: Seats 0-1 in row 0 reserved, seats 3-4 still available
 */

type Seat = "A" | "R" | "B"

export type Theater = Seat[][]
export type Request = { customerId: string; row: number; seatsNeeded: number }

export type SuccessfulReservation = {
  customerId: string
  row: number
  startSeat: number
  endSeat: number
}

export type Result = {
  successfulReservations: SuccessfulReservation[]
  finalTheater: Theater
}



export function processReservations(initialTheater: Theater, requests: Request): any {

const finalTheater = initialTheater.map(row => [...row])
const successfulReservations = []

function findRun(row: string[], needed: number) {
    let bestRun = -1
    for (let i = 0; i <= row.length - needed; i++) {
        let okay = true
        for (let j = 0; j < needed; j++) {
            if (row[i + j] !== "A") {
                okay = false
                break
            }
        }
        if (okay) {
            bestRun = i
            break
        } 
    }
    return bestRun
}

for (let r = 0; r < requests.seatsNeeded; r++) {
    const { customerId, row, seatsNeeded } = requests[r]

    if (row < 0 || row >= finalTheater.length) continue

    const start = findRun(finalTheater[row], seatsNeeded)
    if (start === -1) continue

    for (let k = 0; k < seatsNeeded; k++) {
        finalTheater[row][start + k] = "R"
    }

    successfulReservations.push({
        customerId,
        row,
        startSeat: start,
        endSeat: start + seatsNeeded - 1,
    })
}
return { successfulReservations: successfulReservations, finalTheater}

}


/* 
pseudo:

I take in string[][] and request.customerId: string, requet.row: number, request.seatsNeeded: number
I need to copy that initial theater to mutate it
since row is a number I need to directly use that row input inside the macro loop
I need to use that seatsNeeded inside the micro loop

so:
for (let r = 0; r < initialTheater.length; r++) {
if (r === request.row) {
    slidingwindow(row: string[], request.seatsNeeded) function {
        for (let start = 0; start <= row.length; start++) {
        const window = row.slice(start, start + needed)
        if (window.every(seat => seat === "A")) {
            currentTheater should be edited to new window and
        }
    }
}
}

*/