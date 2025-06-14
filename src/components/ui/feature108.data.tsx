import { Layout, Pointer, Zap } from "lucide-react";
import type { Tab } from "./feature108.types";

export const defaultTabs: Tab[] = [
  {
    value: "tab-1",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Expériences Authentiques",
    content: {
      badge: "Culture Locale",
      title: "Immergez-vous dans la vraie culture béninoise.",
      description:
        "Découvrez les traditions ancestrales, les marchés colorés et l'hospitalité légendaire de Grand-Popo. Une expérience authentique qui vous marquera à vie.",
      buttonText: "Voir nos Tours",
      imageSrc:
        "https://res.cloudinary.com/dwsjriapi/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1749901010/tnbqn4bcrogwerubryfm.jpg",
      imageAlt: "Culture traditionnelle béninoise",
    },
  },
  {
    value: "tab-2",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Plages Paradisiaques",
    content: {
      badge: "Nature Préservée",
      title: "Des plages vierges à couper le souffle.",
      description:
        "Profitez de kilomètres de plages de sable fin, d'eaux cristallines et de couchers de soleil spectaculaires. Un paradis tropical préservé du tourisme de masse.",
      buttonText: "Découvrir",
      imageSrc:
        "https://res.cloudinary.com/dwsjriapi/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1749900910/ay7qtn5gpcjrlbatcpyo.webp",
      imageAlt: "Plages de Grand-Popo",
    },
  },
  {
    value: "tab-3",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Histoire Fascinante",
    content: {
      badge: "Patrimoine Unique",
      title: "Explorez un riche héritage historique.",
      description:
        "Visitez les sites historiques, les musées et les monuments qui racontent l'histoire fascinante de cette région. Un voyage dans le temps inoubliable.",
      buttonText: "En Savoir Plus",
      imageSrc:
        "https://res.cloudinary.com/dwsjriapi/image/upload/c_fill,w_800,h_600,q_auto,f_auto/v1749900889/pfn5edttg3iwtedbch7y.webp",
      imageAlt: "Sites historiques de Grand-Popo",
    },
  },
];
