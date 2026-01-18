<script setup>
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import Header from '@/components/header.vue';
import LodgingItem from '@/components/LodgingItem.vue';

const state = reactive({
    sections: []
});

const scrollContainer = ref([]);
// 왼쪽/오른쪽 이동 함수
const scroll = (index, direction) => {
    const container = scrollContainer.value[index];
    if (container) {
        const scrollAmount = 400; // 한 번 클릭 시 이동할 거리
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
};

onMounted(async () => {
    axios.get('/airbnb.json')
        .then(res => state.sections = res.data.sections)
    console.log(state.sections)
});
</script>

<template>
<body>
    <Header />

    <div v-for="(item, idx) in state.sections" :key="idx" class="sections">
        <div>
            <div class="sectionTitle">
                <span class="right">
                {{item.sectionData.title}}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="icon-arrow"><path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/></svg>
                </span>
                <span class="right1">
                    <button class="btn-scroll" @click="scroll(idx, 'left')">
                        <svg viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </button>
                    <button class="btn-scroll" @click="scroll(idx, 'right')">
                        <svg viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                    </button>
                </span>
            </div>
            <div class="d-flex" :ref="el => { if (el) scrollContainer[idx] = el }">
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

</body>
</template>

<style scoped>
body {overflow-x: hidden; overflow-y: hidden; margin: 0; padding: 0;}

.d-flex {
    display: flex;
    overflow-x: auto;       /* 가로 스크롤 활성화 */
    scroll-behavior: smooth; /* 버튼 클릭 시 부드럽게 이동 */
    -ms-overflow-style: none; /* IE에서 스크롤바 숨기기 */
    scrollbar-width: none;  /* 파이어폭스에서 스크롤바 숨기기 */
}
/* 크롬, 사파리 등에서 스크롤바 보이지 않게 처리 (에어비앤비 스타일) */
.d-flex::-webkit-scrollbar {
    display: none;
}
/* LodgingItem 내부의 .item 스타일 수정 */
.item {
    flex-shrink: 0;         /* 중요: 아이템이 부모 너비에 맞춰 줄어들지 않게 함 */
    width: 250px;           /* 원하는 아이템 너비 설정 */
}

div.sections:not(:first-child) {margin-top: 30px;}
div.sections { width: 100%; margin: 12px 0px -8px; padding: 0 28px; box-sizing: border-box;}

.right {display: inline-flex; align-items: center; justify-content: center; position: relative; margin-left: 5px; cursor: pointer;}
.icon-arrow {fill: black; height: 15px; width: 15px; margin-left: 5px; padding: 7px; background-color: rgb(241, 241, 241); border-radius: 50%;}
.right:hover .icon-arrow {transform: scale(1.08); background-color: rgb(230, 230, 230); transition: transform 0.3s ease, fill 0.3s ease;}
.right1 {display: inline-flex; cursor: pointer;}

div.sectionTitle{font-weight: bold; font-size: 20px; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between;}

/* 슬라이드 조절 버튼 공통 스타일 */
.btn-scroll {
    border: 1px solid #d5d5d5;
    background-color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    margin-right: 8px; /* 버튼 사이 간격 */
}
.btn-scroll:hover {
    transform: scale(1.05);
    background-color: #f7f7f7;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
}
/* 아이콘 크기 조절 */
.btn-scroll svg {
    width: 12px;
    height: 12px;
    fill: #222;
}
</style>