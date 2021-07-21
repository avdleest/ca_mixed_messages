/* 
Mixed messages produces a message with random content from three arrays.
The message has the following structure:
`Did you know that [A person or animal] has [some achievement or possession] [timespan]?`*/

let subject = ['Trump', 'your mother', 'my guinea pig', 'your grandpa', 'your car', 'the Pope', 'his sister']
let posessionOrAchievement =  ['has the largest balls', 'has petted the most guinea pigs', 'has held the best speech', 'drifted the longest distance', 'won the most races']
let timespan = ['in human history', 'of all times', 'today', 'presently']

const generateArrayNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

