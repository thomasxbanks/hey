import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    meaning: [
      'Friends',
      'Crush',
      'DTF',
      'Drunk',
      'Bordering on creepy',
      'Full creepy',
      'Serial killer'
    ]
	}
});

export default app;