splice method in array

localStorage - approx 5mb
privided by browser depends on browser domain
localStorage.clear() - clear localstorage 
localStorage.setItem('key','value') // can overwrite set newitem
localStorage.getItem('key') // to get any item
localStorage.removeItem('name') - remove the existing item
json.stringfy - array/object - string
json.parse - array/object

setting of an object in localStorage
var arr = [1,2,3,4,5] // save as string
localStorage.setItem(arr)

var obj = {
  user:"Arun",
  age:20
}
var newObj = json.stringfy(obj)

localStotage.setItem('obj,newObj')

const realObj = json.parse(newObj)


cookies - 
1. access token jldi chla jata h
2. refresh token - store for a long time

sessionStorage.setItem('name','arun')  jb tk tab open ho


