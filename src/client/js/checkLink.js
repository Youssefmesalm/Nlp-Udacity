const checklink = (string) => {
  let url;

  url = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  if (url == null) {
    return false;
  } else return true;
};

export { checklink };
