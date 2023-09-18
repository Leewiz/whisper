import express, { Request, Response } from 'express'

const emoteRouter = express.Router();
emoteRouter.use(express.json());

emoteRouter.get('/', async (request: Request, response: Response) => {
    // const orderId = request.params.orderId
    // response.status(200).json(orderItem).send()
    response.status(200).send("server works");
});

// orderItemRouter.post("/", async (request: Request, response: Response) => {
//   try {
//     const body = request.body;

//     if (!body.orderId) {
//       response
//         .status(400)
//         .json({
//           error: "order id missing",
//         })
//         .send();
//     }

//     const orderItem = new OrderItem({ ...request.body });

//     const insertedOrderItem = await orderItem.save();
//     response.status(201).json(insertedOrderItem).send();
//   } catch (error) {
//     console.log(error);
//     response.status(400).json({ error }).send("message");
//   }
// });

export default emoteRouter;