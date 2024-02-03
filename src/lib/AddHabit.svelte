<script>
  import { habitStore } from '$lib/stores.js';

  function addHabit(e) {
    let numHabits = $habitStore.length;

    if (numHabits > 3) {
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

<form on:submit|preventDefault={addHabit}>
  <input type="text" name="name" />
  <button type="submit"> Add new habit </button>
</form>
