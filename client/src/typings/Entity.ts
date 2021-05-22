export interface TopicListSiderBarInfo {
  id: number;
  title: string;
  pathname: string;
  createdAt: string;
  counter: number;
}
export interface PostingBoardInfo {
  id: number;
  title: string;
  description: string;
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

export interface ReducePostingBoard extends PostingBoardInfo {
  subTitle: Pick<SubTopicEntity, "title">;
  Maintitle: Pick<TopicEntity, "title">;
}
