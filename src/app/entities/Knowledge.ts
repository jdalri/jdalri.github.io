export class Knowledge {
  id: number;
  title: string;
  shortTitle: string;
  content: string;
  createDateTime: Date;
  deleteDateTime: Date;
  isCollapsed: boolean = true;
  topicId: number;


  constructor(id: number, title: string, shortTitle: string, content: string, topicId: number) {
    this.id = id;
    this.title = title;
    this.shortTitle = shortTitle;
    this.content = content;
    this.topicId = topicId;
  }
}
