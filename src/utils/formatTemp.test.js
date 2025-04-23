// src/utils/formatTemp.test.js
import { formatTemperature } from './formatTemp';

test('formatTemperature arrondit correctement et ajoute "°C"', () => {
  expect(formatTemperature(18.6)).toBe('19 °C');
  expect(formatTemperature(20)).toBe('20 °C');
});
