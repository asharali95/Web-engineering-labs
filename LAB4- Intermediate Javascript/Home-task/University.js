class University {
  constructor(name, image = "") {
    this.name = name;
    this.image = image;
  }

  setImage = (image) => {
    this.image = image;
  };
}

export { University };
