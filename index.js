function myEach(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    for (const element of newCollection) { callback(element); } 
    return collection;
}

function myMap(collection, callback) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    const updatedCollection = [];
    for (const element of newCollection) { updatedCollection.push(callback(element)); } 
    return updatedCollection;  
}


function myReduce(collection, callback, acc) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined ) {
        acc = newCollection[0];
        for (const element of newCollection.slice(1)) { 
        acc = callback(acc, element, newCollection.slice(1)) } }
        else { 
            for (const element of newCollection) { 
            acc = callback(acc, element, newCollection) } }
    return acc;
} 

function myFind(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let i = 0;
    let result = undefined;
    while (i < newCollection.length) {
        if (predicate(newCollection[i]) === true) {
            break; } 
        i += 1; }
    result = newCollection[i];
    return result
}

function myFilter(collection, predicate) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (const element of newCollection) {
        if (predicate(element) === true) {
            result.push(element);
        }
    } return result;
}

function mySize(collection) {
    const newCollection = Array.isArray(collection) ? collection : Object.values(collection);
    let count = 0;
    for (const element of newCollection) {
        count += 1;
    }
    return count;
}

function myFirst(array, n) {
    if (n !== undefined) {
                return array.slice(0, n);
            } else { return array[0] }
    }

function myLast(array, n) {
    if (n !== undefined) {
                return array.slice(-n, array.length);
            } else { return array[array.length-1] }
    }

    function myKeys(object) {
        const array = [];
        for (const key in object) {
            array.push(key);
        }
        return array;
    }

    function myValues(object) {
        const array = [];
        for (const value in object) {
            array.push(object[value]);
        }
        return array;
    }