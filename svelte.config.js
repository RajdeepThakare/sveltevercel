//import adapter from '@sveltejs/adapter-auto';
import vercel from '@sveltejs/adapter-vercel';


// /** @type {import('@sveltejs/kit').Config} */
//const config = {
//	kit: {
//		adapter: vercel(),

		// Override http methods in the Todo forms
//		methodOverride: {
//			allowed: ['PATCH', 'DELETE']
//		}
//	}
//};

//export default config;
export default {
	kit: {
	  // default options are shown
	  adapter: vercel({
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		// if true, will deploy the app using edge functions
		// (https://vercel.com/docs/concepts/functions/edge-functions)
		// rather than serverless functions
		edge: false,
  
		// an array of dependencies that esbuild should treat
		// as external when bundling functions
		external: [],
  
		// if true, will split your app into multiple functions
		// instead of creating a single one for the entire app
		split: false

		
	  })
	}
  };