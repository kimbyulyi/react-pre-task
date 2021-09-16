## 프론트엔드 과제

### 실행

```bash
git clone https://github.com/kimbyulyi/react-pre-task.git
cd react-pre-task
yarn
yarn dev
```

### 사용 기술

언어: `typescript`<br>
라이브러리: `react`<br>
Css-in-Js: `emotion`<br>
상태관리: `Context API`

### 폴더 구조

```
📦src
┣ 📂components
┃ ┣ 📂Campaign
┃ ┃ ┣ 📂CampaignTable
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┃ ┣ 📂CardList
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┃ ┣ 📜index.tsx
┃ ┃ ┗ 📜style.ts
┃ ┣ 📂Common
┃ ┃ ┣ 📂Button
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┃ ┣ 📂Card
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┃ ┣ 📂Icon
┃ ┃ ┃ ┣ 📜BlogIcon.tsx
┃ ┃ ┃ ┣ 📜InstaIcon.tsx
┃ ┃ ┃ ┣ 📜PageArrowL.tsx
┃ ┃ ┃ ┣ 📜PageArrowR.tsx
┃ ┃ ┃ ┗ 📜index.tsx
┃ ┃ ┣ 📂Pagination
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜styled.ts
┃ ┃ ┣ 📂Title
┃ ┃ ┃ ┣ 📜index.tsx
┃ ┃ ┃ ┗ 📜style.ts
┃ ┃ ┗ 📜index.ts
┃ ┗ 📜index.ts
┣ 📂contexts
┃ ┗ 📜campaignContext.tsx
┣ 📂lib
┃ ┗ 📂api
┃ ┃ ┣ 📜campaign.ts
┃ ┃ ┗ 📜customAxios.ts
┣ 📂styles
┃ ┣ 📜common.tsx
┃ ┗ 📜global.tsx
┣ 📂types
┃ ┗ 📜campaign.types.ts
┣ 📜App.tsx
┗ 📜index.tsx
```
