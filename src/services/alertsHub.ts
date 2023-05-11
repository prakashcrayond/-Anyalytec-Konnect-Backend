import axios from "axios";

const ALERTS_HUB_API_URL: any = process.env.ALERTS_HUB_API_URL;
const ALERTS_HUB_ALERT_KEY: any = process.env.ALERTS_HUB_ALERT_KEY;

interface EmailSchema {
  to_emails?: Array<string>;
  email_CC?: Array<string>;
  email_BCC?: Array<string>;
  from_mail?: string;
  email_subject?: Array<string>;
  email_body?: Array<string>;
  email_attachments?: Array<{
    content?: string;
    filename?: string;
    type?: string;
    disposition?: string;
  }>;
}

interface PushDataObject {
  id: string;
  type: string;
}

interface PushData {
  payload: PushDataObject;
}

interface PushSchema {
  push_receivers?: Array<string>;
  push_title?: Array<string>;
  push_body?: Array<string>;
  push_data?: PushData;
  push_click_action?: string;
  push_icon?: string;
}

interface SMSSchema {
  to_mobiles?: Array<string>;
  sms_body?: Array<string>;
  URL?: string;
}

interface NotificationSchema {
  referenceId: string;
  email?: EmailSchema;
  push?: PushSchema;
  sms?: SMSSchema;
}

interface SendNotificationPayload {
  reference_id: string;
  alert_key?: string;
  push_receivers?: Array<string>;
  push_title?: Array<string>;
  push_body?: Array<string>;
  push_data?: PushData;
  push_click_action?: string;
  push_icon?: string;
  to_mobiles?: Array<string>;
  sms_body?: Array<string>;
  URL?: string;
  to_emails?: Array<string>;
  email_CC?: Array<string>;
  email_BCC?: Array<string>;
  from_mail?: string;
  email_subject?: Array<string>;
  email_body?: Array<string>;
  email_attachments?: Array<{
    content?: string;
    filename?: string;
    type?: string;
    disposition?: string;
  }>;
}

export const sendNotification = ({
  referenceId,
  email = {},
  push = {},
  sms = {},
}: NotificationSchema) => {
  return new Promise<{ status: string; message: string }>(
    async (resolve, reject) => {
      try {
        let payload: SendNotificationPayload = {
          reference_id: referenceId,
          alert_key: ALERTS_HUB_ALERT_KEY,
          push_receivers: [],
          push_title: [],
          push_body: [],
          push_data: {
            payload: {
              id: "",
              type: "",
            },
          },
          push_click_action: "",
          push_icon: "",
          to_mobiles: [],
          sms_body: [],
          URL: "",
          to_emails: [],
          email_CC: [],
          email_BCC: [],
          from_mail: "",
          email_subject: [],
          email_body: [],
          email_attachments: [],
        };

        if (Object.keys(email).length > 0) {
          payload.to_emails = email.to_emails;
          payload.email_subject = email.email_subject;
          payload.email_body = email.email_body;
          if (email.email_attachments) {
            payload.email_attachments = email.email_attachments;
          }
        }

        if (Object.keys(push).length > 0) {
          payload.push_receivers = push.push_receivers;
          payload.push_body = push.push_body;
          //   payload.push_data = {
          //     payload: {
          //       id: push.push_data?.id,
          //       type: push.push_data?.type,
          //     },
          //   };
        }

        if (Object.keys(sms).length > 0) {
          payload.to_mobiles = sms.to_mobiles;
          payload.sms_body = sms.sms_body;
        }

        const response = await axios.post(ALERTS_HUB_API_URL, payload);
        resolve({ status: "Success", message: response.statusText });
      } catch (error: any) {
        resolve({
          status: "error",
          message: error?.message,
        });
      }
    }
  );
};
