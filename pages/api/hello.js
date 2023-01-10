// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log("hello hander");

  await res.revalidate("/");

  res.status(200).json({ name: "John Doe" });
}
