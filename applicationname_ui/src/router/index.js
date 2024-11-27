import Vue from "vue";
import VueRouter from "vue-router";
#foreach($domainClass in $domainClasses)
import $domainClass.name.PascalPlural from  '@/pages/${domainClass.name.PascalPlural}.vue';
import ${domainClass.name.Pascal}Detail from  '@/pages/${domainClass.name.Pascal}Detail.vue';
#end

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
#if( ${application.includeIntegrationSpringsecurity} )
		redirect: '/sign-in',
#else
    redirect: '/helmets',
#end
  },
  {
    path: "/signup",
    name: "SignupView",
    component: () => import("../views/SignupView.vue"),
  },
  {
    path: "/pricing",
    name: "PricingView",
    component: () => import("../views/PricingView.vue"),
  },
  {
    path: "/arts-gallery",
    name: "ArtsGalleryView",
    component: () => import("../views/ArtsGalleryView.vue"),
  },
  {
    path: "/checkout/:id",
    name: "CheckoutView",
    component: () => import("../views/CheckoutView.vue"),
  },
  {
    path: "/stripe-checkout",
    name: "StripeCheckoutView",
    component: () => import("../views/StripeCheckoutView.vue"),
  },
#foreach($domainClass in $domainClasses)
	{
		path: '/$domainClass.name.camelPlural',
		name: '$domainClass.name.PascalPlural',
		component: $domainClass.name.PascalPlural,
	},
	{
	    path: '/$domainClass.name.camel/:${domainClass.name.camel}Id', 
	    name: '${domainClass.name.Pascal}Detail',
	    component: ${domainClass.name.Pascal}Detail,
	    props: true // Pass route params as props to the component
  	},
#end];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
