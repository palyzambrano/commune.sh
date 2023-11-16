<div class="hidden dark:contents">
	<img class="relative circle md:w-3 w-2 left-[20%]" src="/svg/circle.svg" alt="" />
	<img
		class="relative circle-1 md:w-2 w-1 md:-right-[500px] -right-16"
		src="/svg/circle.svg"
		alt=""
	/>
	<img class="relative circle-2 md:w-3 w-2 md:left-[80%] left-[90%]" src="/svg/circle.svg" alt="" />
	<img class="relative circle-3 md:w- w-2 left-[70%]" src="/svg/circle.svg" alt="" />
	<img class="relative circle-5 md:w-3 w-2 left-[15%]" src="/svg/circle.svg" alt="" />

	<img class="relative circle-4 md:w-4 w-2 left-[78%]" src="/svg/circle.svg" alt="" />
	<img class="relative star w-4 left-[87%]" src="/svg/star.svg" alt="" />
	<img class="relative star-1 w-3 left-[8%]" src="/svg/star.svg" alt="" />
	<img class="relative star-2 w-4 left-[12%]" src="/svg/star.svg" alt="" />
	<img class="relative star-2 w-3 left-[82%]" src="/svg/star.svg" alt="" />
</div>

<style>
	.circle {
		animation: circle-move infinite;
		animation-duration: 4s;
	}

	.circle-1 {
		animation: circle-1 infinite;
		animation-duration: 5s;
	}

	.circle-2 {
		animation: circle-2 infinite;
		animation-duration: 5s;
	}

	.circle-3 {
		animation: circle-3 infinite;
		animation-duration: 5s;
	}
	.circle-4 {
		animation: circle-4 infinite;
		animation-duration: 5s;
	}
	.circle-5 {
		animation: circle-5 infinite;
		animation-duration: 6s;
	}

	.star {
		animation: star infinite;
		animation-duration: 2s;
	}

	.star-1 {
		animation: star-1 infinite;
		animation-duration: 2s;
	}
	.star-2 {
		animation: star-2 infinite;
		animation-duration: 3s;
	}
	.star-3 {
		animation: star-2 infinite;
		animation-duration: 1s;
	}

	@keyframes circle-move {
		0% {
			top: 480px;
		}
		50% {
			top: 460px;
		}
		100% {
			top: 480px;
		}
	}

	@keyframes circle-1 {
		0% {
			top: -40px;
		}
		50% {
			top: 0px;
		}
		100% {
			top: -40px;
		}
	}

	@keyframes circle-2 {
		0% {
			top: 140px;
		}
		50% {
			top: 160px;
		}
		100% {
			top: 140px;
		}
	}
	@keyframes circle-3 {
		0% {
			top: 160px;
		}
		50% {
			top: 150px;
		}
		100% {
			top: 160px;
		}
	}

	@keyframes circle-4 {
		0% {
			top: 400px;
		}
		50% {
			top: 420px;
		}
		100% {
			top: 400px;
		}
	}

	@keyframes circle-5 {
		0% {
			top: 150px;
		}
		50% {
			top: 130px;
		}
		100% {
			top: 150px;
		}
	}

	@keyframes star {
		0% {
			opacity: 1;
			top: 200px;
		}
		50% {
			opacity: 0;
			top: 205px;
		}
		100% {
			opacity: 1;
			top: 200px;
		}
	}

	@keyframes star-1 {
		0% {
			opacity: 1;
			top: 200px;
		}
		50% {
			opacity: 0;
			top: 205px;
		}
		100% {
			opacity: 1;
			top: 200px;
		}
	}
	@keyframes star-2 {
		0% {
			opacity: 1;
			top: 500px;
		}
		50% {
			opacity: 0;
			top: 496px;
		}
		100% {
			opacity: 1;
			top: 500px;
		}
	}
</style>
