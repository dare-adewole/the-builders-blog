<template>
  <div class="app-caption">
		<div class="overlay">
			<h1>
				" Building the Leaders Of Tomorrow "
			</h1>
			<h2>
				We hope you'll find a home here
			</h2>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'caption',
	}
</script>

<style scoped lang="scss">
	div.app-caption {
/*		margin-top: -18px;*/
		z-index: 1000;
		height: 60vh;
		background-image: url('../assets/img/background.jpg');
		background-size: cover;
		border-top: 5px solid #DDD;
		border-bottom: 5px solid #DDD;
/*		box-shadow: 0px 7px 1em #BBB;*/
			
			.overlay {
				display: flex;
				width: 100%;
				height: 100%;
				background-color: rgba(0,0,0,0.2);
				flex-direction: column;
				align-items: center;
				justify-content: center;
				flex: 1;
			}
			h1, h2 {
					color: $white;
				font-weight: 700;
			}
		h1 {
			font-size: 40px;
			text-shadow: 0 0 .3em #333;
			margin: 0;
		}
		h2 {
			font-size: 28px;
		}
	}
</style>
