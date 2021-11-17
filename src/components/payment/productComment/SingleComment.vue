<template>
	<div class="mb-2">
		<div class="d-flex justify-content-start align-items-start">
			<b-avatar class="mr-2" variant="primary"> </b-avatar>
			<div class="flex-column align-items-start d-flex justify-content-start">
				<div
					class="comment flex-column align-items-start d-flex justify-content-start"
				>
					<div class="user d-flex align-items-start justify-content-between">
						<div>
							<p class="mb-0 font-weight-bold">
								{{ comment.user }}
							</p>
							<span class="text-secondary font-weight-thin">1hr ago</span>
						</div>
						<div class="" v-if="comment.user ==='exampler'">
							<b-dropdown
								size="lg"
								right
								variant="link"
								toggle-class="text-decoration-none"
								no-caret
							>
								<template #button-content>
									<b-icon icon="three-dots-vertical"></b-icon>
								</template>
								<b-dropdown-item-button >
									<b-icon variant="purple" class="mr-2" icon="trash-fill" aria-hidden="true"></b-icon>
									<span class="text-purple">Delete</span> 
								</b-dropdown-item-button>
							</b-dropdown>
						</div>
					</div>
					<div>
						<p class="mb-0">
							<a class="font-weignt-bold text-info" href="#"
								>@{{ comment.user }}</a
							>
							{{ comment.text }}
						</p>
					</div>
				</div>
				<div class="d-flex justify-content-start align-items-center">
					<div>
						<b-icon variant="primary" icon="heart" class="mr-2"></b-icon
						><span>12</span>
					</div>
					<b-button variant="link">Reply</b-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "singleComment",
		props: ["comment"],
	};
</script>

<style scoped>
	/* Single-comment component */
	.comment {
		min-height: 30px;
		max-width: 100%;
		display: flex;
		padding: 10px;
		align-items: center;
		color: #333;
		background-color: #f2f2f2;
		border-radius: 30px;
		box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
		text-align: left;
	}
	.user {
		width: 100%;
	}
	/* 
	.comment .avatar {
		align-self: flex-start;
	}

	.comment .avatar > img {
		width: 40px;
		height: 40px;
		border-radius: 100%;
		align-self: start;
	} */

	/* .comment .text {
		text-align: left;
		min-height: 30px;
		margin-left: 5px;
	}

	.comment .text span {
		margin-left: 5px;
		min-height: 30px;
	} */
</style>
