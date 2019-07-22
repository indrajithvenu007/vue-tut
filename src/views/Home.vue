<template>
  <div class="beet-list">
  </div>
</template>

<script>
import { BEATS_URI } from '@/common/config';
import { get } from '@/common/api.service';
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      beets: []
    }
  },
  async mounted() {
    await this.getAllBeets();
  },
  methods: {
    async getAllBeets() {
      try {
        const data = await get(BEATS_URI);
        if (data) {
          this.beets = data.data
        } else {
          alert('fooked')
        }
        return;
      } catch (e) { 
        console.log('exp -> ', e)
        return;
      }
    }
  }
}
</script>
