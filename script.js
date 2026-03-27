function encryptText() {
  const input = document.getElementById("encryptInput").value.trim();
  if (!input) {
    alert("Please enter text to encrypt.");
    return;
  }
  const encrypted = btoa(input); 
  const out = document.getElementById("encryptOutput");
  out.textContent = encrypted;
}
function decryptText() {
  const input = document.getElementById("decryptInput").value.trim();
  if (!input) {
    alert("Please paste encrypted text to decrypt.");
    return;
  }
  try {
    const decrypted = atob(input); 
    document.getElementById("decryptOutput").textContent = decrypted;
  } catch (err) {
    alert("Invalid encrypted value. Make sure it is Base64 text.");
  }
}
function copyToClipboard(outputId) {
  const text = document.getElementById(outputId).textContent.trim();
  if (!text || text.endsWith("appears here")) {
    alert("Nothing to copy yet.");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  }, () => {
    alert("Copy failed. Try manually selecting + Ctrl/Cmd+C.");
  });
}