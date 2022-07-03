import { z } from 'zod';

export const requestStructure = z.object({
  orgId: z.string(),
  orgName: z.string(),
  packageVersion: z.number(),
  sandboxName: z.string(),
  domainName: z.string(),
  installDate: z.string().regex(/\d\d\d\d-\d\d-\d\d/g, 'Date must be in the format YYYY-MM-DD'),
  daysSinceLastHeartBeat: z.number(),
  totalHeartBeats: z.number(),
});

// "orgId": "00D2349iqasi2KLu",
// "orgName": "FastlaneCRM",
// "packageVersion": 1.12,
// "sandboxName": "test",
// "domainName": "test",
// "installDate": "2022-08-09",
// "daysSinceLastHeartBeat": 61,
// "totalHeartBeats": 14
