export const submitForm = () => {
  // Fake form submission
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 2000);
  })
}
