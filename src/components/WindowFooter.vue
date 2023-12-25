<template >
    <footer class="footer">
        <textarea rows="1" placeholder="Написать сообщение..." class="footer__edit" v-model="message"></textarea>
        <button class="footer__btn" @click="window = true" v-if="message.length == 0">
            <img src="../assets/img/photo.svg" alt="">
        </button>
        <button class="footer__btn" @click="sendMess" v-else>
            <img src="../assets/img/send.svg" alt="">
        </button>
        <div class="window" v-if="window" @click="window = false">
            <div class="window__body" @click.stop.prevent>
                <div class="window__title">Отправить картинку</div>
                <div class="window__from">
                    <label>
                        <span>URL</span>
                        <input v-model="photo" placeholder="URL">
                    </label>
                    <label>
                        <span>Комментарий</span>
                        <textarea v-model="comment" placeholder="Комментарий" rows="1"></textarea>
                    </label>
                </div>
                <div class="window__footer">
                    <button class="btn red" @click="window = false">ОТМЕНА</button>
                    <button class="btn purpure" @click="sendMessPhoto">ОТПРАВИТЬ</button>
                </div>
            </div>
            </div>
        </footer>
</template>


<script>
export default {
    name: 'WindowFooter',
    props: {
        sendId: Number
    },
    data() {
        return {
            message: '',
            photo: '',
            comment: '',
            window: false,
        }
    },
    methods: {
        sendMess() {
            const time = `${new Date().getHours()}:${new Date().getMinutes()}`
            if (this.message.length > 0) {
                const mess = {};
                mess.body = this.message.trim()// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны. var orig = "foo    "; console.log(orig.trim()); // 'foo'
                mess.sendId = this.sendId
                mess.time = time
                this.$emit('new-mess', mess)
                this.message = ''
            }
        },
        sendMessPhoto() {
            const time = `${new Date().getHours()}:${new Date().getMinutes()}`
            if (this.photo.length > 0) {
                const mess = {};
                mess.body = this.comment.trim()// Другой пример, в котором .trim() убирает пробельные символы только с одной стороны. var orig = "foo    "; console.log(orig.trim()); // 'foo'
                mess.photo = this.photo.trim()
                mess.sendId = this.sendId
                mess.time = time
                this.$emit('new-mess', mess)
                this.comment = this.photo = ''
                this.window = this.photo = ''
            }
        }
    }
}
</script>


<style ></style>