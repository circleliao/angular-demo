export class ServiceCard {
  title: string
  icon:string
  describe:string
  link:string

  constructor(title: string, icon: string, describe: string,link:string) {
    this.title = title;
    this.icon = icon;
    this.describe = describe;
    this.link=link;
  }
}

