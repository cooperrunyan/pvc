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

export { success } from './samples/200';
export { fail } from './samples/400';
