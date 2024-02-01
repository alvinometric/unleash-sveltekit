<script>
  import { format, addDays } from 'date-fns';
  import Habit from '$lib/Habit.svelte';
  import { habitStore } from '$lib/stores.js';

  let habits = [];

  habitStore.subscribe((allHabits) => {
    habits = allHabits;
    console.log(habits);
  });

  function getPreviousDates(numDays) {
    let dates = [];
    let today = new Date();

    for (let i = 0; i < numDays; i++) {
      dates.push(addDays(today, -i));
    }

    return dates;
  }

  const dates = getPreviousDates(5);
</script>

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
    {#each habits as habit}
      <Habit {habit} {dates} />
    {/each}
  </tbody>
</table>
