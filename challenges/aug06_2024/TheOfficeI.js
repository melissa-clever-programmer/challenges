// https://www.codewars.com/kata/the-office-i-outed

// Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

// In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

// Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

// Happiness rating will be total score / number of people in the room.

// Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).

function outed(meet, boss) {
    // console.log('meet', meet, 'boss', boss)
    let avg = 0
    let sum = 0
    let len = 0
    console.log(meet[boss])
    meet[boss] = meet[boss]*2
    for(let i in meet) {
        sum += meet[i]
        len = len+1
    }
    console.log(len)
    avg = sum/len
    if(avg <= 5) {
        console.log('Get Out Now!')
    } else {
        console.log('Nice Work Champ!')
    }
}


outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura')
outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie')
outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john')