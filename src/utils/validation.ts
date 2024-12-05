/**
 * Validates if a given string is a valid URL
 *
 * @param urlString The string to be validated as a URL
 *
 * @returns Returns true if the string is a valid URL, otherwise false
 */
export const isValidUrl = (urlString: string): boolean => {
  try {
    new URL(urlString)
    return true
  } catch {
    return false
  }
}
