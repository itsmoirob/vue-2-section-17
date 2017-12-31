<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 6, dur: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 6, dur: 500 })">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"]) 
  }
};
</script>