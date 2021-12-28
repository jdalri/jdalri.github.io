export class Topic {
  id: number;
  name: string;
  description: string;
  createDateTime: Date;
  deleteDateTime: Date;
  spaceId: number;
  isCollapsed: boolean = true;


  constructor(id: number, name: string, description: string, spaceId: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.spaceId = spaceId;
  }
}
