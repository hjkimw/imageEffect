interface Options {
  row: number;
  columns: number;
  duration: number;
  timer?: number;
}

interface ImgBox {
  rowHeight: string;
  columnWidth: string;
}

interface ImgPosition {
  imgWidth: string;
  imgHeight: string;
}

interface ImgOptions {
  imgBox: ImgBox;
  imgPosition:ImgPosition;
}

export { Options, ImgOptions };