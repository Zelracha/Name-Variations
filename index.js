function NumberofChars(name) {
    return name.length
}

/** @param {string} name */
 function getUpper(name) {
    return name.toUpperCase()
}

/** @param {string} name */
 function getLowCase(name) {
    return name.toLowerCase()
}

function reverseString(name) {
    return name.split('').reverse('').join('')
}

let answer1 = document.querySelector("#answer1")
let answer2 = document.querySelector("#answer2")
let answer3 = document.querySelector("#answer3")
let answer4 = document.querySelector("#answer4")

let name = document.querySelector("#your-name");

name.addEventListener("keyup", () => {
    answer1.textContent = NumberofChars(name.value)
    answer2.textContent = getUpper(name.value)
    answer3.textContent = getLowCase(name.value)
    answer4.textContent = reverseString(name.value)
});