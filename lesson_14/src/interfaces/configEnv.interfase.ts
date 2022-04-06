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
  bucket_name: string | undefined;
  region: string | undefined;
  access_key_bucket: string | undefined;
  secret_access_key_bucket: string | undefined;
}
