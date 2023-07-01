function bestSeat(seats: number[]) {
    let emptySeatsCount: number;
    let longestEmptySeatCount: number = 0;
    let emptySeatStartingIndex: number = -1;
    let emptySeatEndingIndex: number = -1;

    for (let i = 1; i < seats.length; i++) {
        emptySeatsCount = 1;
        if (seats[i] != 0) {
            continue;
        }

        let j: number = i + 1;
        while (seats[j] === 0) {
            emptySeatsCount += 1;
            j += 1;
        }

        if (longestEmptySeatCount < emptySeatsCount) {
            emptySeatStartingIndex = i;
            emptySeatEndingIndex = j - 1;
            longestEmptySeatCount = emptySeatsCount;
        }

        i = j;
    }

    if (longestEmptySeatCount === 0) {
        return -1;
    }

    return Math.floor((emptySeatStartingIndex + emptySeatEndingIndex) / 2);
}
