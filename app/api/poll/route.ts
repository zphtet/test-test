export type msgType = { name: string; text: string };

const initialMsg: msgType = {
  name: "jackie",
  text: "Hello world",
};

let msgs: [] | msgType[] = [initialMsg];

export async function GET(request: Request) {
  return Response.json("Error", {
    status: 500,
  });
  return Response.json({
    data: msgs,
  });
}

export async function POST(request: Request) {
  const body = (await request.json()) as msgType;
  msgs = [...msgs, body];
  return Response.json({
    data: msgs,
  });
}
