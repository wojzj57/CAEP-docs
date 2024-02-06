import { DateFormat } from "./Common";

export type User = {
    id: string;
    name: string;
};

export type CIV = User & {
    gender: CIV.Gender;
    race: CIV.Race;
    birthday: DateFormat;
    job: string;
    phone: string;
    postal: string;
    address: string;
};

export type SuspectCIV = {
    id?: string;
    name?: string;
    gender?: CIV.Gender;
    race?: CIV.Race;
    birthday?: DateFormat;
    job?: string;
    phone?: string;
    postal?: string;
    address?: string;
}

export namespace CIV {
    export type Race = "white" | "black" | "asian" | "latino" | 'arab' | "other";
    export type Gender = "male" | "female";

    export const RaceStringMap = {
        white: "白人",
        black: "黑人",
        asian: "亚裔",
        latino: "拉丁裔",
        arab: "阿拉伯",
        other: "其他"
    };
    export const GenderStringMap = {
        male: "男",
        female: "女",
    };

    export const birthdayToAge = (birthday: string) => {
        const yaer = birthday.slice(0, 4);
        const month = birthday.slice(5, 7);
        const day = birthday.slice(8, 10);

        const now = new Date();
        const nowYear = now.getFullYear();
        const nowMonth = now.getMonth() + 1;
        const nowDay = now.getDate();

        return (
            nowYear -
            Number(yaer) -
            (nowMonth > Number(month) ||
                (nowMonth === Number(month) && nowDay >= Number(day))
                ? 0
                : 1)
        );
    };
}

export type Officer = User & {
    sign: string;
    AOP: string;

    //#region 个人信息
    // 职级
    rank: string;
    // 机构
    agency: string;
    // 部门
    department: string;
    // 子部门
    division: string;
    //#endregion
};
