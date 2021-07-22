/*
Mixed messages produces a message with random content from three arrays.
The message has the following structure:
`Did you know that [A subject] [some achievement or possession] [timespan]?`
*/

const subjectArr = ['Trump', 'your mother', 'my guinea pig', 'your grandpa', 'your car', 'the Pope', 'his sister', 'the rabbit']
const posessionArr = ['has petted the most guinea pigs', 'has held the best speech', 'drifted the longest distance', 'won the most races']
const timespanArr = ['in human history', 'of all times', 'today', 'presently']

const components = [subjectArr, posessionArr, timespanArr]

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]

const generateMixedMessage = (arr) => {
  console.log('Did you know that', arr.map(getRandomItem).join(' '))
}

generateMixedMessage(components)
