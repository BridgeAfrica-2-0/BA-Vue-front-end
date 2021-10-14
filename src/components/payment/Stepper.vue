<template>
	<div>
		<div class="container">
			<div class="stepper">
				<div class="steps">
					<a class="step">
						<span class="icon"></span>
						<span class="label">checkout</span>
						<div class="step-divider"></div>
					</a>
					<div class="step-divider"></div>
					<a class="step">
						<span class="icon"></span>
						<span class="label">payment</span>
					</a>
					<div class="step-divider"></div>
				</div>

				<div v-show="stepflag == 1" class="border-top-1" id="stepnext">
					<div class="card mt-2 mx-auto" style="width:50rem;">
						<div class="card-body">
							<div class="row">
								<div class="col-sm p-4">
									<h5>Shipping Address</h5>
								</div>
								<div class="col-sm p-4 ">
									<a href="#" class="card-link text-uppercase float-right mr-5"
										>Change</a
									>
								</div>
							</div>
							<div class="row">
								<div class="col-sm  p-4">
									<p class="card-text">Jack Doe. +2373XXXXXXXX</p>
									<p>Camerron,youande,bastos.</p>
								</div>
								<div class="col-sm p-4"></div>
							</div>
						</div>
					</div>

					<div class="card mt-5 mx-auto" style="width:50rem;">
						<div class="card-header bg-white h-50">
							Review and confirm your Order
							<br />
							Business:Largo
						</div>
						<div class="card-body">
							<div>
								<div class="row">
									<div class="col">
										<div
											id="carouselExampleControls"
											class="carousel slide"
											data-ride="carousel"
										>
											<div class="carousel-inner">
												<div class="carousel-item active">
													<img
														class="d-block w-100"
														src="@/assets/img/paymen/headset.jpg"
														alt="First slide"
													/>
												</div>
												<div class="carousel-item">
													<img
														class="d-block w-100"
														src="@/assets/img/payment/headset.jpg"
														alt="Second slide"
													/>
												</div>
												<div class="carousel-item">
													<img
														class="d-block w-100"
														src="@/assets/img/payment/headset.jpg"
														alt="Third slide"
													/>
												</div>
											</div>
											<a
												class="carousel-control-prev"
												href="#carouselExampleControls"
												role="button"
												data-slide="prev"
											>
												<span
													class="carousel-control-prev-icon"
													aria-hidden="true"
												></span>
												<span class="sr-only">Previous</span>
											</a>
											<a
												class="carousel-control-next"
												href="#carouselExampleControls"
												role="button"
												data-slide="next"
											>
												<span
													class="carousel-control-next-icon"
													aria-hidden="true"
												></span>
												<span class="sr-only">Next</span>
											</a>
										</div>
									</div>
									<div class="col-2">
										Name of item:
										<br /><br />
										Shipping:
										<br /><br />
										Total:
									</div>
									<div class="col-2">
										500XAf
										<br /><br />
										100
										<br /><br />
										1000
									</div>
									<div class="col">
										<div class="buttons">
											<button
												v-show="stepflag == 3"
												class="btn step-back"
												@click="backstep"
												disabled
											>
												Back
											</button>
											<button
												class="btn step-next btn-warning px-5 mt-5"
												@click="nextstep"
											>
												Order
											</button>
											<button v-show="stepflag == 3" class="btn step-complete ">
												Complete Step
											</button>
											<button v-show="stepflag == 4" class="btn step-finish ">
												Finish
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div v-show="stepflag == 2" class="border-top-1" id="stepnext">
					<div class="card mt-2 mx-auto" style="width:50rem;">
						<div class="card-body">
							<div class="row p-4">
								<div class="col">
									<img
										class="d-block w-50"
										src="@/assets/img/payment/mtn.png"
										alt="Third slide"
									/>
								</div>
								<div class="col">
									<p class="p-3">MTN Mobile Money</p>
								</div>
								<div class="col">
									<input
										class="p-3"
										type="radio"
										name="drone"
										value="huey"
										checked
									/>
								</div>
							</div>
							<div class="row p-4">
								<div class="col">
									<img
										class="d-block w-50"
										src="@/assets/img/payment/orange_money.png"
										alt="Third slide"
									/>
								</div>
								<div class="col">
									<p class="p-3">Orange Money</p>
								</div>
								<div class="col">
									<input type="radio" name="drone" value="huey" checked />
								</div>
							</div>
							<div class="row p-4">
								<div class="col">
									<img
										class="d-block w-25 "
										src="@/assets/img/payment/gimac.jpg"
										alt="Third slide"
									/>
								</div>
								<div class="col">
									<p class="p-3">GIMAC</p>
								</div>
								<div class="col">
									<input
										type="radio"
										name="drone"
										class="mt-3"
										value="huey"
										checked
									/>
								</div>
							</div>
							<div class="row p-4">
								<div class="col"></div>
								<div class="col"></div>
								<div class="col">
									<button class="btn step-next btn-warning px-5 mt-5">
										Pay:00XXX
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				stepflag: 1,
			};
		},
		methods: {
			nextstep: function() {
				this.stepflag = 2;
			},
			backstep: function() {
				this.stepflag = 1;
			},
		},
		mounted() {
			class Stepper {
				constructor(stepperElement) {
					this.stepperElement = stepperElement;
					this.events = {
						stepChanged: [],
						completed: [],
					};
					this.stepsContainer = stepperElement.querySelector(".steps");
					this.steps = [...this.stepsContainer.querySelectorAll(".step")].map(
						(step, index) => {
							return new Step(step, index, this);
						}
					);
					this.buttons = stepperElement.querySelector(".buttons");
					this.next = new NextButton(
						this.buttons.querySelector(".step-next"),
						this
					);
					this.back = new BackButton(
						this.buttons.querySelector(".step-back"),
						this
					);
					this.complete = new CompleteButton(
						this.buttons.querySelector(".step-complete"),
						this
					);
					this.finish = new FinishButton(
						this.buttons.querySelector(".step-finish"),
						this
					);
					this.setActiveStep(0);
					this.buttons.querySelector(".step-complete").focus();
				}

				nextStep() {
					this.setActiveStep(this.activeIndex + 1);
					this.stepflag = this.activeIndex;
				}

				previousStep() {
					this.setActiveStep(this.activeIndex - 1);
				}

				listenForEvent(eventName, callback) {
					this.events[eventName].push(callback);
				}

				get isComplete() {
					return (
						this.steps.filter((step) => step.isComplete).length ===
						this.steps.length
					);
				}

				emmitEvent(eventName) {
					this.events[eventName].forEach((callback) => {
						callback(this);
					});
				}

				setActiveStep = (index) => {
					if (this.activeIndex !== index) {
						if (index > -1 && index < this.steps.length) {
							this.activeIndex = index;
						} else {
							this.activeIndex = 0;
						}
						this.emmitEvent("stepChanged");
						if (this.isComplete) this.emmitEvent("completed");
					}
				};
			}

			class Step {
				constructor(step, index, stepper) {
					this.step = step;
					this.index = index;
					this.stepper = stepper;
					this.icon = step.querySelector(".icon");
					this.isComplete = false;
					this.isActive = false;
					stepper.listenForEvent("stepChanged", this.stepChanged);
					this.mouseEvent = this.step.addEventListener("mouseup", () => {
						this.stepper.setActiveStep(this.index);
					});
					this.reset();
				}

				stepChanged = ({ activeIndex }) => {
					if (activeIndex === this.index) {
						this.setFocus();
					} else {
						this.looseFocus();
					}
				};

				setFocus() {
					if (!this.isActive) {
						this.step.classList.add("active");
						this.isActive = true;
					}
				}

				looseFocus() {
					if (this.isActive) {
						this.step.classList.remove("active");
						this.isActive = false;
					}
				}

				complete() {
					this.isComplete = true;
					this.icon.innerHTML = '<i class="material-icons">done</i>';
				}

				reset() {
					this.isComplete = false;
					this.icon.innerHTML = this.index + 1;
				}
			}

			class Button {
				constructor(el, stepper) {
					this.stepper = stepper;
					this.el = el;
					this.el.addEventListener("click", this.mouseup);
				}

				disable() {
					this.el.disabled = true;
				}

				enable() {
					this.el.disabled = false;
				}

				hide() {
					this.el.style.display = "none";
				}

				show() {
					this.el.style.display = "inline-block";
				}
			}

			class NextButton extends Button {
				constructor(el, stepper) {
					super(el, stepper);
					this.stepper.listenForEvent("stepChanged", this.stepChanged);
				}

				mouseup() {
					const { setActiveStep, activeIndex } = stepper;
					setActiveStep(activeIndex + 1);
				}

				stepChanged = ({ activeIndex, steps }) => {
					if (activeIndex === steps.length - 1) this.disable();
					if (activeIndex < steps.length - 1) this.enable();
				};
			}

			class BackButton extends Button {
				constructor(el, stepper) {
					super(el, stepper);
					this.stepper.listenForEvent("stepChanged", this.stepChanged);
				}

				mouseup() {
					const { setActiveStep, activeIndex } = stepper;
					setActiveStep(activeIndex - 1);
				}

				stepChanged = ({ activeIndex }) => {
					if (activeIndex === 0) this.disable();
					if (activeIndex > 0) this.enable();
				};
			}

			class CompleteButton extends Button {
				constructor(el, stepper) {
					super(el, stepper);
					this.stepper.listenForEvent("stepChanged", this.stepChanged);
					this.stepper.listenForEvent("completed", this.completed);
				}

				mouseup() {
					const { setActiveStep, activeIndex, steps } = stepper;
					steps[activeIndex].complete();
					setActiveStep(activeIndex + 1);
				}

				stepChanged = ({ steps, activeIndex }) => {
					if (steps[activeIndex].isComplete) {
						this.disable();
					} else {
						this.enable();
					}
				};

				completed = () => {
					this.hide();
				};
			}

			class FinishButton extends Button {
				constructor(el, stepper) {
					super(el, stepper);
					this.stepper.listenForEvent("completed", this.completed);
				}

				mouseup() {
					const { setActiveStep, steps, complete, finish } = stepper;
					steps.forEach((step) => {
						step.reset();
					});
					finish.hide();
					complete.show();
					complete.enable();
					setActiveStep(0);
				}

				completed = () => {
					this.show();
					this.el.focus();
				};
			}

			const el = document.querySelector(".stepper");
			const stepper = new Stepper(el);
		},
	};
