const date = new Date();

function checkZero(item) {
  return item < 10 ? `0${item}` : item;
}

export const currentDate = `${checkZero(date.getDate())}.${checkZero(
  date.getMonth()
)}.${date.getFullYear()}`;
