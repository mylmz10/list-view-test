<template>
  <div class="about">
    <ListView for="(item, index) in items">
        <v-template if="$even">
          <div style="background: #333; padding: 10px; margin-bottom: 10px;">
            <div>{{ item }}</div>
          </div>
        </v-template>

        <v-template>
          <div style="background: #c0ffee; padding: 10px; margin-bottom: 10px;">
            <div>{{ item }}</div>
          </div>
        </v-template>
      </ListView>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: ["foo", "bar", "baz", "fizz", "fuzz"]
    };
  }
};
</script>
