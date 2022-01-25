type TUserType = 'registered' | 'unregistered';

interface IUser {
  badge_counts: {
    bronze: number;
    silver: number;
    gold: number;
  };
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: TUserType;
  user_id: number;
  accept_rate: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}

interface IUserDetailsResponse {
  items: IUser[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}