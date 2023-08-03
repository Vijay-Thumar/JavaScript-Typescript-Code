const hola = (str: string) => {
    const splitS = str.trim().split(' ')

    const CArray = splitS.map((string) => {
        //  to clear all the space trim 
        //  take the first character charAt(0) position
        //  Make that to uppercase
        //  get the rest of the string by using slice it return the string after specific position  

        return string.trim().charAt(0).toUpperCase() + string.slice(1)
    })

    // array of split and cap first latter array
    console.log('Array of the split and cap string', CArray)

    // To join array of all strings
    const fullString: string = CArray.join('')

    // return false if string is longer then 140 character
    if (fullString.length >= 140) {
        return false
    }
    // return string with # tag if the string has some length
    else if (fullString.length > 0) {
        console.log('#'.concat(fullString))
        return '#'.concat(fullString)
        // return false if the string is empty with 0 character
    } else {
        console.log('False')
        return false
    }
}

hola("   ")