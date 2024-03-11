function get(obj, pathParam, defaultValue){
    if(obj === null || !obj) return defaultValue

    const path = Array.isArray(pathParam) ? pathParam : pathParam.replace(/\[(\w+)\]/g, '.$1').split('.')
    const pathLength = path.length

    let count = 0
    while(obj !== null && obj !== undefined && count < pathLength){
        obj = obj[String(path[count])]
        count += 1
    }

    const result = (count && count === pathLength) ? obj : undefined

    return result === undefined ? defaultValue : result
}

const object = { a: [{ b: { c: 3 } }] };

//=> 3
console.log(get(object, "a[0].b.c"));

// //=> 'default'
console.log(get(object, "a[100].b.c", "default"));