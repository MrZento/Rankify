import { ActivityType } from 'discord.js';
import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 16039840,
    slashCommands: true,
    legacyCommands: {
        enabled: false,
        prefixes: ['q!'],
    },
    permissions: {
        all: ['1297332810994155636'],
        ranking: ['1361711337058599155'],
        users: ['1361711337058599155'],
        admin: ['1297332810994155636'],
    },
    logChannels: {
        actions: '1349655036954935306',
    },
    api: false,
    maximumRank: 255,
    verificationChecks: false,
    bloxlinkGuildId: '',
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: true,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 10,
        demotionRank: 1,
    },
    activity: {
        enabled: true,
        type: ActivityType.Playing,
        value: 'Creation Mode (Unavailable)',
    },
    status: 'dnd',
    deleteWallURLs: false,
}
