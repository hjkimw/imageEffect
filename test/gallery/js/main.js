const imgEffect = (target, options = {}) => {
  let { row = 4, columns = 8, duration = 0.2, timer } = options;

  target = document.querySelector(target);
  duration = duration > 1 ? +(+`0.${duration}`) : duration;

  // duration check
  console.log(duration);

  let templete = "";

  const {
    imgBox: { rowHeight, columnWidth },
    imgPosition: { imgWidth, imgHeight },
  } = {
    // imgBox size set
    imgBox: {
      rowHeight: `${100 / row}%`,
      columnWidth: `${100 / columns}%`,
    },
    // img position set
    imgPosition: {
      imgWidth: `${100 * columns}%`,
      imgHeight: `${100 * row}%`,
    },
  };

  return (() => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < columns; j++) {
        // const delaySpeed = ((columns - j) - (i * 0.5)) * 0.25;
        const [cSp, iSp] = [columns - j, i * 0.5];
        const delaySpeed = (cSp - iSp) * duration;

        const left = `${-j * 100}%`;
        const top = `${-i * 100}%`;

        templete += /* html */ `
            <div class="img_box" style="width:${columnWidth}; height:${rowHeight}; transition-delay:${delaySpeed}s;
              opacity:${0}; transition-duration:${2}s; z-index:${20}; overflow:hidden; position:relative; float:left; background:inherit;">
              <div class="img_position" style="width:${imgWidth}; height:${imgHeight}; position:absolute; left:${left}; top:${top}; background:inherit;"></div>
            </div>
          `;
      }
    }
    target.insertAdjacentHTML("beforeend", templete);

    timer &&
      setTimeout(() => {
        target.classList.add("on");
        [...target.children].forEach((el) => {
          el.style.opacity = "1";
        });
      }, timer);
  })();
};

// 첫번째 인자로 인터랙션을 적용할 타겟, 두번째 인자로 인터랙션 세팅을 객체로 전달하게 한다.
imgEffect(".bg01", {});
imgEffect(".bg02", { row: 10, columns: 10, duration: 2 });
imgEffect(".bg03", { row: 20, columns: 30, duration: 02 });

window.addEventListener("click", ({ target }) =>
  target.closest(".effect").classList.toggle("on")
);
