/* 
Mixed messages produces a message with random content from three arrays.
The message has the following structure:
`Did you know that [A subject] [some achievement or possession] [timespan]?`*/

let subject = ['Trump', 'your mother', 'my guinea pig', 'your grandpa', 'your car', 'the Pope', 'his sister', 'the rabbit']
let posessionOrAchievement =  ['has petted the most guinea pigs', 'has held the best speech', 'drifted the longest distance', 'won the most races']
let timespan = ['in human history', 'of all times', 'today', 'presently']

let components = [subject, posessionOrAchievement, timespan]

const getRandomItem = (arr) => {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index]
}

const generateMixedMessage = (arr) => {
    let [subject, posession, timespan] = arr.map(el => getRandomItem(el))
    
    console.log(`Did you know that`, [subject, posession, timespan].join(" "));
}

generateMixedMessage(components)
