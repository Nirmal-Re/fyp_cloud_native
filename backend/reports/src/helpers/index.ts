
export const startAndEndOfDay = () => {
    return [new Date(new Date().setHours(0,0,0,0)), new Date(new Date().setHours(23,59,59,999))]; //[startofday, endofday]
}


export const areSetsEqual = (setA: Set<any>, setB: Set<any>): boolean => {
    if (setA.size !== setB.size) return false;
    for (let elem of setA) {
        if (!setB.has(elem)) return false;
    }
    return true;
}