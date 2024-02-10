import { Member, Profile, Server } from "@prisma/client";

export type ServerwithMembersWithProfiles = Server & {
    members: (Member & { profile: Profile })[];
};