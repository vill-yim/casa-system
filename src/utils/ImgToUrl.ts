
export const ImgToUrl = async (profile_img: any) => {
    const KEYBB: string ="ac3add3be35cc2e45fcce869bc49aeee"
    const url: string = 'https://api.imgbb.com/1/upload';
  
    // profile_img.mimetype,
    const image = new Blob([profile_img.buffer], { type: profile_img.mimetype });
  
    const Data = new FormData();
    Data.append('key', KEYBB);
    Data.append('image', image, profile_img.originalname);
  
    const res = await fetch(url, {
      method: 'POST',
      body: Data,
    });
    const r = await res.json();
    return r;
  };
  