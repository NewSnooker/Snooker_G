import type { Game, Template } from "./types";

export function getGames(): Game[] {
  return [
    {
      id: 1,
      name: "โครงสร้างข้อมูลและอัลกอริทึม แสตกและคิว",
      nameEn: "Data Structure Stack & Queue",
      difficulty: 8,
      creator: "Tepbahndit Sinkeebubpa",
      accuracy: 100,
      image:
        "https://kzmkhlrnns04h9qq4qpy.lite.vusercontent.net/placeholder.svg?height=150&width=250",
    },
  ];
}

export function getTemplates(): Template[] {
  return [
    {
      id: 1,
      image:
        "https://kzmkhlrnns04h9qq4qpy.lite.vusercontent.net/placeholder.svg?height=150&width=250",
      color: "bg-pink-100",
    },
    {
      id: 2,
      image:
        "https://kzmkhlrnns04h9qq4qpy.lite.vusercontent.net/placeholder.svg?height=150&width=250",
      color: "bg-purple-100",
    },
    {
      id: 3,
      image:
        "https://kzmkhlrnns04h9qq4qpy.lite.vusercontent.net/placeholder.svg?height=150&width=250",
      color: "bg-blue-100",
    },
  ];
}
