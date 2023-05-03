import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const RoleScreenMapping = async () => {
  await prisma.role_screen_mapping.createMany({
    data: [
      {
        id: 1,
        screen_access:
          '{"adminPanel":true,"employeeEngagementDashboard":true,"hallOfFame":true,"ecardTemplates":true,"certificateSend":true,"certificateCreate":true,"certificateModify":true,"badgeSend":true,"badgeCreate":true,"badgeModify":true,"awardCreate":true,"awardModify":true,"awardCategorisation":true,"awardNominatorAssignee":true,"programCreate":true,"programModify":true,"programManage":true,"surveyCreate":true,"surveyModify":true,"ideaboxHide":true,"forumHide":true,"pollCreate":true,"pollModify":true,"enliteWallHide":true}',
        role_id: 1,
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        screen_access:
          '{"adminPanel":false,"employeeEngagementDashboard":false,"hallOfFame":false,"ecardTemplates":false,"certificateSend":false,"certificateCreate":false,"certificateModify":false,"badgeSend":false,"badgeCreate":false,"badgeModify":false,"awardCreate":false,"awardModify":false,"awardCategorisation":false,"awardNominatorAssignee":false,"programCreate":false,"programModify":false,"programManage":false,"surveyCreate":false,"surveyModify":false,"ideaboxHide":false,"forumHide":false,"pollCreate":false,"pollModify":false,"enliteWallHide":false}',
        role_id: 2,
        created_by: null,
        updated_by: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });
};
