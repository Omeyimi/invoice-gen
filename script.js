document.getElementById('download-btn').addEventListener('click', () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Get input values
  const name = document.getElementById('name').value;
  const invoiceNumber = document.getElementById('invoice-number').value;
  const date = document.getElementById('date').value;
  const details = document.getElementById('details').value;

  // Add content to the PDF
  doc.setFontSize(16);
  doc.text('Invoice', 105, 20, { align: 'center' });
  doc.setFontSize(12);
  doc.text(`Recipient: ${name}`, 20, 40);
  doc.text(`Invoice Number: ${invoiceNumber}`, 20, 50);
  doc.text(`Date: ${date}`, 20, 60);
  doc.text('Details:', 20, 80);
  doc.text(details, 20, 90, { maxWidth: 170 });

  // Download the PDF
  doc.save('invoice.pdf');
});
