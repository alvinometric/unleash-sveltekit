import { writable } from 'svelte/store';

export const habitStore = writable([
  {
    id: 1,
    name: 'Walk 10k steps',
    completedDays: []
  }
]);
