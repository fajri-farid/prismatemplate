// async function getEvents() {
//   try {
//     const res = await fetch("http://localhost:3000/api/v1/events", {
//       headers: {
//         Authorization: "secret123",
//       },
//     });

//     if (res.status !== 200) {
//       throw new Error("error bro!");
//     }

//     const data = await res.json();
//     return data;

//   } catch (error) {
//     console.log(error);
//   }
// }

// export default async function Home() {
//   const events = await getEvents();
//   // console.log(events);

//   return <div>message : {events.message}</div>;
// }
