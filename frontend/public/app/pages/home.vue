<template>
	<div>
		<h1>Wow you did it</h1>
		<blockquote><code>globalState.message:</code> {{ globalState.message }}</blockquote>
	</div>
</template>

<script>
	module.exports = {
		data() {
			return {
				globalState: window.GlobalState.state
			};
		}
	};
</script>