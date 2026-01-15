<script setup>
import { ref } from 'vue';

const like = ref(false);
const ifLike = () => {
    like.value = !like.value;
}

const props = defineProps({
    picture: String,
    alt: String,
    title: String,
    period: String,
    price: String,
    rating: Number,
    badge: String
})
</script>

<template>
    <div class="item po-rel">
        <img :src="props.picture" :alt="props.alt">
        <div style="font-size: 15px;">{{ props.title }}</div>
        <div class="info">
            <div>{{ props.period }}</div>
            <div>{{ props.price }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 8px; width: 8px; fill: currentcolor;"><path fill-rule="evenodd" d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"></path></svg>
                {{ props.rating }}
            </div>
        </div>
        <div v-if="props.badge" class="badge">{{ props.badge }}</div>
        <div class="likeButton" @click="ifLike">
            <svg style="fill: red" v-if="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
            <svg class="empty" v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/></svg>
        </div>
    </div>
</template>

<style scoped>
.po-rel {position: relative;}
.po-rel .badge {position: absolute; top: 10px; left: 10px;
    background-color: whitesmoke; padding: 5px 8px;
    border-radius: 30px; font-weight: bold; font-size: 10px;
}
.po-rel .likeButton {position: absolute; top: 10px; right: 10px; cursor: pointer;}
.likeButton svg {width: 30px; height: 30px; transition: transform 0.3s ease;}
.likeButton:hover svg {transform: scale(1.1);}

.item { width: 200px;}
.item:not(:first-child) {margin-left: 10px;}
.item img { width: 200px; border-radius: 15px; height: 180px;}

.info{color: gray; font-size: 12px;}
.info svg{display: inline !important;}

.empty{
    stroke: white;
    stroke-width: 30px;
    fill: rgba(0, 0, 0, 0.4);
}
</style>