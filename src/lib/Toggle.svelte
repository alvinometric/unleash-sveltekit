<script>
  let theme = 'light';

  function onChange() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark', theme === 'dark');
  }
</script>

<div class="dark-toggle">
  <label for="dark-toggle">
    {#if theme === 'dark'}
      <!-- sun icon -->
      <svg viewBox="0 0 15 15" fill="none" width="15" height="15">
        <path
          d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z"
          stroke="currentColor"
          stroke-linecap="square"
        ></path>
      </svg>
    {:else}
      <!-- moon icon -->
      <svg viewBox="0 0 15 15" fill="none" width="15" height="15">
        <path
          d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z"
          stroke="currentColor"
          stroke-linejoin="round"
        ></path>
      </svg>
    {/if}
  </label>
  <input type="checkbox" id="dark-toggle" checked={theme === 'dark'} on:change={onChange} />
</div>

<style>
  svg {
    width: 15px;
    height: 15px;
  }
</style>
