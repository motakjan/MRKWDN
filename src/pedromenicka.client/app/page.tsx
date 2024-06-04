import { typedFetch } from '@/app/utils/fetch';
import { WeatherForecast } from '@/types/api';

export default async function Home() {
  const weatherData = await typedFetch<WeatherForecast>('weatherforecast');
  console.log(weatherData);

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">Jope</main>;
}
