export interface TList {
    section: string,
    list: {
        id: string,
        title: string,
        desc?: string,
        url?: string
    }[]
}

export interface TSectionHeader {
    heading: string,
    anchor: string,
    emoji: string
}

export interface TSocialList {
    list: {
        link: string,
        text: string
    }[]
}

export interface Experiences {
    list: {
        id: string;
        title: string;
        link: string;
        startDate: string;
        endDate: string;
        role: string[];
        company: string;
        roleDuration?: Record<string, string | number>;
        companyDuration?: Record<string, string | number>;
        showcase?: {
            id: string;
            link: string;
            image?: string[];
            title?: string;
        }[];
    }[];
}
