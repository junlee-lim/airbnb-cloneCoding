import { createRouter, createWebHistory } from 'vue-router'
import { globalState } from '@/globalState';

// 1. views 폴더 내의 모든 .vue 파일을 미리 스캔합니다. (하위 폴더 포함)
const modules = import.meta.glob('../views/**/*.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: globalState.map(item => {
    // 2. 이미지 구조상 모든 파일이 views에 있다고 가정하거나, 
    // 실제 파일 위치에 맞춰 경로를 생성합니다.
    let filePath = '';

    return {
      path: `/${item}`,
      // 3. modules에 해당 경로의 파일이 있는지 확인 후 할당합니다.
      component: modules[filePath] || (() => import('../App.vue')) // 파일이 없으면 기본 페이지로 대체
    }
  })
});

export default router