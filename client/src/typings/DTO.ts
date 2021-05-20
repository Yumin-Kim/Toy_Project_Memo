export interface DTOPostingWrite {
  topicId?: number;
  subTopicId?: number;
  title: string;
  description: string;
  createdAt: Date;
}

export interface DTOSubCategoryWrite {
  topicId: number;
  title: string;
}

export interface DTOCategoryWrite {
  title: string;
  pathname: string;
}

export interface DTOTodoWrite {
  description: string;
  created: string;
}
