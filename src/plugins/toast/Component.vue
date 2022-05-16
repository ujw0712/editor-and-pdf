<template>
	<div v-if="msg" class="tost-msg">{{msg}}</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: null,
			}
		},
		methods: {
			show(msg) {
				this.msg = msg
				setTimeout(()=> {
					this.msg = null
				},1000)
			},
		}
	}
</script>
