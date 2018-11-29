import S from "sanctuary"

export const parseIntE = (text) => {
  const trimmed = S.trim(text) 
  return S.maybeToEither (`${text} is not a valid integer`) (S.parseInt (10) (trimmed))
}  

/**
 * Separates and validates the numbers in the text by new line
 * @param {String} input gets and validates the numbers in the text into an array
 * @return {Either} if numbers are valid returns an array of integers
 */
export const splitNotes = (input) => {
  const numbers = S.pipe([
    S.splitOn(`\n`),
    S.map(S.trim),
    S.filter(a => a !== "")
  ])(input)
  return S.sequence(S.Either) (numbers.map(parseIntE))
}

export const average = (integers) => {
  const length = integers.length
  const sum = S.sum(integers)
  if(length === 0){
    return 0
  }
  return Math.round(sum/length)
}

export const getNotesIndex = S.pipe([
  splitNotes,
  S.map(list => ({list, average: average(list)}))
])

export const isNextIndex = base => S.pipe([
  S.splitOn(`\n`),
  a => a.length,
  S.gt(base)
])