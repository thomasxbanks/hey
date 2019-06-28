<script>
  export let meaning;
  import Plus from "./components/icons/plus.svelte";
  import Minus from "./components/icons/minus.svelte";

  let count = "y";

  const increment = () => {
    count += "y";
  };

  const decrement = () => {
    count = count.slice(0, -1);
  };
</script>

<style>
  main {
    width: 100%;
    min-height: 100vh;
  }
  #svelte {
    font-size: 4rem;
    max-width: calc(12ch + 4rem);
    margin: 0 auto;
  }
  h1 {
    display: inline-block;
    color: orangered;
    margin: 0;
    padding: 2rem;
    font-size: 4rem;
    line-height: 1em;
  }
  @supports (background-clip: text) {
    h1 {
      background: radial-gradient(
        at top right,
        rebeccapurple,
        deeppink,
        orangered
      );
      color: transparent;
      background-clip: text;
    }
  }
  p {
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  .button_group {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .button_group div {
    width: 50%;
  }
  @keyframes click {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0.9);
    }
  }
  button {
    -webkit-appearance: none;
    width: calc(100% - 1rem);
    height: 4rem;
    border-radius: 1rem;
    border: none;
    background: deeppink;
    color: white;
    font-size: 1rem;
    display: inline-flex;
    place-content: center;
    transition: ease 300ms;
  }
  button:hover {
    background: orangered;
  }
  button:active {
    background: rebeccapurple;
    color: white;
  }
  @media screen and (prefers-reduced-motion: no-preference) {
    button:active {
      animation: click 1 300ms alternate cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
  @media screen and (prefers-color-scheme: dark) {
    main,
    #svelte {
      background: black;
    }
    p {
      color: silver;
    }
  }
</style>

<main>
  <div id="svelte">
    <h1>He{count}!</h1>

    <p>
      {#if count.length < meaning.length + 1}
        <span>{meaning[count.length - 1]}</span>
      {:else}
        <span>Run!!!</span>
      {/if}
    </p>

    <div class="button_group">
      <div>
        {#if count.length > 1}
          <button on:click={decrement}>
            <Minus />
          </button>
        {/if}
      </div>
      <div>
        {#if count.length <= meaning.length + 1}
          <button on:click={increment}>
            <Plus />
          </button>
        {/if}
      </div>
    </div>
  </div>
</main>
