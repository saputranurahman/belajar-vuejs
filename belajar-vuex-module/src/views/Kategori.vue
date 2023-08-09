<template>
    <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">KATEGORI</h2>
      <p class="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p>
    </div>

    <div class="mt-10 grid grid-cols-3 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4">
        <div v-for="kategori in getkategori" >
             
      <article class="relative">
        <div class="aspect-square overflow-hidden">
          <img class="group-hover:scale-125 h-full w-full object-cover transition-all duration-300" src="data:image/png;base64,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"  alt="" />
        </div>
        <div class="absolute top-0 m-1 rounded-full bg-white">
          <p class="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">Sale</p>
        </div>
        <div class="mt-4 flex items-start justify-between">
          <div class="">
            <h3 class="text-xs font-semibold sm:text-sm md:text-base">
              <a href="#" title="" class="cursor-pointer">
                {{ kategori }}
                <span class="absolute" aria-hidden="true"></span>
              </a>
            </h3>
            <div class="mt-2 flex items-center">
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
              <svg class="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" class=""></path>
              </svg>
            </div>
          </div>

          
        </div>
      </article>

      
      </div>
    </div>
  </div>
</section>

</template>
    
    <script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
        computed: {
            ...mapGetters('kategori', ['getkategori']),
        },
        methods: {
            ...mapActions('kategori', ['fetchkategori']),
          
        },
        created() {
            this.fetchkategori();
        }
   }
</script>