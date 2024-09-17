
import { QRCodeCanvas } from "qrcode.react";
import { FC } from "react";

interface QRCodeProps {
  value: string;
}

export const QRCode: FC<QRCodeProps> = ({value}) => {
  return (
    <QRCodeCanvas
      value={value}
      size={256}
      level={"L"}
    />
  );
};
