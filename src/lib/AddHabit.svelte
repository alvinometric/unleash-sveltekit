<script>
  import { habitStore } from '$lib/stores.js';

  let habitsFull = false;

  function addHabit(e) {
    let numHabits = $habitStore.length;

    if (numHabits === 3) {
      habitsFull = true;
      // open dialog
    } else {
      let form = e.target;
      const formData = new FormData(e.target);

      habitStore.update((items) => {
        items.push({ id: items.length + 1, name: formData.get('name'), completedDays: [] });
        return items;
      });

      // reset the form
      form.reset();
    }
  }
</script>

<dialog open={habitsFull}>
  <h2>❌ Maximum Habits Reached</h2>
  <p>You reached the maximum number of free habits. Purchase a premium version to unlock more.</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>

<form on:submit|preventDefault={addHabit}>
  <input type="text" name="name" />
  <button type="submit"> Add new habit </button>
</form>
