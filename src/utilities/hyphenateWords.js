function hyphenateWords(string) {
  return string.toLowerCase().replace(/[^a-zA-Z0-9- ]/g, '').replace(/\s/g, '-')
}

export { hyphenateWords }