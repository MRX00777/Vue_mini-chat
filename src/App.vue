<template>
  <div class="messagers">
    <div class="messagers__windows">
      <WindowHeader :src="'alex'" :name="'Patric'" :status="'Онлайн'"/>
      <WindowBody :sendId="2" :message="message"/>
      <WindowFooter :sendId="2" @new-mess="newMess"/>
    </div>
    <div class="messagers__windows">
      <WindowHeader  :src="'jane'" :name="'Emma'" :status="'Онлайн'" />
      <WindowBody :sendId="1" :message="message"/>
      <WindowFooter :sendId="1" @new-mess="newMess"/>
    </div>
  </div>
</template>

<script>
import WindowHeader from './components/WindowHeader.vue';
import WindowBody from './components/WindowBody.vue';
import WindowFooter from './components/WindowFooter.vue';



export default {
    name: 'App',
    components: { WindowHeader, WindowBody,
      WindowFooter
     },
     data(){
      return{
        message: []
      }
     },
     created() {
      const messStorage = localStorage.message ? JSON.parse(localStorage.message) : []
      this.message = messStorage
     },
     methods: {
      newMess(mess) {
        this.message.push(mess)
        localStorage.message = JSON.stringify(this.message)
      }
     }
}
</script>

<style>

</style>

<!-- https://www.figma.com/file/v4ujBE6EOaRk0NFQaJLps7/CHAT-VUE-(Copy)?node-id=0%3A1&mode=dev -->