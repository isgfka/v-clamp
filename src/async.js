const a = function () {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('a finish');
      }, 3000);
    } catch (err) {
      reject(err);
    }
  });
};
const hello = async function () {
  const b = await a();
  console.log(b);
};
hello();
