import { ModeToggle } from '@/app/_temp-components/ThemeToggle';
import { typedFetch } from '@/app/_utils/fetch';
import { Button } from '@/components/ui/button';
import { WeatherForecast } from '@/types/api';

export default async function Home() {
  const _weatherData = await typedFetch<WeatherForecast>('weatherforecast');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello its me</Button>
      <ModeToggle />
    </main>
  );
}
