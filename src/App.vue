<template>
    <div>
      <section class="hero is-fullheight has-carousel has-background-white has-navbar-fixed-top has-navbar-fixed-bottom" v-bind:class="backg" >
    
        <app-header v-show='cover'></app-header>
        
            <router-view>
            </router-view>
    
        <app-footer v-show='cover'></app-footer>
        </section>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import {bus } from './main'
import cover from './components/cover.vue'
import header from './components/header.vue'
import footer from './components/footer.vue'

export default{
  components:{
    'cover': cover,
    'app-header': header,
    'app-footer': footer, 
  },
  computed:{
    ...mapState(['goToMyHome']),

  },
  created(){
      

      bus.$on('saveDisplayName', (name)=>{ 
      this.displayName = name;
      console.log(this.displayName);
    });

    bus.$on('saveInstOrCompany', (inst_or_company)=>{ 
      this.inst_or_company = inst_or_company;
      console.log('inst or company',this.inst_or_company);
    });

    bus.$on('changeBG', (backg)=>{ 
      this.backg = backg;
      console.log('backg',this.backg);
    });


    bus.$on('cover-or-not', (coverOrNot)=>{ 
      this.cover = coverOrNot;
      console.log('cover',this.cover);
    });

    bus.$on('destroyOnSignOut', (coverOrNot)=>{ 
      this.displayName = '';
      this.cover = true;
      console.log('signout, displayName: ',this.displayName);
    });
  },
    data(){
      return {
        'backg': 'not-about',
        'cover': true,
        'logo': '../images/bulma-logo.png',
        inst_or_company: true,
        displayName:''
      }
    }, 
    methods:{

    }
  }
</script>

<style lang="scss" scoped>

@import '~bulma-carousel/dist/css/bulma-carousel.min.css';
            .about {
                // background: black url(https://unsplash.com/photos/y6vIz1G6TAM) center / cover;
                  //background:  black url(./images/abt5.jpg) no-repeat center center fixed; 
                  -webkit-background-size: cover;
                  -moz-background-size: cover;
                  -o-background-size: cover;
                  background-size: cover;

            }

.not-about {
                 //background: black url(https://picsum.photos/2880/946/?random) center / cover;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;

            }
.black {
  //background: black center / cover;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                -o-background-size: cover;
                background-size: cover;
}
            //@media(max-width: 1024px){ .about{ background: black url(https://picsum.photos/1536/2048/?random) center / cover} }
            //@media(max-width:  768px){ .not-about{ background: black url(https://picsum.photos/630/1138/?random) center / cover} }

</style>
