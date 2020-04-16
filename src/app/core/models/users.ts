export interface IUserList {
    id: number;
    name: string;
    shortInfo: string;
    more: string;
  }
  
  export interface IUsers {
    basepath: string;
    data: IUserList[];
  }

  export interface IUserProfile {
    bio: string;
    id: number;
    pic: string;
  }