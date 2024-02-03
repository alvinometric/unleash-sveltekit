<script>
  import App from '../lib/App.svelte';
  import { FlagProvider } from '@unleash/proxy-client-svelte';

  const config = {
    url: 'https://eu.app.unleash-hosted.com/eubb1038/api/frontend', // Your Front-end API, Unleash Edge or Unleash Proxy URL
    clientKey: '*:production.0df62cb5056c44b187786eacf0aa9ea25b4eccab51ab3ff2ca31c3ba', // Front-end API token (or proxy client key)
    appName: 'habits'
  };
</script>

<FlagProvider {config}>
  <App />
</FlagProvider>
