<template>
	<div>
		<div class="products ">
			<!-- MARKET HEADER BAR -->
			<div class="col-12 d-flex align-items-center justify-content-between">
				<p>
					<b-icon
						font-scale="1.8"
						icon="shop"
						variant="primary"
						class="mr-2"
					></b-icon>
					<span class="font-weight-bold">Market</span>
				</p>
				<b-button variant="outline-primary" @click="createProduct"
					>Add Product</b-button
				>
			</div>
			<div class="col-12">
				<hr class="h-divider" />
			</div>

			<!-- MARKET PRODUCT LIST -->
			<div class="col-md-6" v-for="(product, index) in products" :key="index">
				<Product :product="product" />
			</div>
			<b-col v-if="loader" class="load">
				<b-spinner
					style="width: 7rem; height: 7rem;"
					variant="primary"
				></b-spinner>
			</b-col>
			<b-col class="my-4 load" v-if="products.length < 1 && !loader">
				<p>No Products in Market !!</p>
			</b-col>
		</div>
		<!-- ADDPRODUCT FORM -->
		<b-modal hide-footer title="Add product" v-model="showModal">
			<b-form>
				<b-row>
					<b-col cols="12" md="6">
						<b-form-group
							id="input-group-1"
							label="Product Name"
							label-for="input-1"
							label-size="sm"
						>
							<b-form-input
								id="input-1"
								class="mt-1"
								type="text"
								v-model="newProduct.name"
								required
							></b-form-input>
						</b-form-group>

						<b-form-group
							id="input-group-1"
							label="Product Description"
							label-for="input-1"
							label-size="sm"
						>
							<b-textarea
								id="input-1"
								class="mt-2"
								v-model="newProduct.description"
								type="text"
								required
							></b-textarea>
						</b-form-group>
					</b-col>
					<b-col cols="12" md="6">
						<div class="image-upload-wrap" @click="picImage">
							<input
								type="file"
								name=""
								@change="getImage"
								accept="image/*"
								id="image"
								v-show="false"
							/>
							<a href="#" data-toggle="modal" data-target="#createalbumModal">
								<div class="drag-text">
									<i class="fa fa-plus"></i>
									<h6>Product Image</h6>
								</div>
							</a>
							<div></div>
						</div>
					</b-col>
				</b-row>

				<b-form-group
					id="input-group-1"
					label="Product Price"
					label-for="input-1"
					label-size="sm"
				>
					<b-form-input
						v-model="newProduct.price"
						class="mt-1"
						type="number"
						id="price"
					></b-form-input>
				</b-form-group>
				<b-form-checkbox
					id="checkbox-1"
					v-model="newProduct.on_discount"
					name="checkbox-1"
					value="1"
					unchecked-value="0"
				>
					This Product Is On Discount
				</b-form-checkbox>

				<b-form-group
					id="conditions"
					label="Conditions"
					label-for="input-1"
					label-size="sm"
				>
					<b-form-input
						v-model="newProduct.condition"
						class="mt-1"
						id="conditions"
					></b-form-input>
				</b-form-group>

				<b-form-checkbox
					value="1"
					v-model="newProduct.is_service"
					unchecked-value="0"
				>
					This Item Is A Service ?
				</b-form-checkbox>

				<b-form-checkbox
					value="1"
					v-model="newProduct.in_stock"
					unchecked-value="0"
				>
					In stock
				</b-form-checkbox>

				<b-form-checkbox value="1" unchecked-value="0">
					Published
				</b-form-checkbox>

				<!-- CATEGORIES -->
				<div class="mt-2">
					<label class="typo__label"> Category </label>
					<multi-select
						v-model="multiselecvalue"
						@input="subcategories"
						tag-placeholder="Add this as new tag"
						placeholder="Search or add a tag"
						label="name"
						track-by="id"
						:options="BuCategories"
						:taggable="true"
						@tag="addTag"
					></multi-select>
				</div>
				<!-- SUB-CATEGORIES -->
				<div class="mt-2">
					<label class="typo__label"> Sub Category</label>
					<multi-select
						v-model="filterselectvalue"
						tag-placeholder="Add this as new tag"
						placeholder="Search or add a tag"
						label="name"
						track-by="subcategoryId"
						:options="scategories"
						:multiple="true"
						:taggable="true"
						@tag="addFilter"
					></multi-select>
				</div>
				<label class="typo__label">Fiters </label>
				<div>
					<b-card no-body>
						<b-tabs pills card vertical>
							<b-tab
								:title="filters.name"
								v-for="filters in filterselectvalue"
								:key="filters.id"
								active
								><b-card-text>
									<b-form-group label="Filters" class="colorblack">
										<b-form-checkbox-group
											id=""
											class="colorblack"
											v-model="select_filterss"
											name="filters"
										>
											<b-form-checkbox
												class="colorblack"
												v-for="fil in filters.filters"
												:key="fil.id"
												:value="fil.id"
											>
												{{ fil.name }}
											</b-form-checkbox>
										</b-form-checkbox-group>
									</b-form-group>
								</b-card-text></b-tab
							>
						</b-tabs>
					</b-card>
				</div>

				<b-alert v-if="success" :variant="val" show> {{ msg }} </b-alert>
				<b-button @click="addProduct" class="mt-2 btn-block" variant="primary">
					<b-spinner v-if="load" variant="white"></b-spinner>

					Add</b-button
				>
			</b-form>
		</b-modal>
	</div>
</template>

