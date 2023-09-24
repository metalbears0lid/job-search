const nextElementInList = (list, value) => {
  const valIdx = list.indexOf(value)
  const nextIdx = (valIdx + 1) % list.length
  return list[nextIdx]
}

export default nextElementInList
