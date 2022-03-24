export interface IConfigEnv {
  port?: number | string;
  secret_key: string | undefined;
  secret_key_refresh: string | undefined;
}
