import { Client } from './client.model'; // Assurez-vous que le chemin est correct

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });
});
