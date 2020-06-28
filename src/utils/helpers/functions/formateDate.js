import { fromUnixTime } from 'date-fns';
import { roundDegrees } from '~/utils/helpers/functions/temperature';
const weekdays = [
  'sunday',
  'monday',
  'tuesday',
  'wed',
  'thursday',
  'friday',
  'saturday',
];

function formateForecast(arrayOfWeather) {
  const forecastNextDays = arrayOfWeather.list.reduce((f, c) => {
    const dayIndex = fromUnixTime(c.dt).toISOString().split('T', 1)[0];
    const dayOfTheWeek = getDayOfTheWeek(fromUnixTime(c.dt).getDay());

    c.main.temp = roundDegrees(c.main.temp);

    c.main.temp_min = roundDegrees(c.main.temp_min);
    c.main.temp_max = roundDegrees(c.main.temp_max);
    c.main.feels_like = roundDegrees(c.main.feels_like);

    f[dayOfTheWeek] = f[dayOfTheWeek] || {
      day_date: dayIndex,
      day: getDayOfTheWeek(fromUnixTime(c.dt).getDay()),
      temp: 0,
      temp_min_day: c.main.temp_min,
      temp_max_day: c.main.temp_max,
      feels_like: c.main.feels_like,
      description: c.weather[0].description,
      conditionCode: c.weather[0].id,
      forecast: [],
    };

    const weatherHourly = {
      fullDate: fromUnixTime(c.dt),
      dayIndice: dayIndex,
      day: getDayOfTheWeek(fromUnixTime(c.dt).getDay()),
      temp: c.main.temp,
      temp_min: c.main.temp_min,
      temp_max: c.main.temp_max,
      conditionCode: c.weather[0].id,
    };

    f[dayOfTheWeek].temp_min_day = updateMinTemperature(
      c.main.temp_min,
      f[dayOfTheWeek].temp_min_day,
    );

    f[dayOfTheWeek].temp_max_day = updateMaxTemperature(
      c.main.temp_max,
      f[dayOfTheWeek].temp_max_day,
    );

    const numOfTempsOfDay = f[dayOfTheWeek].forecast.length === 0 ? 1 : 2;

    f[dayOfTheWeek].forecast.push(weatherHourly);

    f[dayOfTheWeek].temp = roundDegrees(
      (f[dayOfTheWeek].temp + c.main.temp) / numOfTempsOfDay,
    );

    return f;
  }, {});

  return Object.values(forecastNextDays);
}

function getDayOfTheWeek(day) {
  return weekdays[day];
}

function isNewTemperatureHigher(newTemp, currentTemp) {
  return newTemp > currentTemp;
}

function isNewTemperatureLower(newTemp, currentTemp) {
  return newTemp < currentTemp;
}

function updateMinTemperature(newTemp, currentTemp) {
  return isNewTemperatureLower(newTemp, currentTemp) ? newTemp : currentTemp;
}

function updateMaxTemperature(newTemp, currentTemp) {
  return isNewTemperatureHigher(newTemp, currentTemp) ? newTemp : currentTemp;
}

export default formateForecast;
