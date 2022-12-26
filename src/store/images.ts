export interface IImageModel {
  id: number;
  url: string;
  desc: string;
}

export const images: IImageModel[] = [
  {
    id: 1,
    url: `${process.env.PUBLIC_URL}/images/slide-01.jpg`,
    desc: 'Orange subway',
  },
  {
    id: 2,
    url: `${process.env.PUBLIC_URL}/images/slide-02.jpg`,
    desc: 'Pink underground',
  },
  {
    id: 3,
    url: `${process.env.PUBLIC_URL}/images/slide-03.jpg`,
    desc: 'Blue smoke',
  },
  {
    id: 4,
    url: `${process.env.PUBLIC_URL}/images/slide-04.jpg`,
    desc: 'Black bike',
  },
  {
    id: 5,
    url: `${process.env.PUBLIC_URL}/images/slide-05.jpg`,
    desc: 'Green lumin',
  },
];
