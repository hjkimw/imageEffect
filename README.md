## image Effect

![이미지 인터랙션](./images/readme1.gif)

#### 이미지 슬라이드 인터랙션

```
imgEffect(".bg01", {});
imgEffect(".bg02", { row: 10, columns: 10, duration: 2 });
imgEffect(".bg03", { row: 20, columns: 30, duration: 02 });
```

- 유틸함수 첫번째 인자로 인터랙션을 적용할 DOM을 전달.
- 유틸함수 두번째 인자로 인터랙션 설정을 Object로 전달.
