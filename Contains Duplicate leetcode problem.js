//const nums = [1,2,3,1]
//const nums = [1,2,3,4]
const nums = [1,1,1,3,3,4,3,2,4,2]

const nums_set = new Set(nums);
let value = false
let duplicates_number = nums.length - nums_set.size
if (nums.length !== nums_set.size) {
    value = true
 }
 else {
    console.log("There are no duplicates. ")
 }
 
 if (value === true && duplicates_number === 1) {
    console.log("There is 1 duplicate number. ")
    
 }
 if (value === true && duplicates_number > 1) {
   console.log("There are" , duplicates_number , "duplicates numbers. ")
 }
 


