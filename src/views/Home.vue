<template>
  <div class="beet-list">
    <Beet
      v-for="beet in beets" :key="beet.beat_id" :beet="beet" @delete_beet="handleDeleteBeet"
    ></Beet>
  </div>
</template>

<script>
import { BEATS_URI } from '@/common/config';
import { get } from '@/common/api.service';
import Beet from '@/components/Beet.vue'

export default {
  name: 'home',
  components: {
    Beet
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
    },
    handleDeleteBeet(params) {
      console.log(params)
    }
  }
}
</script>
