export interface IConfigEnv {
  port?: number | string;
  secret_key: string;
  secret_key_refresh: string;
  secret_action_key:string;
  expires_in_action: string;
  root_email:string;
  root_email_password:string;
  url: string;
  forgotUrl: string;
}
