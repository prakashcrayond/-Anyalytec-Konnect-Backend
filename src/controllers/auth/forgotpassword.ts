import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
// import { v4 as uuid } from "uuid";
import { sendNotification } from "../../services";
import { ResponseType } from "../../utils";
import { ALERTS_HUB_RULES } from "../../utils/helpers";
dotenv.config();
const prisma = new PrismaClient();
interface payload {
  email: string;
}

//  Your password forgoting function
export const authForgotPasswordController = (params: payload) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      // getting params
      const { email } = params;

      // finding you record in users table
      let result: any = await prisma.users.findUnique({
        where: {
          email: email,
        },
        select: {
          email: true,
          id: true,
        },
      });

      if (!result) {
        return resolve({
          ...globalThis.status_codes?.not_found,
          message: "User not found",
        });
      }
      //   const res = await prisma.password_reset_token.create({
      //     data: {
      //     //   token: uuid(),
      //       user_id: result?.id,
      //     //   created_at: new Date(Date.now()),
      //     //   updated_at: new Date(Date.now()),
      //     },
      //   });

      //   const token = `${process.env.FORGOT_PASSWORD}/?token=${res?.token}`;

      if (email) {
        // send the email to user
        sendNotification({
          referenceId: ALERTS_HUB_RULES.SIGN_UP_INVITATION,
          email: {
            to_emails: [result.email],
            email_subject: ["Reset Password"],
            // email_body: [token],
          },
        });
      }

      return resolve({
        ...globalThis.status_codes?.success,
        message: "Password reset information has been sent to your email!",
      });
    } catch (error: any) {
      reject({
        ...globalThis.status_codes?.error,
        message: error?.message,
      });
    }
  });
};