</script>

<style>
	@import url("https://fonts.googleapis.com/css?family=Amatic+SC:700|Roboto");

	:root {
		--primary: #4af034;
		--primary-dark: #16cf06;
		--primary-text: #fff;
		--secondary: rgba(0, 0, 0, 0.38);
		--disabled: rgb(188, 188, 188);
	}

	* {
		box-sizing: border-box;
		font-family: "Roboto", sans-serif;
	}

	.heading {
		margin: auto;
		width: 100%;
		text-align: center;
		margin-top: 2rem;
		color: rgba(0, 0, 0, 0.7);
		font-family: "Amatic SC", cursive;
		font-size: 4rem;
	}

	h2.heading {
		font-size: 3rem;
	}

	.container {
		width: 100%;
		min-width: 900px;
		margin-top: 2rem;
		padding: 2.5rem;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.016);
	}

	/* Stepper */
	.steps {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 4rem;
		margin: 0 0 2rem 0;
	}

	.step {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 1rem 0.5rem;
		transition: 0.5s;
		border-radius: 2px;
		user-select: none;
	}

	.step:active {
		background-color: #16cf06;
		transition: 0.02s;
	}

	.step:active .label {
		color: #16cf06;
	}
	.step:active .step-divider {
		color: #16cf06;
	}
	.step .icon {
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.3rem;
		height: 2.3rem;
		background-color: var(--secondary);
		color: var(--primary-text);
		margin-right: 0.5rem;
	}
	.step.active .icon,
	.step.complete .icon {
		background-color: #13b93c;
	}

	.step-divider {
		flex: 1;
		border-top-style: solid;
		border-color: #bdbdbd;
		border-top-width: 5px;
		border-radius: 2%;
	}

	.step .label {
		color: rgb(180, 180, 180);
	}

	.step.active .label {
		color: rgb(29, 29, 29);
	}

	/* Button Styles*/
	.btn {
		color: var(--primary-text);
		background-color: var(--primary);
		text-transform: uppercase;
		cursor: pointer;
		min-height: 2.5rem;
		min-width: 6rem;
		border: none;
		border-radius: 4px;
		outline: none;
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
			box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	}
	.btn:hover {
		background-color: var(--primary-dark);
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
	}
	.btn[disabled] {
		background: none;
		box-shadow: none;
		color: var(--disabled);
		cursor: default;
	}
	.btn:active {
		box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
			0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
	}

	.btn:focus {
		background-color: var(--primary-dark);
		box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
			0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
	}

	.step-finish {
		display: none;
	}
	.displaynone {
		display: none;
	}
	.user_img {
		width: 40px;
		height: 40px;
	}
</style>
