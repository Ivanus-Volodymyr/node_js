export interface IConfigEnv {
  port?: number | string;
  secret_key: string | undefined;
  secret_key_refresh: string | undefined;
  root_email?:string;
  root_email_password?:string;
}
