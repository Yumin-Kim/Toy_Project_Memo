export interface TopicListSiderBarInfo {
  id: number;
  title: string;
  pathname: string;
  createdAt: string;
  count: number;
}
export interface PostingBoardInfo {
  title: string;
  deescription: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

export interface TopicEntity extends SubTopicEntity {
  pathname: string;
}

export interface SubTopicEntity {
  id: number;
  title: string;
  createdAt: string;
}

export interface ReturnPostingBoard extends PostingBoardInfo {
  M_SubTopics: [] | SubTopicEntity[];
  M_Topics: TopicEntity[];
}
