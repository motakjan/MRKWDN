import { typedFetch } from '@/app/_utils/fetch';
import { Button } from '@/components/ui/button';
import { WeatherForecast } from '@/types/api';

export default async function Home() {
  await typedFetch<WeatherForecast>('weatherforecast');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Hello its me</Button>
    </main>
  );
}
