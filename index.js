const employee = {
    name: "Wendi", 
    streetAddress: "123 Sesame Street"}
function updateEmployeeWithKeyAndValue (obj, key, value) {
const newObj = {...obj};
newObj[key] = value;
console.log(newObj)
return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj
}

function deleteFromEmployeeByKey (obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value;
    // delete key
    return newObj
}

function destructivelyDeleteFromEmployeeByKey (obj, key) {
delete obj[key]
return obj
}
