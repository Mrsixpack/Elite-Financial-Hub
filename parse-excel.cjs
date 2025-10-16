// Parse MrSixPack Financial Tracker Excel file
const XLSX = require('xlsx');
const fs = require('fs');

try {
  // Read the Excel file
  const workbook = XLSX.readFile('MrSixPack_Financial_Tracker.xlsx');
  
  console.log('📊 Excel File Analysis\n');
  console.log('Sheet Names:', workbook.SheetNames);
  console.log('\n' + '='.repeat(80) + '\n');
  
  // Process each sheet
  workbook.SheetNames.forEach((sheetName, index) => {
    console.log(`\n📄 SHEET ${index + 1}: ${sheetName}`);
    console.log('-'.repeat(80));
    
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
    
    // Display first 20 rows
    console.log('\nFirst 20 rows:');
    jsonData.slice(0, 20).forEach((row, idx) => {
      if (row.some(cell => cell !== '')) {
        console.log(`Row ${idx + 1}:`, JSON.stringify(row));
      }
    });
    
    // Also convert with headers
    const jsonDataWithHeaders = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
    if (jsonDataWithHeaders.length > 0) {
      console.log('\n\nSample records with headers (first 5):');
      jsonDataWithHeaders.slice(0, 5).forEach((record, idx) => {
        console.log(`\nRecord ${idx + 1}:`, JSON.stringify(record, null, 2));
      });
    }
    
    console.log('\n' + '='.repeat(80));
  });
  
  // Save parsed data as JSON for easier analysis
  const allData = {};
  workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    allData[sheetName] = XLSX.utils.sheet_to_json(worksheet, { defval: '' });
  });
  
  fs.writeFileSync('parsed-financial-data.json', JSON.stringify(allData, null, 2));
  console.log('\n\n✅ Data saved to parsed-financial-data.json');
  
} catch (error) {
  console.error('❌ Error parsing Excel file:', error.message);
  process.exit(1);
}
