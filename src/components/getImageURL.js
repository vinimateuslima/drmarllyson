function getImageURL(name) {
  return new URL(`../assets/card/${name}`, import.meta.url).href;
}

export { getImageURL };
