export interface ConfigWebsite {
  url: string;
  type: string;
  key: string;
}

export interface ConfigEntry {
  model: string;
  website: ConfigWebsite[];
}
