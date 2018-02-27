<template>
  <h1>Chat</h1>
</template>

<script>
import telegram from '@/telegram';

export default {

  name: 'Chat',

  data() {
    return {
    };
  },

  methods: {
    async login() {
      await telegram();
    },
  },
};
</script>

<style lang="css" scoped>
</style>