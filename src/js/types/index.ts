export interface Story {
  contentLink: string;
  createdOn: Date;
  description: string;
  id: string;
  identities: Identities;
  location: string;
  name: string;
  title: string;
}

export interface Identity {
  createdOn: Date;
  id: string;
  name: string;
}

export type Stories = Story[];
export type Identities = Identity[]