<script>
	import Product from "../product";
	import axios from "axios";
	import MultiSelect from "vue-multiselect";
	export default {
		name: "MarketPlace",
		components: {
			MultiSelect,
			Product,
		},
		data() {
			return {
				showModal: false,
				load: false,
				loader: false,
				newProduct: {
					name: "",
					description: "",
					picture: null,
					price: "",
					in_stock: "",
					on_discount: false,
					discount_price: 0,
					condition: "",
					is_service: null,
					status: 1,
					business_id: "",
					categoryId: "",
					subCategoryId: "",
					filterId: "",
				},
				products: [],
				val: "",
				msg: "",
				success: false,
				multiselecvalue: [],
				filterselectvalue: [],
				select_filterss: [],
				multiselec: [
					{ name: "Vue.js", code: "vu" },
					{ name: "Javascript", code: "js" },
					{ name: "Open Source", code: "os" },
				],
			};
		},
		computed: {
			BuCategories() {
				return this.$store.state.market.categories;
			},
			scategories() {
				return this.$store.state.auth.subcategories;
			},
			selectedcategories: function() {
				let selectedCatUsers = [];
				if (this.multiselecvalue.id) {
					// selectedUsers.push(item.id);
					selectedCatUsers.push(this.multiselecvalue.id);
				} else {
					selectedCatUsers.push(this.multiselecvalue.category_id);
				}
				return selectedCatUsers;
			},
		},
		methods: {
			getProducts: async function() {
				await axios
					.get("/market")
					.then((res) => {
						console.log(res.data);
						this.products = res.data.data;
						console.log(this.products);
					})
					.catch((error) => {
						console.log(error);
					})
					.finally(() => {
						this.loader = false;
					});
			},
			addProduct() {
				this.load = true;
				let fd = new FormData();

				//init data
				this.newProduct.business_id = this.$route.params.id;
				this.newProduct.categoryId = this.multiselecvalue.id;
				this.newProduct.subCategoryId = this.filterselectvalue
					.map((el) => el.subcategory_id)
					.join();
				this.newProduct.filterId = this.select_filterss.join();

				//transform product data in form data
				for (const key in this.newProduct) {
					fd.append(key, this.newProduct[key]);
				}
				console.log("NEW PRODUCT", this.newProduct);
				axios
					.post("market", fd)
					.then((res) => {
						this.load = false;
						(this.success = true), (this.val = "success");
						this.msg = "Operation was successful !!";
						this.getProducts();
					})
					.catch((err) => {
						this.load = false;
						(this.success = true), (this.val = "danger");
						this.msg = "Something wen't wrong !!";

						setTimeout(() => {
							this.success = false;
						}, 5000);
					});
			},
			picImage() {
				document.querySelector("#image").click();
			},
			getImage(e) {
				console.log(e.target.files[0]);
				this.newProduct.picture = e.target.files[0];
			},
			createProduct() {
				this.showModal = !this.showModal;
			},
			subcategories() {
				//get subcategories
				let formData2 = new FormData();
				formData2.append("categoryId", this.selectedcategories);
				this.$store.dispatch("auth/subcategories", formData2);
			},
			addTag(newTag) {
				const tag = {
					name: newTag,
					id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
				};
				this.multiselec.push(tag);
				this.multiselecvalue.push(tag);
			},
			addFilter(newTag) {
				const tag = {
					name: newTag,
					id: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
				};
				this.multiselec.push(tag);
				this.filterselectvalue.push(tag);
			},
		},
		beforeMount() {
			this.loader = true;
			//get market place products
			this.getProducts();
			//get categories for current business
			const businessId = this.$route.params.id;
			this.$store.dispatch("market/getBuCategories", businessId);
		},
	};
</script>

<style scoped>
	.load {
		display: flex;
		justify-content: center;
	}
	.products {
		display: flex;
		flex-wrap: wrap;
	}

	.product:hover .overlay {
		opacity: 0.5;
		color: #e75d29;
	}
	.text-hover {
		position: relative;
		top: 80px;
	}

	.text-static {
		position: relative;
		top: -220px;
		left: 100px;
		color: white;
		font-weight: 200;
	}

	.product:hover .text-static {
		display: none;
	}

	.btn-view {
		background-color: transparent;
		border: none;
		color: white;
	}

	.btn-view:focus {
		outline-color: transparent;
		border: none;
	}

	.product-name {
		color: #e75d29;
		text-align: center;
	}

	.pic-name {
		position: relative;
		left: -200px;
		color: white;
		font-weight: 200;
		opacity: 0;
	}

	.sp:hover .pic-name {
		opacity: 1;
	}

	.pic {
		cursor: pointer;
		background-color: transparent;
	}
	.pic:hover {
		box-shadow: 5px 10px 8px 2px #888888;
	}

	.create {
		position: relative;
		height: 210px;
		color: #fff;
		background-color: #bbb;
		padding: 20px;
		width: 14rem;
		top: 5px;
		left: 10px;
		border-radius: 5px;
		text-align: center;
		cursor: pointer;
		margin-bottom: 10px;
	}

	.text {
		margin-top: 50px;
	}

	.product {
		height: 190px;
		cursor: pointer;
	}

	@media only screen and (max-width: 768px) {
		.products {
			position: relative;
		}

		.product {
			margin-top: 20px;
		}

		.create {
			position: relative;
			height: 150px;
			left: 23px;
		}
		.text {
			margin-top: 30px;
		}
		.btn {
			font-size: 12px;
		}
	}
</style>
