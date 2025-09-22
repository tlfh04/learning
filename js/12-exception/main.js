try {
  console.log(number);
} catch (error) {
  console.log(error.name);
  console.log(error.massage);
} finally {
  console.log("무조건 실행되는 코드");
}
