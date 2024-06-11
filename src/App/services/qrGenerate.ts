export default function generateQR(URL: String, imagePath: String) {
  let qrURL = `https://quickchart.io/qr?text=${URL}&size=200`;
  if (imagePath) {
    qrURL += `&centerImageUrl=${imagePath?.replaceAll("&", "%26")}`;
  }

  return qrURL;
}
