
export interface AppEnvironment {
  name: string;
  debug?: boolean;
  production?: boolean;
  [key: string]: any;
}
