<template>
	<div class="app-aim row animated bounceInDown">
<!--
		<h3>
			<icon name="image-filter-center-focus" color="#0b7ee5"></icon> Our Aims &amp; Objectives
		</h3>
-->
		<div class="row">
			<div class="small-12 medium-6 large-3 column center-text aim-box"
				 v-for="aim in aims"
				 :key = "aim.label">
				 <div class="aim">
				 	<div class="icon-box">
					 	<icon :name="aim.icon" :size="75" color="#fbbd08"></icon>
					 </div>
					 <h3>{{ aim.label }}</h3>
					<div class="aims-description" v-text="aim.description"></div>
				 </div>
			</div>
		</div>
	</div>
</template>
<script>
	import Icon from './Icon'
	export default {
		name: 'aim',
		data () {
			return {
				aims: [
					{
						label: 'Counselling & Mentoring',
						icon: 'shape',
						description: 'We are consumed with the desire to counsel and mentor you in EVERY ASPECT of your life especially in your career and academics'
					},
					{
						label: 'Outreaches to Orphanages',
						icon: 'heart',
						description: 'We find time to show love in our own way by visiting orphanage homes around making them know how much we care about them'
					},
					{
						label: 'Skill Acquisition',
						icon: 'certificate',
						description: 'We present opportunities to become a better you by organizing free skill acquisition programmes, seminars and empowerment programmes'
					},
					{
						label: 'Self Development',
						icon: 'chart-line',
						description: 'We are of the belief that every one is talented and so we create avenues for you to display and develop your talents'
					},
				]
			}
		},
		components: { Icon }
	}
</script>
<style lang="scss" scoped>
	div.app-aim {
		background-color: 'transparent';
		padding: 1.5em;
		min-width: 100%;
		font-family: $base-font-family;
		font-weight: 300;
		text-align: center;
/*		margin: 1.5em 0 0;*/
		h3 {
			color: $blue;
		}	
		div.aim-box {
			margin: 0;
			padding: 0;
			border-radius: .5em;
/*			transform: rotate(-3deg);*/
			div.aim {
/*				background-color: #FAFAFA;*/
/*				background-color: $yellow;*/
				min-height: 25em;
				padding: 2em 1em 1em;
				margin-left: 1em;
/*				border-radius: 20px;*/
/*				box-shadow: 0 2px 50px -4px rgba(0,0,0,.02);*/
				:last-child {
					margin-right: 0;
				}
				div.icon-box {
					padding: 0;
					padding-top: 0.2em;
					text-shadow: 0 0 1em #eee;
					text-align: center;
				}
				h3 {
/*					background-color: #f4f4f4;*/
					padding: .2em;
					font-size: 15.5px;
					font-weight: 700;
					text-align: center;
					text-transform: uppercase;
					width: 100%;
					margin-left: 0;
					color: $yellow+2;
					margin-right: 0;
				}
				div.aims-description {
					color: #555;
					font-size: 14px;
				}
			}
		}
	}
</style>
