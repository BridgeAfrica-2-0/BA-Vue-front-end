<template>
    <div  v-if="items.length>0">
        <div class="lb"    v-if="items.length==1" > 
        <div   class="" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="" v-for="(src, i) in items" :key="i" @click="show(i)">

                <img :src="src" class="single-image" alt="">

            </div>
        </div>
           
       </div>

   <div class=""  style="position:relative" v-else-if="items.length==2"  > 
        

        <b-row class="p-0">       
            
            
            <b-col cols="6" class="p-0"  v-for="(src, i) in items" :key="i" @click="show(i)" >      
                <img :src="src" class="double-image pr-1" style="object-fit:cover; height:100%">
                </b-col>    </b-row>
   </div>

   <div class="lb"  v-else-if="items.length==3"  > 

        <div class="lb-grid" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="lb-item" v-for="(src, i) in items" :key="i" @click="show(i)" :style="bg(src)">

                <span class="lb-more" v-if="i==cells-1 && items.length - cells>0">{{ items.length - cells}}+</span>
            </div>
        </div>

   </div>
    <div class="lb"  v-else-if="items.length==4"  > 

        <div class="lb-grid" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="lb-item" v-for="(src, i) in items" :key="i" @click="show(i)" :style="bg(src)">

                <span class="lb-more" v-if="i==cells-1 && items.length - cells>0">{{ items.length - cells}}+</span>
            </div>
        </div>

   </div>

    <div class="lb"  v-else-if="items.length==5"  > 

        <div class="lb-grid" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="lb-item" v-for="(src, i) in items" :key="i" @click="show(i)" :style="bg(src)">

                <span class="lb-more" v-if="i==cells-1 && items.length - cells>0">{{ items.length - cells}}+</span>
            </div>
        </div>

   </div>



    <div   v-else class="lb-grid" :class="[css,items.length>cel?'lb-grid-' + cel: 'lb-grid-' + items.length]">
            <a class="lb-item" v-for="(src, i) in filterItems" :key="i" :href="items[i]" role="link" @click.prevent="show(i)"  :style="bg(src)">
                <span class="lb-more" v-if="i==cel-1 && items.length - cel>0">{{ items.length - cel}}+</span>
            </a>
        </div>


        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="lb-modal" v-if="index>=0">
                <button class="btn btn-outline-danger btn-sm lb-modal-close" @click="close">
                    <i class="fas far fa-times"></i>
                </button>
                <button class="btn btn-outline-primary lb-modal-prev" @click="prev">
                    <i class="fas far fa-angle-left fa-2x"></i>

                </button>
                <button class="btn btn-outline-primary lb-modal-next" @click="next">
                    <i class="fas far fa-angle-right fa-2x"></i>
                </button>

                <div class="lb-modal-img" @click="close">
                    <img :src="src">
                    <div class="spinner spinner-dots-wave" v-if="loading">
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {

        props: {
            items: {
                type: Array,
                default: () => { return [] }
            },

            css: {
                type: String,
                default: () => 'h-250 h-md-400 h-lg-600'
            },

            cells: {
                type: Number,
                default: () => 5
            }
        },

        data() {
            return {
                src: '',
                index: -1,
                cel:5,
                loading: false,
                events: []
            }
        },

        computed:{
           
     

      filterItems: function() {
      let items = [];
      this.items.forEach((item, i) => {
          if(i<this.cel){   
        items.push(item);

         }
      });
      return items;
    },


        },

        methods: {


            bind() {

                if (this.events.length > 0) return;

                this.events.push(['keydown', e => {
                    if (this.index < 0) return;
                    if (e.keyCode === 37) {
                        this.prev();
                    } else if (e.keyCode === 39) {
                        this.next();
                    } else if (e.keyCode === 27) {
                        this.close();
                    }
                }]);
                this.events.forEach(e => { window.addEventListener(e[0], e[1]); });
            },

            show(i) {

                if (i >= this.items.length) {
                    i = 0;
                }
                if (i < 0) {
                    i = this.items.length - 1;
                }
                this.loading = true;
                this.bind();
                this.index = i;
                var src = this.items[i];
                var img = new Image();
                img.src = src;
                img.onload = () => {
                    this.loading = false;
                    this.src = src;
                }
            },
            next() {
                this.show(this.index - 1);
            },

            prev() {
                this.show(this.index + 1);
            },
            close() {
                this.index = -1;
                this.events.forEach(e => { window.removeEventListener(e[0], e[1]); });
                this.events = [];
            },
            bg(i) {
                return i && i.length > 0 ? `background-image: url('${i}')` : '';
            }



        },


    }
</script>
<style >

.lb .lb-blec{
    position: relative !important;
}

.lb-item{   
   
    background-size: cover !important;
    background-position: top center;

    /* display: flex;
  flex-direction: column;
  max-height: 1000px;
  border-bottom: 2px solid red; */
    

}

.single-image{
    width: 100%;
    max-height: 400px;
    object-fit: cover;
}

.double-image{
  width: 100%;
}



@media (max-width: 762px) {

  .lb-grid-3{
    height: 500px !important;
    margin-bottom: 8px;
}

.lb-grid-4{
    height: 350px !important;
    margin-bottom: 8px;
}

.lb-grid-5{
    height: 500px !important;
    margin-bottom: 8px;
}


}


@media (min-width: 762px) {

  .lb-grid-3{
    height: 400px !important;
    margin-bottom: 8px;
}

 .lb-grid-4{
    height: 500px !important;
    margin-bottom: 8px;
}

.lb-grid-5{
    height: 800px !important;
    margin-bottom: 8px;
}

}

.lb-grid-2{
   
    margin-bottom: 8px;
    max-height: auto;
}

.lb-grid-blec{
 height: auto;
}
</style>