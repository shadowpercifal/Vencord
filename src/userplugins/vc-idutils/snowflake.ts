/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

// DiscordUser.ts

/**
 * Represents a Discord User decoded from a token or Snowflake ID.
 * Compatible with browser and Node.js environments.
 */

export class Snowflake {
    id: bigint;
    epoch: bigint = 1420070400000n;
    newEpoch: bigint = 1640995200000n;

    first?: string;
    second?: string;
    third?: string;

    creationTimestamp: number;
    creationDate: Date;
    idBinary: string;
    workerId: number;
    processId: number;
    increment: number;

    secondTimestamp: number | null;
    secondDate: Date | null;

    newSecondTimestamp: number | null;
    newSecondDate: Date | null;

    constructor(id: bigint, first?: string, second?: string, third?: string) {
        this.id = id;
        this.first = first;
        this.second = second;
        this.third = third;

        this.creationTimestamp = Number(((id >> 22n) + this.epoch) / 1000n);
        this.creationDate = new Date(this.creationTimestamp * 1000);
        this.idBinary = id.toString(2).padStart(64, "0");
        this.workerId = Number((id >> 17n) & 0x1Fn);
        this.processId = Number((id >> 12n) & 0x1Fn);
        this.increment = Number(id & 0xFFFn);

        this.secondTimestamp = this.decodeSecondToTimestamp();
        this.secondDate = this.secondTimestamp ? new Date(this.secondTimestamp * 1000) : null;

        this.newSecondTimestamp = this.decodeNewSecondToTimestamp();
        this.newSecondDate = this.newSecondTimestamp ? new Date(this.newSecondTimestamp * 1000) : null;
    }

    /**
     * Construct from a Discord token (base64.first.base64.second.base64.third format)
     */
    static fromToken(token: string): DiscordUser {
        const [first, second, third] = token.split(".");
        const padded = first.padEnd(first.length + (4 - (first.length % 4)) % 4, "=");
        const decoded = Buffer.from(padded, "base64");
        const id = BigInt("0x" + decoded.toString("hex"));
        return new DiscordUser(id, first, second, third);
    }

    /**
     * Encodes the user ID to base64 format for token use.
     */
    get base64Token(): string {
        const str = this.id.toString();
        return Buffer.from(str).toString("base64").replace(/=+$/, "");
    }

    /**
     * Decode the second part of a token as a raw BigInt timestamp.
     */
    private decodeSecondToTimestamp(): number | null {
        if (!this.second) return null;
        try {
            const decoded = this.base64ToBigInt(this.second);
            return Number(decoded);
        } catch {
            return null;
        }
    }

    /**
     * Decode the second part using new epoch logic.
     */
    private decodeNewSecondToTimestamp(): number | null {
        if (!this.second) return null;
        try {
            const decoded = this.base64ToBigInt(this.second);
            return Number((decoded + this.epoch) / 1000n);
        } catch {
            return null;
        }
    }

    /**
     * Helper to convert base64 string to BigInt.
     */
    private base64ToBigInt(base64: string): bigint {
        const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, "=");
        const buf = Buffer.from(padded, "base64");
        return buf.reduce((acc, byte) => (acc << 8n) + BigInt(byte), 0n);
    }
}