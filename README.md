# Timeline Visualization Tool

> 시간의 밀도를 시각화하는 타임라인 도구

## 목차

- [📖 프로젝트 소개](#-프로젝트-소개)
- [🏗️ 기술 스택](#️-기술-스택)
- [🎉 시작하기](#-시작하기)
- [📚 문서](#-문서)

## 📖 프로젝트 소개

내 인생의 시간을 시각적으로 이해하고, 의미 있는 순간들을 재발견하게 만드는 타임라인 시각화 도구입니다.

단순히 이력서를 만들거나 연말 회고를 작성하는 것을 넘어서, 사람들이 자신의 삶의 흐름을 한눈에 보면서 "아, 이 시기에 이런 일들이 있었구나", "생각보다 이 프로젝트가 길었네" 같은 통찰을 얻을 수 있습니다.

<[데모 영상](https://youtu.be/_3uQCMb0jA0)>

### 핵심 가치

**"시간의 밀도를 시각화한다"**

텍스트 리스트로는 느낄 수 없는 것들:

- 어떤 시기가 얼마나 바빴는지
- 프로젝트들이 어떻게 겹쳐있었는지
- 삶의 전환점이 언제였는지
- 생각보다 긴/짧았던 경험들

### 타겟 사용자

- 개발자, 디자이너 등 프로젝트 기반으로 일하는 사람들
- 자기 성찰을 중요하게 생각하는 20-30대
- 취업 준비 등 커리어 정리가 필요한 사람들
- 연말 회고를 작성하는 사람들

### 주요 기능

- **타임라인 시각화**: 시간을 공간으로 변환하여 직관적으로 이해
- **2단계 줌 레벨**: 1년 → 1개월 단위로 시간 밀도 탐색
- **트랙 기반 정리**: 일상, 프로젝트 등 카테고리별로 이벤트 분류
- **오늘 표시**: 현재 시점을 시각적으로 확인

## 🏗️ 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)

- **Frontend**: React 19.2 + TypeScript 5.9 + Vite 7.2
- **상태 관리**: TanStack Query 5.90
- **스타일링**: Tailwind CSS 4.1
- **코드 품질**: ESLint 9.39 + Prettier 3.7
- **패키지 매니저**: pnpm

## 🎉 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 각각 실행
cd client
pnpm run dev

cd server
pnpm run dev
```

---

## 📚 문서

자세한 프로젝트 기획서와 설계서는 [GitHub Wiki](https://github.com/lchanss/timeline-lchanss/wiki)에서 확인하실 수 있습니다.
