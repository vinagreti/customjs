export interface FilesMap {
  [prop: string]: boolean;
}

export interface CustomjsLoadedFilesMap {
  js: FilesMap;
  style: FilesMap;
}
