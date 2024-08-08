import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type SheetForm = {
  Name: string | undefined;
  Email: string | undefined;
};

export async function POST(
  req: NextRequest
) {
  if (req.method !== "POST") {
    const result = {
       message: "Only POST requests are allowed!"
    }
    return NextResponse.json(result, {
      status: 405
    })
  }

  const body = req.body as unknown as SheetForm;

  console.log(body)

  try {
    // Prepare the auth.
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ]
    });

    const sheets = google.sheets({
        version: "v4", 
        auth: auth
      });
    
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:B",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [
                [body.Name, body.Email]
            ]
        }
      });

      const result = {
        data: response
      }

      return NextResponse.json(result, {
        status: 201
      })

  } catch (e: any) {
    console.log(e)
    const result = {
      message: "Something went wrong!"
    }
    NextResponse.json(result, {
      status: 500
    })
  }
}
