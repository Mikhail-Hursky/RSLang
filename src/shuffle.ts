export default function shuffle(obj: any): Array<any> {
  let arr: Array<object> = Object.values(obj);

  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr.filter((e) => typeof e !== "number");
}
