export type AuthParamList = {
  Login: undefined;
  Register: undefined;
};
export type BottomTabParamList = {
  Messages: undefined;
  Profile: undefined;
  Home: undefined;
};

export type TabOneParamList = {
  Home: undefined;
};

export type TabTwoParamList = {
  ChatList: undefined;
  ChatView: { chatId?: string | null; title: string };
  AddChat: undefined;
};
export type TabThreeParamList = {
  Profile: undefined;
};


export type User = {
  uid?: string;
  email?: string;
  fname?: string;
  lname?: string;
  gender?: string;
  dob?: string;
  chats?: Array<string | null>;
  friends?: Array<string | undefined>;
  photoUrl?: string;
  coverPhotoUrl?: string;
};

export type Chat = {
  id?: string | null;
  users?: Array<string | undefined>;
  messages: Array<Message>;
};
export type ChatUser = {
  _id: string;
  name: string;
  avatar: string;
};
export type Message = {
  _id: string;
  text: string;
  createdAt: Date;
  user: ChatUser;
};
