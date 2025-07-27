import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "AI-native observability platform that reduces incident resolution time for engineering teams.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        }
    ],
    email: '',
    telephone: '',
    socials: {
        linkedin: 'https://www.linkedin.com/in/ankeshkhemani/',
    }
}