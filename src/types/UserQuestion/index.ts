interface IQuestionOwner {
  account_id: number;
  reputation: number;
  user_id: number;
  user_type: TUserType;
  accept_rate: number;
  profile_image: string;
  display_name: string;
  link: string;
}

interface IUserQuestion {
  tags: string[];
  owner: IQuestionOwner;
  is_answered: boolean;
  view_count: number;
  accepted_answer_id: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  last_edit_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
}

interface IUserQuestionResponse {
  items: IUserQuestion[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
