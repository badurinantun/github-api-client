export interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    color: string;
    name: string;
  };
}
