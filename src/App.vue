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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path></svg>
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
.right svg{display: inline !important;}
div.sectionTitle{font-weight: bold; font-size: 18px;}
</style>