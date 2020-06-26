import { fromUnixTime } from 'date-fns';

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
    // const weekDayNumber = fromUnixTime(c.dt).getDay();

    // console.tron.log(fromUnixTime(c.dt), dayIndex);

    f[dayIndex] = f[dayIndex] || {
      day_date: dayIndex,
      // day: getDayOfTheWeek(
      //   weekDayNumber,
      //   dayIndex,
      //   fromUnixTime(c.dt).toISOString(),
      // ),
      day: getDayOfTheWeek(
        new Date(fromUnixTime(c.dt).toISOString()).getDay(),
        fromUnixTime(c.dt).toISOString(),
      ),
      temp: 0,
      temp_min_day: c.main.temp_min,
      temp_max_day: c.main.temp_max,
      conditionCode: c.weather[0].id,
      forecast: [],
    };

    const weatherHourly = {
      fullDate: fromUnixTime(c.dt),
      dayIndice: dayIndex,
      // day: getDayOfTheWeek(fromUnixTime(c.dt).getDay()),
      temp: c.main.temp,
      temp_min: c.main.temp_min,
      temp_max: c.main.temp_max,
      conditionCode: c.weather[0].id,
    };

    if (c.main.temp_min < f[dayIndex].temp_min_day) {
      f[dayIndex].temp_min_day = c.main.temp_min;
    }

    if (c.main.temp_max < f[dayIndex].temp_max_day) {
      f[dayIndex].temp_max_day = c.main.temp_max;
    }

    const numOfTempsOfDay = f[dayIndex].forecast.length === 0 ? 1 : 2;

    f[dayIndex].forecast.push(weatherHourly);

    f[dayIndex].temp = (f[dayIndex].temp + c.main.temp) / numOfTempsOfDay;

    return f;
  }, {});

  // console.tron.log(forecastNextDays);

  // for (let i = 0; i <= Object.keys(forecastNextDays).length; i++) {
  //   console.tron.log(forecastNextDays[i]);
  // }
  return Object.values(forecastNextDays);
}

// formateForecast(forecast);

function getDayOfTheWeek(day, dia, s) {
  // console.tron.log(dia, 'dia');
  console.tron.log({ day, dia, s, w: weekdays[day] });
  return weekdays[day];
}

export default formateForecast;
