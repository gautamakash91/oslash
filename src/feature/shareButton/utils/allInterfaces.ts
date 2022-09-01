import { AnyTxtRecord } from "dns";

export interface userProps {
  title: string;
  avatar: string;
}

export interface ShareProps {
  people: userProps[],
  groups: userProps[],
  access: string[]
}

export interface selectedUserProps {
  title: string;
  avatar: string;
  role: string;
}

export interface SharesListProps {
  selected: selectedUserProps[];
  access: string[];
  setSelected?: any;
}

export interface SharesOptionsProps {
  access: string[];
  value?: string;
  setAccessType?: any;
  type: string;
  changeAccess?: any;
}

export interface SelectionLayoutProps {
  selected: selectedUserProps[];
  setSelected: any;
  people: userProps[];
  groups: userProps[];
  access: string[];
  setShowSelection: any;
}

export interface SearchComponentProps {
  handleKeyDown: any;
  keyword: string;
  setkeyword: any;
  selected: selectedUserProps[];
  access: string[];
  tempSelected: userProps[];
  setSelected: any;
  setShowSelection: any;
  setTempSelected: any;
}

export interface RowItemProps {
  index: number;
  cursor: number;
  item: userProps;
  type: string;
  setTempSelected: any;
  setCursor: any;
  setkeyword: any;
  tempSelected: userProps[];
}

export interface LearnAboutProps{
  link: string;
}

export interface ShareToWebProps{
  share?: boolean;
  disabled:  boolean;
}