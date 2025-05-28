// healthStatusData.ts

export interface HealthStatus {
  imageUrl: string;
  name: string;
  date: string;
  color: string;
  per: number;
}

export const healthData: HealthStatus[] = [
  {
    imageUrl: "/lungs.svg",
    name: "Lungs",
    date: "26 Oct 2021",
    color: "#A84142",
    per: 100,
  },
  {
    imageUrl: "/teeth.svg",
    name: "Teeth",
    date: "26 Oct 2021",
    color: "#75CABA",
    per: 100,
  },
  {
    imageUrl: "/bone.svg",
    name: "Bone",
    date: "26 Oct 2021",
    color: "#FB6D55",
    per: 100,
  },
];
