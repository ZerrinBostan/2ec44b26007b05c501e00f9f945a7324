const getProducts = async () => {
  const data = (
    await fetch(process.env.BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Access-Token": process.env.TOKEN,
      },
    })
  ).json();
  return data;
};

export default getProducts;
