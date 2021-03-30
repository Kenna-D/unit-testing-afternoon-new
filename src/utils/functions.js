export const shortenText = text => {
    if(text.trim().length >= 100 && text.lenth !== 100) {
      return `${text.substr(0, 100).trim()}...`;
    }
    return text;
  };
  