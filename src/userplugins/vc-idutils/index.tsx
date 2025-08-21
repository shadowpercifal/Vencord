/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import { InfoIcon } from "@components/Icons";
import { copyWithToast } from "@utils/misc";
import definePlugin from "@utils/types";
import { Menu } from "@webpack/common";
import type { Channel, Guild, Message, Role, User } from "discord-types/general";

import { Snowflake } from "./snowflake";


interface UserContextProps {
    channel: Channel;
    guildId?: string;
    user: User;
}

interface GuildContextProps {
    guild?: Guild;
}

interface ChannelContextProps {
    channel: Channel;
    // guildID?: string,
}

interface RoleContextProps {
    role: Role;
}

interface MessageContextProps {
    message: Message;
}

const UserContext: NavContextMenuPatchCallback = (children, { user, guildId }: UserContextProps) => {
    if (!user) return;
    const discordUser = new Snowflake(BigInt(user.id));
    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="copy-worker-id"
                label="Copy Worker ID"
                action={() => {
                    copyWithToast(discordUser.workerId.toString(), "Success! Copied Worker ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-process-id"
                label="Copy Process ID"
                action={() => {
                    copyWithToast(discordUser.processId.toString(), "Success! Copied Process ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-increment"
                label="Copy Increment"
                action={() => {
                    copyWithToast(discordUser.increment.toString(), "Success! Copied Increment.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-timestamp"
                label="Copy Creation Timestamp"
                action={() => {
                    copyWithToast(discordUser.creationTimestamp.toString(), "Success! Copied Creation Timestamp.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-date"
                label="Copy Creation Date"
                action={() => {
                    copyWithToast(discordUser.creationDate.toISOString(), "Success! Copied Creation Date.");
                }}
                icon={InfoIcon}
            />
        </Menu.MenuGroup>
    );
};

const MessageContext: NavContextMenuPatchCallback = (children, { message }: MessageContextProps) => {
    if (!message) return;
    const discordUser = new Snowflake(BigInt(message.id));
    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="copy-worker-id"
                label="Copy Worker ID"
                action={() => {
                    copyWithToast(discordUser.workerId.toString(), "Success! Copied Worker ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-process-id"
                label="Copy Process ID"
                action={() => {
                    copyWithToast(discordUser.processId.toString(), "Success! Copied Process ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-increment"
                label="Copy Increment"
                action={() => {
                    copyWithToast(discordUser.increment.toString(), "Success! Copied Increment.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-timestamp"
                label="Copy Creation Timestamp"
                action={() => {
                    copyWithToast(discordUser.creationTimestamp.toString(), "Success! Copied Creation Timestamp.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-date"
                label="Copy Creation Date"
                action={() => {
                    copyWithToast(discordUser.creationDate.toISOString(), "Success! Copied Creation Date.");
                }}
                icon={InfoIcon}
            />
        </Menu.MenuGroup>
    );
};


const RoleContext: NavContextMenuPatchCallback = (children, { role }: RoleContextProps) => {
    if (!role) return;
    const discordUser = new Snowflake(BigInt(role.id));
    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="copy-worker-id"
                label="Copy Worker ID"
                action={() => {
                    copyWithToast(discordUser.workerId.toString(), "Success! Copied Worker ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-process-id"
                label="Copy Process ID"
                action={() => {
                    copyWithToast(discordUser.processId.toString(), "Success! Copied Process ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-increment"
                label="Copy Increment"
                action={() => {
                    copyWithToast(discordUser.increment.toString(), "Success! Copied Increment.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-timestamp"
                label="Copy Creation Timestamp"
                action={() => {
                    copyWithToast(discordUser.creationTimestamp.toString(), "Success! Copied Creation Timestamp.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-date"
                label="Copy Creation Date"
                action={() => {
                    copyWithToast(discordUser.creationDate.toISOString(), "Success! Copied Creation Date.");
                }}
                icon={InfoIcon}
            />
        </Menu.MenuGroup>
    );
};



const GuildContext: NavContextMenuPatchCallback = (children, { guild }: GuildContextProps) => {
    if (!guild) return;
    const discordUser = new Snowflake(BigInt(guild.id));
    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="copy-worker-id"
                label="Copy Worker ID"
                action={() => {
                    copyWithToast(discordUser.workerId.toString(), "Success! Copied Worker ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-process-id"
                label="Copy Process ID"
                action={() => {
                    copyWithToast(discordUser.processId.toString(), "Success! Copied Process ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-increment"
                label="Copy Increment"
                action={() => {
                    copyWithToast(discordUser.increment.toString(), "Success! Copied Increment.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-timestamp"
                label="Copy Creation Timestamp"
                action={() => {
                    copyWithToast(discordUser.creationTimestamp.toString(), "Success! Copied Creation Timestamp.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-date"
                label="Copy Creation Date"
                action={() => {
                    copyWithToast(discordUser.creationDate.toISOString(), "Success! Copied Creation Date.");
                }}
                icon={InfoIcon}
            />
        </Menu.MenuGroup>
    );
};

const ChannelContext: NavContextMenuPatchCallback = (children, { channel }: ChannelContextProps) => {
    if (!channel) return;

    const discordUser = new Snowflake(BigInt(channel.id));
    children.push(
        <Menu.MenuGroup>
            <Menu.MenuItem
                id="copy-worker-id"
                label="Copy Worker ID"
                action={() => {
                    copyWithToast(discordUser.workerId.toString(), "Success! Copied Worker ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-process-id"
                label="Copy Process ID"
                action={() => {
                    copyWithToast(discordUser.processId.toString(), "Success! Copied Process ID.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-increment"
                label="Copy Increment"
                action={() => {
                    copyWithToast(discordUser.increment.toString(), "Success! Copied Increment.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-timestamp"
                label="Copy Creation Timestamp"
                action={() => {
                    copyWithToast(discordUser.creationTimestamp.toString(), "Success! Copied Creation Timestamp.");
                }}
                icon={InfoIcon}
            />
            <Menu.MenuItem
                id="copy-creation-date"
                label="Copy Creation Date"
                action={() => {
                    copyWithToast(discordUser.creationDate.toISOString(), "Success! Copied Creation Date.");
                }}
                icon={InfoIcon}
            />
        </Menu.MenuGroup>
    );
};


export default definePlugin({
    name: "IdUtils",
    description: "Some additional context menu options regarding IDs",
    authors: [{ name: "Shell", id: 1143657502941122580n }],
    contextMenus: {
        "user-context": UserContext,
        "guild-context": GuildContext,
        "channel-context": ChannelContext,
        "gdm-context": ChannelContext,
        "thread-context": ChannelContext,
        "guild-settings-role-context": RoleContext,
        "dev-context": RoleContext,
        "message-context": MessageContext,
        "message-actions": MessageContext,
        "message": MessageContext
    },
    async start() { }
});