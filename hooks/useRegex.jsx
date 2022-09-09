const useRegex = (input) => {
  //regex for lat and lng
  const rule = new RegExp(/([-0-9]{2,3})*\.([0-9]{6})+/g);

  if (input.includes("yandex.com")) {
    //if input include yandex reverse array, because yandex link style is different than others
    return input.match(rule).slice(0, 2).reverse();
  } else if (input.match(rule)) {
    //if input matches regex then return array of lat and lng
    return input.match(rule).slice(0, 2);
  } else {
    return console.log("No match");
  }
};

export default useRegex;
