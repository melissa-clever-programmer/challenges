// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// y=∣F−2S∣ =====> years = absolute value of father - son*2

// father = 60 son = 30 return 0 because years ago is now
// father = 61 son = 31 return 1 year ago 

// is father == double to son? = 0
// if father != double to son? = years since or till twice

fun twiceAsOld(f:Int, s:Int) {
    return abs(f - 2 * s)
}

println(twiceAsOld(40, 20))