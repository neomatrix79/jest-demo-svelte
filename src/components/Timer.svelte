<script lang="ts">
  import { onMount } from "svelte";

  export let propsString: string;

  let timerString: string;

  onMount(() => {
    const timerId = setInterval(() => {
      timerString = new Date().toLocaleTimeString();
    }, 1000);

    return () => clearInterval(timerId);
  });
</script>

<div class="timer">
  {timerString}
  <p>{propsString}</p>
</div>
<button>ok</button>
<button data-testid="cancel">cancel</button>
<p>paragraph</p>

<style>
  .timer {
    font-size: 3.5rem;
    font-weight: 700;
    color: indigo;
    text-align: center;
    margin-top: 5rem;
  }
</style>
