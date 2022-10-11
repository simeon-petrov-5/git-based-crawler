export interface ConfigWebsite {
  url: string;
  type: string;
  key: string;
}

export interface ConfigEntry {
  model: string;
  websites: ConfigWebsite[];
}

export interface Config {
  [x: string]: ConfigEntry;
}
