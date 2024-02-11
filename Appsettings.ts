import * as fs from 'fs';

export class Appsettings {
  baseUrl: string;
  login: string;
  password: string;

  constructor(baseUrl: string, login: string, password: string) {
    this.baseUrl = baseUrl;
    this.login = login;
    this.password = password;
  }

  static loadFromFile(filePath: string): Appsettings {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const jsonContent = JSON.parse(fileContents);

      const appSettings = new Appsettings(
        jsonContent.baseUrl,
        jsonContent.login,
        jsonContent.password
      );

      return appSettings;
    } catch (error) {
      console.error('Error loading appsettings from file:', error);
      const appSettings = new Appsettings(
        'Loading appsettings from file failed.',
        'Loading appsettings from file failed.',
        'Loading appsettings from file failed.'
      );

      return appSettings;
    }
  }
}
