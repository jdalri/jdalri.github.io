import { Space } from "./Space";
import { Topic } from "./Topic";
import { Knowledge } from "./Knowledge";

export class Database {
  spacesList: Space[] = [
    new Space(1, 'Space 1', 'Description for Space 1', null),
    new Space(2, 'Space 2', 'Description for Space 2', null),
    new Space(3, 'jose', 'Description for Space 3', null)
  ];

  topicsList: Topic[] = [
    new Topic(1, 'Topic 1', 'Desc 1', 1),
    new Topic(2, 'Topic 2', 'Desc 2', 1),
  ];

  knowledgeList: Knowledge[] = [
    new Knowledge(1, 'Know 1', 'Short 1', 'Content 1', 1)
  ];

  constructor() {}
}
