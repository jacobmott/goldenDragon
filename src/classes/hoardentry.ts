export class HoardEntry {

  type: string;
  name: string;
  link: string;
  newwindow: boolean;
  chestId: number;

  constructor(type, name, link, newwindow, chestId) {
      this.type = type;
      this.name = name;
      this.link = link;
      this.newwindow = newwindow;
      this.chestId = chestId;
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
}