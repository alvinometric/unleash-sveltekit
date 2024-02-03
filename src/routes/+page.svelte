<script>
  import { format, addDays } from 'date-fns';
  import Habit from '$lib/Habit.svelte';
  import { habitStore } from '$lib/stores.js';
  import AddHabit from '../lib/AddHabit.svelte';

  const dates = new Array(5).fill(0).map((_, i) => {
    let today = new Date();
    return addDays(today, -i);
  });
</script>

<AddHabit />

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
