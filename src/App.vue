<script setup>
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import LodgingItem from '@/components/LodgingItem.vue';

const state = reactive({
    sections: []
});

onMounted(async () => {
    axios.get('/airbnb.json')
        .then(res => state.sections = res.data.sections)
    console.log(state.sections)
});
</script>

<template>
    <div v-for="(item, idx) in state.sections" :key="idx" class="sections">
        <div>
            <div class="sectionTitle">
                {{item.sectionData.title}}
                <span class="right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="icon-arrow"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="icon-circle"><path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
                </span>
            </div>
            <div class="d-flex">
                    <lodging-item v-for="subItem in item.sectionData.items" :key="subItem.demandStayListing.id"
                        :picture="subItem.contextualPictures[0].picture"
                        :alt="subItem.title"
                        :title="subItem.title"
                        :period="subItem.structuredContent.primaryLine[0].body"
                        :price="subItem.structuredDisplayPrice.primaryLine.accessibilityLabel"
                        :rating="subItem.avgRatingLocalized"
                        :badge="subItem.badges.length ? subItem.badges[0].text : ''"
                    />
            </div>
        </div>
    </div>
</template>

<style scoped>
.d-flex { display: flex;}
div.sections:not(:first-child) {margin-top: 30px;}
div.sections { width: 100vw; }

.right{display: inline-flex; align-items: center; justify-content: center; position: relative; margin-left: 5px; cursor: pointer;}
.icon-arrow{
    fill: black; height: 15px; width: 15px; position: absolute; z-index: 1;
}
.icon-circle{
    fill:rgb(235, 235, 235); height: 35px; width: 35px;
}
.right svg {transition: transform 0.3s ease, fill 0.3s ease;}
.right:hover .icon-circle{transform: scale(1.1); fill:rgb(218, 218, 218);}
.right:hover .icon-arrow{transform: scale(1.1); fill:black;}

div.sectionTitle{font-weight: bold; font-size: 20px; margin-bottom: 15px; display: flex; align-items: center;}
</style>