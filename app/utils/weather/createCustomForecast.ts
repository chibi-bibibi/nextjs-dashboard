import { Forecast } from '@/app/interface/weather/forecast';

export function createCustomForecast(data: any): Forecast {
  const Data = data.forecasts;
  const today_min = Data[0].temperature.min.celsius
    ? Data[0].temperature.min.celsius
    : '--';
  const today_max = Data[0].temperature.max.celsius
    ? Data[0].temperature.max.celsius
    : '--';
  const tomorrow_min = Data[1].temperature.min.celsius
    ? Data[1].temperature.min.celsius
    : '--';
  const tomorrow_max = Data[1].temperature.max.celsius
    ? Data[1].temperature.max.celsius
    : '--';
  const future_min = Data[2].temperature.min.celsius
    ? Data[2].temperature.min.celsius
    : '--';
  const future_max = Data[2].temperature.max.celsius
    ? Data[2].temperature.max.celsius
    : '--';
  const customForecast = {
    description: {
      bodyText: data.description.bodyText,
    },
    today: {
      date: Data[0].date,
      telop: Data[0].telop,
      detail: {
        weather: Data[0].detail.weather,
        wind: Data[0].detail.wind,
        wave: Data[0].detail.wave,
      },
      temperature: {
        min: {
          celsius: today_min + ' ℃',
        },
        max: {
          celsius: today_max + ' ℃',
        },
      },
      chanceOfRain: {
        T00_06: Data[0].chanceOfRain.T00_06,
        T06_12: Data[0].chanceOfRain.T06_12,
        T12_18: Data[0].chanceOfRain.T12_18,
        T18_24: Data[0].chanceOfRain.T18_24,
      },
      image: {
        title: Data[0].image.title,
        url: Data[0].image.url,
        width: Data[0].image.width + 20,
        height: Data[0].image.height + 20,
      },
    },
    tomorrow: {
      date: Data[1].date,
      telop: Data[1].telop,
      detail: {
        weather: Data[1].detail.weather,
        wind: Data[1].detail.wind,
        wave: Data[1].detail.wave,
      },
      temperature: {
        min: {
          celsius: tomorrow_min + ' ℃',
        },
        max: {
          celsius: tomorrow_max + ' ℃',
        },
      },
      chanceOfRain: {
        T00_06: Data[1].chanceOfRain.T00_06,
        T06_12: Data[1].chanceOfRain.T06_12,
        T12_18: Data[1].chanceOfRain.T12_18,
        T18_24: Data[1].chanceOfRain.T18_24,
      },
      image: {
        title: Data[1].image.title,
        url: Data[1].image.url,
        width: Data[1].image.width + 20,
        height: Data[1].image.height + 20,
      },
    },
    future: {
      date: Data[2].date,
      telop: Data[2].telop,
      detail: {
        weather: Data[2].detail.weather,
        wind: Data[2].detail.wind,
        wave: Data[2].detail.wave,
      },
      temperature: {
        min: {
          celsius: future_min + ' ℃',
        },
        max: {
          celsius: future_max + ' ℃',
        },
      },
      chanceOfRain: {
        T00_06: Data[2].chanceOfRain.T00_06,
        T06_12: Data[2].chanceOfRain.T06_12,
        T12_18: Data[2].chanceOfRain.T12_18,
        T18_24: Data[2].chanceOfRain.T18_24,
      },
      image: {
        title: Data[2].image.title,
        url: Data[2].image.url,
        width: Data[2].image.width + 20,
        height: Data[2].image.height + 20,
      },
    },
  };
  return customForecast;
}
