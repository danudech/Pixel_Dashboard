export type Character = {
  id: string;
  name: string;
  x: number;
  y: number;
  eyeX: number;
  eyeY: number;
  eyeWidth: number;
  message: string;
  delay?: string;
  bubbleX?: number;
};

export const characters: Character[] = [
  {
    id: "lead",
    name: "Lead",
    x: 23.8,
    y: 43.8,
    eyeX: 22.0,
    eyeY: 51.0,
    eyeWidth: 1.2,
    message: "เช็กงานแล้ว",
    delay: "0ms",
    bubbleX: -18,
  },
  {
    id: "ops",
    name: "Ops",
    x: 32.0,
    y: 41.8,
    eyeX: 29.0,
    eyeY: 50.0,
    eyeWidth: 1.1,
    message: "กำลังทำครับ",
    delay: "180ms",
    bubbleX: 18,
  },
  {
    id: "designer",
    name: "Designer",
    x: 38.3,
    y: 47.2,
    eyeX: 34.0,
    eyeY: 53.2,
    eyeWidth: 1.0,
    message: "ส่งแบบแล้ว",
    delay: "340ms",
    bubbleX: 22,
  },
  {
    id: "dev",
    name: "Dev",
    x: 34.8,
    y: 54.5,
    eyeX: 38.0,
    eyeY: 60.0,
    eyeWidth: 1.0,
    message: "แก้บั๊กอยู่",
    delay: "520ms",
    bubbleX: -8,
  },
  {
    id: "operator",
    name: "Operator",
    x: 62.0,
    y: 43.8,
    eyeX: 57.2,
    eyeY: 56.0,
    eyeWidth: 1.0,
    message: "รับเรื่องค่ะ",
    delay: "760ms",
    bubbleX: 16,
  },
  {
    id: "boss",
    name: "Boss",
    x: 86.0,
    y: 24.0,
    eyeX: 83.0,
    eyeY: 29.0,
    eyeWidth: 0.9,
    message: "ดีมาก",
    delay: "920ms",
    bubbleX: 0,
  },
];
