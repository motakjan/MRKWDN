import { typedFetch } from '@/app/_utils/fetch';
import { ModeToggle } from '@/app/temp-components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { WeatherForecast } from '@/types/api';

export default async function Home() {
  const weatherData = await typedFetch<WeatherForecast>('weatherforecast');
  console.log(weatherData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello its me</Button>
      <ModeToggle />
    </main>
  );
}
