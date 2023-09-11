import { Options, ImgOptions } from './../../index'

const imgEffect = (node: string, options = {}) => {
  let { row = 4, columns = 8, duration = 0.2, timer }: Partial<Options> = options;

   const target = document.querySelector(node) as HTMLElement;
  
  duration = duration > 1 ? +(+`0.${duration}`) : duration;

  // duration check
  console.log(duration);

  let templete: string = "";

  const {
    imgBox: { rowHeight, columnWidth },
    imgPosition: { imgWidth, imgHeight },
  }: ImgOptions = {
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
        const [cSp, iSp]:[number, number] = [columns - j, i * 0.5];
        const delaySpeed: number = (cSp - iSp) * duration;

        const left: string = `${-j * 100}%`;
        const top: string = `${-i * 100}%`;

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
        Array.from(target.children).forEach((el): void => {          
          (el as HTMLElement).style.opacity = "1";
        });
      }, timer);
  })();
};

/* test */
imgEffect(".bg01", {});
imgEffect(".bg02", { row: 10, columns: 10, duration: 2 });
imgEffect(".bg03", { row: 20, columns: 30, duration: 2 });

window.addEventListener("click", (e:MouseEvent): void => {
  const _target = (e.target as HTMLElement).closest(".effect");
  _target && _target.classList.toggle("on");
});
