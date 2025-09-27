
/*
function removeProperty(obj, prop) {
    delete obj[prop]
    return obj
}
let user = { name: 'leo', age: 17, hobbie: 'snowboard' }
let result = removeProperty(user, 'age')
console.log(result)
*/


/*
function leaderBoard(player) {
    player.sort((a, b) => b.score - a.score)

    for (let i = 0; i < player.length; i++) {
        player[i].rank = i + 1
    }
    return player
}

let arr = [
    { name: "ana", score: 50 },
    { name: 'nika', score: 80 },
    { name: "luka", score: 70 }
]

console.log(leaderBoard(arr))
*/


/*

function longestWord(movies) {
    let longest = movies[0]

    for (let i = 1; i < movies.length; i++) {
        if (movies[i].title.length > longest.title.length) {
            longest = movies[i]
        }

    }
    return longest;
}

let arr = [
    { title: "up", year: 2009 },
    { title: 'The Lord of the Rings', year: 2001 }

]

console.log(longestWord(arr))
*/



/*
function getWorkerAVrage(arr) {

    let result = {}
    let count = {}

    for (let i = 0; i < arr.length; i++) {
        let dept = arr[i].dept
        let age = arr[i].age

        if (!result[dept]) {
            result[dept] = 0
            count[dept] = 0
        }

        result[dept] += age;
        count[dept] += 1;
    }
    for (let dept in result) {
        result[dept] = Math.round(result[dept] / count[dept])  // აქ result[dept / count[dept]]) მეწერა ესე და აბრუნებდა NAN-ს კინაღამ გავგიჟდი
    }
    return result
}

let people = [
    { name: "Ana", dept: "HR", age: 25 },
    { name: "Nika", dept: "IT", age: 30 },
    { name: "Luka", dept: "IT", age: 22 }
];

console.log(getWorkerAVrage(people))


*/



function countWords(comments) {
    let total = 0

    for (let i = 0; i < comments.length; i++) {
        let text = comments[i].comment.trim()
        if (text !== "") {
            let words = text.split(" ")
            let cleanWords = words.filter(word => word !== "")

            total += cleanWords.length
        }
    }
    return total
}
let data = [
    { id: 1, comment: "hello world" },
    { id: 2, comment: "this is ggreat!" },
    { id: 3, comment: "" }
]

console.log(countWords(data))

