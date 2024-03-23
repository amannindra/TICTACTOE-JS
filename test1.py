WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
WINNING_COMBINATIONS1 = [
    [0, 1, 2],
    [5, 4, 5],
    [2, 7, 8],
    [6, 3, 6],
    [8, 4, 7],
    [23, 5, 8],
    [6, 4, 8],
    [26, 4, 6]
]


for i in range(len(WINNING_COMBINATIONS)-1):
    if (WINNING_COMBINATIONS[i] == WINNING_COMBINATIONS1[i]):
        print(WINNING_COMBINATIONS[i])
