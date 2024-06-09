import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";

// Supabase Setup
// =========
const SUPABASE_URL = "https://dioobnzigwzcfgbhaach.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpb29ibnppZ3d6Y2ZnYmhhYWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAwOTQ1MTcsImV4cCI6MTk4NTY3MDUxN30.X45Voa4O0V-Nh2WtflqQOLN5ZmB738eMDr1H3eXcxGY";
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY);
// =========

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500,
};

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) { // Cria coisas
    console.log(req.body.emailNewsletter);
    res
      .status(httpStatus.Success)
      .json({ message: "Post request!" });
  },
  async GET(req: NextApiRequest, res: NextApiResponse) { // Retorna coisas
    const { data, error } = await dbClient
                    .from("newsletter_users")
                    .select("*");

    console.log(data);
    console.log(error);

    res
      .status(httpStatus.Success)
      .json({ message: "Get request!", data });
  }
}

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const controller = controllerByMethod[request.method];
  if(!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }
  
  controller(request, response);
}
// export default function handler(
//   request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   console.log(request.method);
//   // Servidor
//   // Request e Response
//   // Body e Headers
//   // Status Http (https://httpstatusdogs.com/)
//   // Request Methods
//   const responseBody = { name: 'Mario Souto' };
//   response
//     .status(httpStatus.Success)
//     .json(responseBody); // Vira TEXTO Puro pra passar na rede
// }
