<template>
  <div class="home">
  	<h3>Input v-model support not working if exist vue.config.js</h3>
  	<div>
    	<input type="text" v-model="username" />
  	</div>
  	<div>
  		{{ username }}
  	</div>
  </div>
</template>

<script>
export default {
  name: "input_page",
  data() {
    return {
      username: "mylmz"
    };
  }
};
</script>
