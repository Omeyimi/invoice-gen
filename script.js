document.getElementById("generate-pdf").addEventListener("click", function () {
  // Fetch input values
  const issueDate = document.getElementById("issueDate").value;
  const invoiceNumber = document.getElementById("invoiceNumber").value;
  const paymentConditions = document.getElementById("paymentConditions").value;
  const invoiceAmount = document.getElementById("invoiceAmount").value;
  const latestPaymentDate = document.getElementById("latestPaymentDate").value;
  const yourReference = document.getElementById("yourReference").value;
  const description = document.getElementById("description").value;

  // Populate invoice template
  document.getElementById("issueDateDisplay").textContent = issueDate;
  document.getElementById("invoiceNumberDisplay").textContent = invoiceNumber;
  document.getElementById("paymentConditionsDisplay").textContent = paymentConditions;
  document.getElementById("invoiceAmountDisplay").textContent = invoiceAmount;
  document.getElementById("latestPaymentDateDisplay").textContent = latestPaymentDate;
  document.getElementById("yourReferenceDisplay").textContent = yourReference;
  document.getElementById("descriptionDisplay").textContent = description;

  // Generate PDF
  const invoice = document.getElementById("pdf-content");
  const options = {
    margin: 1,
    filename: `Invoice_${invoiceNumber}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  };

  html2pdf().set(options).from(invoice).save();
});
