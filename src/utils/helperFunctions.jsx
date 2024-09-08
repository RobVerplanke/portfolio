// Shorten a string after a given amount of characters and end with dots to indicate there is more content
export default function truncateString(string, maxLength) {
  //Check if shortening the string is necessary, if not just return the string
  if (string.length <= maxLength) return string;

  // Cut off the string from first to last character
  let truncatedString =
    string.length < maxLength ? string : string.slice(0, maxLength);

  // Select the last character
  let lastChar = truncatedString.slice(maxLength - 1, maxLength);

  // Cut off the sentence if the last character is a space, dot or comma,
  // else subtract the last character from sentence and check again
  while (lastChar != ' ' && lastChar != '.' && lastChar != ',') {
    truncatedString = truncatedString.slice(0, truncatedString.length - 1);
    lastChar = truncatedString.slice(
      truncatedString.length - 1,
      truncatedString.length
    );
  }

  // Substract the last space, dot or comma from the sentence and add a 'Read more' link
  return <>{truncatedString.slice(0, truncatedString.length - 1) + '...'}</>;
}
