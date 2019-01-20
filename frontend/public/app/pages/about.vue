<template>
	<div>
		<h1>About page!</h1>
		<marquee behavior="alternate" direction="right">
			<code>globalState.message:</code> {{ globalState.message }}
		</marquee>
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