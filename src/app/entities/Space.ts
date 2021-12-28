export class Space {
  id: number;
  name: string;
  description: string;
  color: string;
  createDateTime: Date;
  deleteDateTime: Date;


  constructor(id: number, name: string, description: string, color: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.color = color;
  }
}
