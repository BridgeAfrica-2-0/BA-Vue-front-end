<template>
	<div class>
		<footer id="footer" class="shadow pt-5">
			<div class="footer-top">
				<div class="container">
					<div class="row col-md-6 mx-auto">
						<div class="col-lg-9">
							<ul class="list-group list-unstyled">
								<li>
									<a href="#">{{ $t("footer.Accueil") }}</a>
								</li>
								<li>
									<a href="#">{{ $t("footer.à propos de nous") }}</a>
								</li>
								<li>
									<a href="#">{{ $t("footer.politique de confidentialité") }}</a>
								</li>
								<li>
									<a href="#">{{ $t("footer.Nous contacter") }}</a>
								</li>
								<li>
									<a href="#">{{ $t("footer.blog") }}</a>
								</li>
							</ul>
						</div>
						<div class="col-lg-3">
							<ul class="list-group list-unstyled">
								<li class="nav-item dropdown show">
									<b>{{ $t("footer.Langue") }}</b>
									<b-dropdown
										size="sm"
										variant="outline"
										text="Anglais"
										class="m-2"
									>
										<b-dropdown-item-button @click="setLocale('en')">Anglais</b-dropdown-item-button>
										<b-dropdown-item-button @click="setLocale('fr')">français</b-dropdown-item-button>
									</b-dropdown>
								</li>
								<li class="nav-item dropdown show">
									<b>{{ $t("footer.pays") }}</b>
									<b-dropdown
										size="sm"
										variant="outline"
										text="Cameroun"
										class="ml-2"
									>
										<b-dropdown-item-button>Cameroun</b-dropdown-item-button>
										<b-dropdown-item-button>Nigeria</b-dropdown-item-button>
									</b-dropdown>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mt-5 border-top">
					<div class="col-lg-12 mt-3">
						<p class="text-center">
							© Copyright {{ $t("footer.all_rights_reserved") }}
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {
		methods: {
			setLocale(lang) {
				this.$i18n.locale = lang;
				this.togglenav();
				sessionStorage.setItem("locale", lang);
			},
		},
	};
</script>

<style scoped>
	li {
		text-align: start;
		list-style: none;
	}
	.bottom {
		border-top: solid 1px #ccc;
		padding: 10px;
		text-align: center;
	}
	.top {
		padding: 50px;
		position: relative;
		left: 230px;
	}

	.pages {
		color: black;
		text-decoration: none;
	}
	.pages:hover {
		color: #e75c18;
	}
	.link {
		color: #e75c18;
		text-decoration: none;
	}
	@media only screen and (max-width: 768px) {
		.top {
			padding: 50px;
			position: relative;
			left: -40px;
		}

		.card {
			width: 500px;
		}
		.row {
			display: flex;
			flex-direction: column;
		}
		.bottom {
			margin-left: -150px;
		}
	}
</style>

<style>
	.nav-pills .nav-link.active,
	.nav-pills .show > .nav-link {
		background-color: #e6e6e6;
	}
</style>

<style>
	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar {
		width: 5px !important;
		background-color: #f5f5f5;
	}

	::-webkit-scrollbar-thumb {
		background-color: #000000;
		border: 2px solid #555555;
	}
</style>
