<script>
  import { habitStore } from '$lib/stores.js';
  import { format, addDays } from 'date-fns';

  export let habit;
  export let dates;

  function toggleDay(day) {
    let updatedDays = [...habit.completedDays];

    const index = updatedDays.indexOf(day);
    if (index !== -1) {
      updatedDays.splice(index, 1);
    } else {
      updatedDays.push(day);
    }

    habitStore.update((items) => {
      return items.map((item) => {
        if (item.id === habit.id) {
          return { ...item, completedDays: updatedDays };
        }
        return item;
      });
    });
  }

  //   onDestroy(unsubscribe);
</script>

<tr>
  <td>{habit.name}</td>

  {#each dates as date}
    <td>
      <input
        type="checkbox"
        on:click={() => toggleDay(date)}
        checked={habit.completedDays.includes(date)}
      />
      {format(date, 'MMM do')}
    </td>
  {/each}
</tr>
