
//axolotl in bucket
    var axbucket = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 6, 6, 5, 5, 0, 0, 0, 0, 5, 5, 6, 6, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 6, 5, 5, 6, 6, 5, 5, 0, 0, 0, 0, 5, 5, 6, 6, 5, 5, 6, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 6, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 3, 3, 4, 4, 4, 5, 5, 4, 4, 4, 3, 3, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 5, 3, 3, 3, 3, 5, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 5, 3, 3, 3, 3, 5, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 5, 1, 1, 1, 1, 5, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 6, 5, 6, 2, 2, 6, 5, 6, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 6, 2, 2, 2, 2, 6, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 7, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 7, 7, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    var fishbucket = [
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'smelly', 'smelly', 'evil', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'smelly', 'smelly', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'smelly', 'smelly', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'smelly', 'smelly', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'smelly', 'smelly', 'smelly', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'sinner', 'smelly', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'gluttony', 'sinner', 'sinner', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'gluttony', 'gluttony', 'gluttony', 'evil', 'evil', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'gluttony', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'smelly', 'smelly', 'smelly', 'life', 'life', 'life', 'evil', 'evil', 'menace', 'gluttony', 'menace', 'gluttony', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'gluttony', 'menace', 'menace', 'gluttony', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'smelly', 'smelly', 'smelly', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'gluttony', 'menace', 'gluttony', 'menace', 'gluttony', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'smelly', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'menace', 'gluttony', 'smelly', 'gluttony', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'menace', 'gluttony', 'smelly', 'smelly', 'smelly', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'gluttony', 'gluttony', 'gluttony', 'menace', 'menace', 'smelly', 'smelly', 'smelly', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'gluttony', 'gluttony', 'smelly', 'smelly', 'menace', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'menace', 'menace', 'menace', 'gluttony', 'menace', 'gluttony', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'evil', 'evil', 'menace', 'menace', 'menace', 'gluttony', 'gluttony', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'evil', 'evil', 'menace', 'menace', 'gluttony', 'gluttony', 'gluttony', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'menace', 'menace', 'gluttony', 'gluttony', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'menace', 'menace', 'menace', 'menace', 'menace', 'sinner', 'sinner', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'gluttony', 'gluttony', 'gluttony', 'sinner', 'sinner', 'evil', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'evil', 'evil', 'evil', 'evil', 'evil', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
        ['life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life', 'life'],
    ];  
 
    var steve = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 3, 3, 3, 3, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];

    let creeper = [
        [1, 5, 2, 1, 3, 0, 4, 2, 1, 3, 1, 4, 4, 5, 1, 2, 3, 5, 4, 1, 3, 4, 3, 2, 2, 1, 3, 5, 5, 2, 1, 3], 
        [5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1, 0], 
        [1, 3, 3, 5, 2, 5, 3, 2, 0, 3, 1, 3, 0, 4, 2, 1, 3, 1, 1, 2, 3, 5, 4, 1, 3, 4, 3, 2, 2,  5, 5, 3], 
        [3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 4, 2, 1, 3, 1, 4, 4, 5, 1, 2, 3, 5, 3, 5, 2, 4, 1, 2, 1, 5, 2, 1], 
        [1, 3, 4, 2, 3, 4, 4, 5, 1, 0, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3, 4, 1, 0, 5, 2, 1], 
        [5, 0, 1, 0, 3, 4, 5, 1, 2, 3, 5, 4, 1, 2, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3, 4, 0], 
        [0, 5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1], 
        [3, 4, 5, 1, 0, 0, 2, 3, 4, 4, 5, 1, 2, 3, 5, 4, 1, 3, 4, 3, 2, 2, 1, 3, 5, 5, 2, 1, 3, 0, 4, 2], 
        [5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1, 0], 
        [1, 3, 3, 5, 2, 5, 3, 2, 0, 3, 1, 3, 0, 4, 2, 1, 3, 1, 1, 2, 3, 5, 4, 1, 3, 4, 3, 2, 2, 5, 5, 3], 
        [2, 1, 5, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 4, 4, 0, 5, 6, 6, 6, 6, 6, 6, 4, 1, 2, 1, 5, 2, 1, 0], 
        [0, 3, 4, 2, 3, 4, 4, 5, 6, 6, 6, 6, 6, 6, 1, 5, 4, 3, 6, 6, 6, 6, 6, 6, 1, 3, 4, 1, 0, 5, 2, 1], 
        [4, 1, 0, 1, 3, 4, 5, 1, 6, 6, 6, 6, 6, 6, 1, 5, 2, 1, 6, 6, 6, 6, 6, 6, 4, 4, 5, 0, 1, 3, 4, 0], 
        [5, 0, 1, 0, 3, 4, 5, 1, 6, 6, 6, 6, 6, 6, 1, 5, 3, 0, 6, 6, 6, 6, 6, 6, 4, 4, 5, 0, 1, 3, 4, 0], 
        [1, 5, 2, 0, 4, 1, 5, 0, 6, 6, 6, 6, 6, 6, 5, 2, 0, 2, 6, 6, 6, 6, 6, 6, 4, 5, 3, 2, 0, 3, 1, 0], 
        [2, 5, 3, 5, 2, 4, 1, 5, 6, 6, 6, 6, 6, 6, 1, 5, 1, 5, 6, 6, 6, 6, 6, 6, 2, 4, 5, 3, 2, 0, 3, 1], 
        [3, 2, 4, 5, 1, 0, 0, 2, 3, 4, 4, 5, 1, 2, 6, 6, 6, 6, 3, 4, 3, 2, 2, 1, 3, 5, 5, 2, 1, 3, 0, 4], 
        [5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 6, 6, 6, 6, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1, 0], 
        [4, 1, 3, 4, 2, 3, 4, 4, 5, 1, 0, 1, 5, 2, 6, 6, 6, 6, 0, 1, 3, 4, 4, 5, 0, 1, 3, 4, 1, 0, 5, 2], 
        [2, 2, 4, 1, 0, 1, 3, 4, 5, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 0, 1, 3, 4, 4, 5, 0, 1, 3], 
        [0, 1, 5, 0, 1, 3, 4, 5, 1, 2, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 1, 3, 4, 4, 5, 0, 1, 3, 2], 
        [0, 5, 3, 5, 2, 4, 1, 5, 0, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1], 
        [3, 4, 5, 1, 0, 0, 2, 3, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 3, 5, 5, 2, 1, 3, 0, 4, 2], 
        [5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 6, 6, 6, 1, 5, 2, 3, 4, 4, 6, 6, 6, 1, 2, 4, 5, 3, 2, 0, 3, 1, 0], 
        [1, 3, 3, 5, 2, 5, 3, 2, 0, 3, 6, 6, 6, 4, 2, 1, 3, 1, 1, 6, 6, 6, 4, 1, 3, 4, 3, 2, 2, 5, 5, 3], 
        [1, 2, 1, 5, 2, 3, 4, 4, 5, 1, 6, 6, 6, 3, 1, 4, 4, 5, 1, 6, 6, 6, 3, 5, 2, 4, 1, 2, 1, 5, 2, 1], 
        [3, 4, 2, 3, 4, 4, 5, 1, 0, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3, 4, 1, 0, 5, 2, 1, 4], 
        [3, 2, 4, 1, 0, 1, 3, 4, 5, 1, 2, 3, 5, 4, 1, 2, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3], 
        [2, 1, 5, 0, 1, 3, 4, 5, 1, 2, 3, 5, 4, 1, 2, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3, 2], 
        [5, 0, 1, 0, 3, 4, 5, 1, 2, 3, 5, 4, 1, 2, 1, 5, 2, 4, 1, 5, 2, 0, 1, 3, 4, 4, 5, 0, 1, 3, 4, 0], 
        [1, 5, 2, 0, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1, 0], 
        [0, 5, 3, 5, 2, 4, 1, 5, 0, 4, 5, 5, 3, 2, 1, 5, 2, 3, 4, 4, 5, 1, 3, 1, 2, 4, 5, 3, 2, 0, 3, 1], 
        ]; 
    

    let images = [];
    let strings = ['hello','chicken','jockey','flint','steel','jack','black','bucket'];
    let currentPage = 0;

    let scene, scene1, scene2, scene3;
    var a = 0;
    let font1;

    function preload()  {

        scene = loadImage('assets/scene.gif');
        scene1 = loadImage('assets/scene1.gif');
        scene2 = loadImage('assets/scene2.gif'); 
        scene3 = loadImage('assets/scene3.gif');
        font1 = loadFont('assets/ByteBounce.ttf');
        images[0] = loadImage('assets/dirt.jpg');
        images[1] = loadImage('assets/obsidian.jpg');
        images[2] = loadImage('assets/stone.jpg');
        images[3] = loadImage('assets/water.jpeg');
        images[4] = loadImage('assets/cherryplank.png');
        images[5] = loadImage('assets/concrete.png');
        images[6] = loadImage('assets/pinkconcrete.png');  
        images[7] = loadImage('assets/basalt.jpg');
 
 }

    function setup() {

        createCanvas(1920, 1080);
        textFont(font1);

        background(150);
        bucket3(axbucket, 50, 500, -5, .45);
        bucket3(axbucket, 700, 700, 180, .2, 100);
        bucketimgs(axbucket, images, 700, 700, 0, .35);
        buckettext(axbucket, strings, 300, 300, 90, .3);
        fishybucket(fishbucket, 100, 100, 0, .4);
    }

    function draw (){
        background(252, 126, 225,100);

        if (currentPage == 0) {   // intro and title
          image(scene, 0, 0, width, height);
            
            push();
            axolotlbucket(axbucket, 700, 100, 4, 1);
            translate(80,100);
            fill(0);
            textSize(75);
            text ("My groups memebers were Noe, Arrav, and Me! ",0 ,0, 1500 );
            translate(0,120);
            text ("I have a total of 12 images",0 ,0,800 );
            text ("Press 1, 2, or 3 for the next pages",0 ,50,10200 );
            translate(250,120);


            pop();
    
    
    
        } else if (currentPage == 1) {
            background(1, 31, 130,100);
          push();
          bucket2(axbucket, 500, 100, -4, .40, 100);
          bucket2(axbucket, 550, 550, 0, .30);
          bucket3(axbucket, 50, 500, -5, .45);
          bucket3(axbucket, 1500, 700, 180, .2, 100);
          fishybucket1(fishbucket, 1500, 700, 0, .4);
          bucketimgs(axbucket, images, 700, 700, 0, .35);
          fishybucket(fishbucket, 100, 100, 0, .4);
          buckettext(axbucket, strings, 300, 300, 90, .3);
          axolotlbucket(axbucket, 1000, 100, 4, .81);
          translate(100,100);
          fill(0);
          textSize(50);
          text("This an example of my 2 arrays. \n one is a numerical array while the other is a text array.",0,0);  // the 4th argument is the textWidth per line.
          pop();
     
    
        } else if (currentPage == 2) {
            background(252, 126, 225,100);
            
         push();
            bucket2(steve, 1000, 100, 4, .81);
            fishybucket1(steve, 50, 500, -5, .45);
            bucketimgs(steve, images, 700, 700, 0, .35);
            buckettext(steve, strings, 1000, 300, 90, .3);
         translate(100,100);
         fill(0);
         textSize(70);
         text("These are Arrav's arrays styled the same way my axolotls are.",0,0);
         pop();
    
    
        } else if (currentPage == 3) {
            background(140, 255, 87,100);
            push();
            translate(100,100);
            fill(0);
            textSize(70);
            bucket2(creeper, 1000, 100, 4, .81);
            fishybucket1(creeper, 50, 500, -5, .45);
            axolotlbucket(creeper, 100, 100, 4, .41);
            bucketimgs(creeper, images, 700, 700, 0, .35);
            buckettext(creeper, strings, 1000, 300, 90, .3);
            text("These are Noe's arrays styled by mine as well.",0,0,1500);
            pop();
        }
    }

    function keyPressed() { 
        if ( key == '1' ) { 
          console.log("Page 1");
          currentPage = 1;
    
         } else if ( key == '2' ) { 
            console.log("Page 2");
            currentPage = 2;     
         } else if ( key == '3' ) { 
            console.log("Page 3");
            currentPage = 3;   
         } else {
            currentPage = 0;
         }
        }


    function axolotlbucket(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    //fill(169, 207, 155,fade);
                    noFill()
                }  else if(a === 1 || a === 'life'){
                    fill(10,fade);
                } else if(a === 2|| a === 'evil'){
                    fill(150,fade);
                } else if(a === 3|| a === 'menace') {
                    fill(15, 44, 110,fade);
                } else if(a === 4|| a === 'gluttony'){
                    fill(255, 128, 153,fade);
                } else if(a === 5|| a === 'sinner'){
                    fill(255, 92, 125,fade);
                }else if(a === 6|| a === 'smelly'){
                    fill(255, 33, 78,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function fishybucket(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 'life' || a === 0) {
                    fill(59, 137, 255,fade);
                   // noFill()
                }  else if(a === 'evil'|| a === 1){
                    fill(0, 9, 23,fade);
                } else if(a === 'menace'|| a === 2){
                    fill(98, 133, 150,fade);
                } else if(a === 'gluttony'||a === 3) {
                    fill(68, 113, 135,fade);
                } else if(a === 'sinner'|| a === 4){
                    fill(37, 60, 94,fade);
                } else if(a === 'smelly' || a === 5){
                    fill(210, 226, 250,fade);
                }  
                noStroke();
                strokeWeight(4);
                textFont(font1);
                textSize(30);
                text(a, (j * 30) + 15, (i * 30) + 15, 30, 30);
                //rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function fishybucket1(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 'life'   || a === 0) {
                    fill(59, 137, 255,fade);
                   // noFill()
                }  else if(a === 'evil' || a === 1){
                    fill(0, 9, 23,fade);
                } else if(a === 'menace'|| a === 2){
                    fill(98, 133, 150,fade);
                } else if(a === 'gluttony'  || a === 3) {
                    fill(68, 113, 135,fade);
                } else if(a === 'sinner' || a === 4){
                    fill(37, 60, 94,fade);
                } else if(a === 'smelly' || a === 5){
                    fill(210, 226, 250,fade);
                }  
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucket2(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(255, 199, 56,fade);
                }  else if(a === 1){
                    fill(10,fade);
                } else if(a === 2){
                    fill(150,fade);
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                } else if(a === 4){
                    fill(125, 138, 255,fade);
                } else if(a === 5){
                    fill(86, 102, 240,fade);
                }else if(a === 6){
                    fill(2, 35, 168,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                rect((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucket3(arr,lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(152, 117, 255,fade);
                }  else if(a === 1){
                    fill(10,fade);
                } else if(a === 2){
                    fill(150,fade);
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                } else if(a === 4){
                    fill(255, 231, 135,fade);
                } else if(a === 5){
                    fill(255, 188, 94,fade);
                }else if(a === 6){
                    fill(255, 163, 36,fade);
                }else if(a === 7){
                    fill(100,fade);
                }
                noStroke();
                ellipse((j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function bucketimgs(arr, imgarr, lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let nuimg;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    nuimg = imgarr[0];
                }  else if(a === 1){
                    nuimg = imgarr[1];
                } else if(a === 2){
                    nuimg = imgarr[2];
                } else if(a === 3) {
                    nuimg = imgarr[3];;
                } else if(a === 4){
                    nuimg = imgarr[4];
                } else if(a === 5){
                    nuimg = imgarr[5];
                }else if(a === 6){
                    nuimg = imgarr[6];
                }else if(a === 7){
                    nuimg = imgarr[7];
                }
                image(nuimg, (j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }

    function buckettext(arr, textarr, lx,ly,rot,sc,fade){
        push();
        translate(lx,ly);
        rotate(radians(rot));
        scale(sc);
        let value;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                a = arr[i][j];
                if (a === 0) {
                    fill(130, 222, 255,fade);
                    value = textarr[0];
                }  else if(a === 1){
                    fill(10,fade);
                    value = textarr[1];
                } else if(a === 2){
                    fill(150,fade);
                    value = textarr[2];
                } else if(a === 3) {
                    fill(15, 44, 110,fade);
                    value = textarr[3];;
                } else if(a === 4){
                    fill(255, 128, 153,fade);
                    value = textarr[4];
                } else if(a === 5){
                    fill(255, 92, 125,fade);
                    value = textarr[5];
                }else if(a === 6){
                    fill(255, 33, 78,fade);
                    value = textarr[6];
                }else if(a === 7){
                    fill(100,fade);
                    value = textarr[7];
                }
                strokeWeight(4);
                textFont(font1);
                textSize(25);
                text(value, (j * 30) + 15, (i * 30) + 15, 30, 30);
            }
        }
        pop();
    }
