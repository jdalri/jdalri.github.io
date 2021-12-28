import { Injectable } from '@angular/core';
import { Database } from "../entities/Database";
import { Space } from "../entities/Space";
import { Topic } from "../entities/Topic";
import { Knowledge } from "../entities/Knowledge";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private database = new Database();

  constructor() {}

  // SPACES
  getAllSpaces(): Space[] {
    return this.database.spacesList;
  }

  getAllSpacesWithCriteria(searchCriteria: string): Space[] {
    return this.database
      .spacesList
      .filter( (space: Space) => space.name.toLowerCase().indexOf(searchCriteria) > -1 );
  }

  // TOPICS
  getAllTopicsFromSpace(spaceId: number): Topic[] {
    return this.database.topicsList.filter( (topic: Topic) => topic.spaceId === spaceId );
  }

  getAllTopicsWithCriteria(spaceId: number, searchCriteria: string): Topic[] {
    return this.database
      .topicsList
      .filter( (topic: Topic) => (topic.spaceId === spaceId && topic.name.toLowerCase().indexOf(searchCriteria)) > -1 );
  }

  // KNOWLEDGES
  getAllKnowledgeFromTopic(topicId: number): Knowledge[] {
    return this.database.knowledgeList.filter( (knowledge: Knowledge) => knowledge.topicId === topicId );
  }

  getDatabaseData() {
    return this.database;
  }
}
