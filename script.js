function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const elementClasses = ["first", "second", "third", "fourth"];

elementClasses.forEach(async (elementClass, index) => {
  const el = document.getElementById(elementClass);
  const delay = index * 3000;

  setTimeout(() => {
    el.style.display = "block";
  }, delay);
});
