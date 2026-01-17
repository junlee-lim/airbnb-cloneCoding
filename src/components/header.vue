<script setup>
import { ref } from 'vue';

// 현재 선택된 탭을 저장 (기본값: 'stay')
const activeTab = ref('stay');

// 탭 클릭 시 변경하는 함수
const setActive = (tab) => {
  activeTab.value = tab;
};

const tabIndex = {
  stay: 0,
  experience: 1,
  service: 1.95
};
</script>


<template>
<body>
    <div class="container">
        <div class="logo">
            <img src="/src/img/Airbnb_Logo_Bélo.svg.png" alt="Airbnb" class="tab-img">
        </div>
        <div class="search">
            <div class="search-line" @click="setActive('stay')">
                <div class="search-item" :class="{ 'is-active': activeTab === 'stay' }">
                    <img src="/src/img/4aae4ed7-5939-4e76-b100-e69440ebeae4.avif" alt="accommodation" class="tab-img">
                    <span :class="activeTab === 'stay' ? 'active-text' : 'inactive-text'">숙소</span>
                </div>
                <!-- <div v-if="activeTab === 'stay'" class="Bline"></div> -->
            </div>
            <div class="search-line" @click="setActive('experience')">
                <div class="search-item" :class="{ 'is-active': activeTab === 'experience' }">
                    <img src="/src/img/e47ab655-027b-4679-b2e6-df1c99a5c33d.avif" alt="experience" class="tab-img">
                    <span :class="activeTab === 'experience' ? 'active-text' : 'inactive-text'">체험</span>
                </div>
                <!-- <div v-if="activeTab === 'experience'" class="Bline"></div> -->
            </div>
            <div class="search-line" @click="setActive('service')">
                <div class="search-item" :class="{ 'is-active': activeTab === 'service' }">
                    <img src="/src/img/3d67e9a9-520a-49ee-b439-7b3a75ea814d.avif" alt="sevice" class="tab-img">
                    <span :class="activeTab === 'service' ? 'active-text' : 'inactive-text'">서비스</span>
                </div>
                <!-- <div v-if="activeTab === 'sevice'" class="Bline"></div> -->
            </div>
            <div class="Bline" :style="{ transform: `translateX(${tabIndex[activeTab] * 110}px)` }"></div>
        </div>

      <div class="hosting">
        <p class="hostText">호스팅 하기</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="globe"><path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="burger"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/></svg>
      </div>
    </div>

    <div class="search-bar-main">
        <div class="search-bar">
            <button class="item">
                <div class="text">
                    <div class="label">여행지</div>
                    <div class="value">여행지 검색</div>
                </div>
            </button>

    <div class="line"></div>

            <button class="item">
                <div class="text">
                    <div class="label">날짜</div>
                    <div class="value">날짜 추가</div>
                </div>
            </button>

    <div class="line"></div>

            <button class="item">
                <div class="text">
                    <div class="label">여행자</div>
                    <div class="value">게스트 추가</div>
                </div>            
                <div class="right">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="search-btn"><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="icon-circle"><path d="M64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
                </div>
            </button>
  </div>
</div>

</body>
</template>

<style scoped>
body {background-image: linear-gradient(white, rgb(240, 240, 240));}
.container {width: 100%; height: 90px; display: flex; align-items: center; justify-content:space-between;}
.logo img {width: 102px; height: 32px; margin-left: 20px; cursor: pointer;}
.search {display: flex; gap: 5px; justify-content: center; position: relative;}
.search-item {display: flex; align-items: center; cursor: pointer;}

.hosting {margin-right: 20px; display: flex; align-items: center;}
.hosting svg {width: 20px;}
.hosting p {font-size: 15px; margin: 0; font-weight: 500; padding: 10px;}
.globe {width: 40px; padding: 10px;cursor: pointer;}
.burger {width: 40px; padding: 10px; cursor: pointer;}
.hostText:hover {background-color: lightgray; cursor: pointer; border-radius: 30px; transition: background-color 0.2s ease;}
.globe:hover {background-color: lightgray; cursor: pointer; border-radius: 50%; transition: background-color 0.2s ease;}
.burger:hover {background-color: lightgray; cursor: pointer; border-radius: 50%; transition: background-color 0.2s ease;}

.search-bar-main {display: flex; justify-content: center; padding: 20px 0;}
.search-bar {display: flex; align-items: center; background-color: white; border: 1px solid #ebebeb; border-radius: 66px;
            box-shadow: 0 3px 12px rgba(0,0,0,0.1); width: 850px; height: 66px; position: relative;}
.item {flex: 1; display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; border: none; background: none;
        border-radius: 66px; cursor: pointer;}
.item:hover {background-color: lightgray; transition: background-color 0.2s ease;}
.text {display: flex; flex-direction: column; gap: 2px; align-items: flex-start;}
.label {font-size: 12px; font-weight: 500; color: black;}
.value {font-size: 14px; color: gray;}
.line {width: 1px; height: 32px; background-color: lightgray;}
.Bline {width: 30%; height: 3px; bottom: 0; left: 0; background-color: black; margin-left: 10px; margin-top: -5px; position: absolute; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);}

.right {display: inline-flex; align-items: center; justify-content: center; position: relative; margin-left: 5px; cursor: pointer;
        position: absolute; right: 5px;}
.search-btn {fill: white; width: 25px; position: absolute; z-index: 1;}
.icon-circle {fill:rgb(255, 105, 105); width: 60px;}
.right:hover .icon-circle {fill:rgb(209, 78, 78); transition: fill 0.3s ease; }

.item:has(.right:hover) {
    background-color: transparent; /* 또는 white */
    cursor: default; /* 돋보기 위에서는 화살표 포인터 유지 */
}

.tab-img {
  width: 70px;
  transition: transform 0.2s ease;
}
/* 활성화되지 않은(클릭 안 된) 아이템에 마우스를 올렸을 때만 확대 */
.search-item:not(.is-active):hover .tab-img {
  transform: scale(1.15);
}
/* 활성화된 아이템에는 효과 제거 */
.search-item.is-active {
  cursor: default;
}
@keyframes clickBounce {
  0% {transform: scale(1);}
  50% {transform: scale(0.6);}
  100% {transform: scale(1);}
}
.search-item.is-active .tab-img {
  animation: clickBounce 0.6s ease;
}
/* 텍스트 스타일 분리 */
.active-text {
  font-weight: bold;
  color: black;
}
.inactive-text {
  font-weight: 400;
  color: gray;
}
/* 기존 search-line 스타일 수정 */
.search-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

</style>