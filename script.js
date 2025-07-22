function generateQRCode() {
  const qrContainer = document.getElementById("qr-code");
  const qrText = document.getElementById("qr-input").value;

  qrContainer.innerHTML = ""; // Clear old QR

  if (qrText.trim() === "") {
    alert("Please enter text or URL");
    return;
  }

  new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
