<script>
  import { format, addDays } from 'date-fns';
  import Habit from '$lib/Habit.svelte';
  import { habitStore } from '$lib/stores.js';
  import AddHabit from '../lib/AddHabit.svelte';
  import { useFlag } from '@unleash/proxy-client-svelte';

  const maxHabitsIncreased = useFlag('maxHabitsIncreased');
  let maxHabits = $maxHabitsIncreased ? 6 : 2;

  // go back 5 days
  const dates = new Array(5).fill(0).map((_, i) => {
    let today = new Date();
    return addDays(today, -i);
  });
</script>

<AddHabit {maxHabits} />

<table>
  <thead>
    <tr>
      <th>Habit</th>
      {#each dates as date}
        <th>{format(date, 'MMM do')}</th>
      {/each}
    </tr>
  </thead>

  <tbody>
    {#each $habitStore as habit}
      <Habit {habit} {dates} />
    {/each}
  </tbody>
</table>
