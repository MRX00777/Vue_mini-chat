<template>
    <div class="messagers__window-header">
           <img :src="avatars[src]" alt="" class="messagers__window-avatar"> 
        
        <div class="messagers__window-info">
            <h2 class="messagers__window-name">{{ name }}</h2>
            <p class="messagers__window-status">{{ status }}</p>
        </div>
    </div>
</template>


<script>


export default {
    name: 'WindowHeader',
    props: ['src', 'name', 'status'],
    data() {
        return {
            avatars: {
                alex: 'https://i.imgflip.com/7d837i.jpg',
                jane: 'https://sun9-52.userapi.com/impg/VzrkzDwarTKWcXAY1U5Ag5ISIiPOL-x-nbOllg/FrvnqObJHrI.jpg?size=200x179&quality=96&sign=3523c38731c1e8086493ca1726df69c9&type=album',
            }
        }
    }
}
</script>


<style lang="">
    
</style>