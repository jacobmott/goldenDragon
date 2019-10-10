export class HoardEntry {

  type: string;
  name: string;
  link: string;
  newwindow: boolean;
  chestId: number;
  image: string;

  constructor(type, name, link, newwindow, chestId, image) {
      this.type = type;
      this.name = name;
      this.link = link;
      this.newwindow = newwindow;
      this.chestId = chestId;
      this.image = image;
  }
  getType() {
      return this.type;
  }
  setType(type: string) {
      this.type = type;
  }
  getName() {
      return this.name;
  }
  setName(name: string) {
      this.name = name;
  }
  getLink() {
      return this.link;
  }
  setLink(link: string) {
      this.link = link;
  }
  getNewWindow() {
      return this.newwindow;
  }
  setNewWindow(newwindow: boolean) {
    this.newwindow = newwindow;
  }
  getChestId() {
    return this.chestId;
  }
  
  setChestId(chestId: number) {
    this.chestId = chestId;
  }

  getImage() {
    return this.image;
  }
  
  setImage(image: string) {
    this.image = image;
  }

  
}