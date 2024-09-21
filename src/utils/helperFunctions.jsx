import { MAX_DESCRIPTION_CHARS } from '../lib/constants.js';

// Shorten a string after a given amount of characters and end with dots to indicate there is more content
export default function truncateString(project) {
  // Select description form project object
  const string = project[0].props.children;

  //Check if shortening the string is necessary, if not just return the string
  if (string.length <= MAX_DESCRIPTION_CHARS) return string;

  // Cut off the string from first to last character
  let truncatedString =
    string.length < MAX_DESCRIPTION_CHARS
      ? string
      : string.slice(0, MAX_DESCRIPTION_CHARS);

  // Select the last character
  let lastChar = truncatedString.slice(
    MAX_DESCRIPTION_CHARS - 1,
    MAX_DESCRIPTION_CHARS
  );

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
  return <>{truncatedString.slice(0, truncatedString.length - 1) + `...  `}</>;
}

export const formatProjectDescription = (description) => {
  // Split the description based on specific characters so they can be styled
  const formattedDescription = description.split('\n').map((line, index) => {
    if (line.startsWith('## ')) {
      return <h4 key={index}>{line.substring(3)}</h4>;
    } else if (line.startsWith('- ')) {
      return <li key={index}>{line.substring(2)}</li>;
    } else {
      return <p key={index}>{line}</p>;
    }
  });
  return formattedDescription;
};
