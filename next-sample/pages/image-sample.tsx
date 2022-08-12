import { NextPage } from 'next';
import Image from 'next/image';

import shipImage from 'public/images/ship.jpg';

const ImageSample: NextPage<void> = (props) => (
  <div>
    <h1>画像表示の比較</h1>
    <p>imgタグ</p>
    <img src="/images/ship.jpg" />
    <p>Imageコンポーネント</p>
    <Image src={shipImage} placeholder="blur" />
    <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
  </div>
);

export default ImageSample;
